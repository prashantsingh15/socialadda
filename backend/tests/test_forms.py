"""Backend API tests for Social Adda: contact, creator-onboarding, brand-lead."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL') or open('/app/frontend/.env').read().split('REACT_APP_BACKEND_URL=')[1].split('\n')[0].strip()
BASE_URL = BASE_URL.rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Root health ---
def test_root(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    assert "Social Adda" in r.json().get("message", "")


# --- Contact form ---
def test_contact_submit_and_persist(client):
    payload = {
        "name": "TEST_Contact User",
        "brand": "TEST_Brand",
        "budget": "10000",
        "requirement": "Need creators for launch",
        "email": "test_contact@example.com",
    }
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["brand"] == payload["brand"]
    assert "id" in data and len(data["id"]) > 0

    # Verify persistence via list
    r2 = client.get(f"{API}/contact-submissions")
    assert r2.status_code == 200
    ids = [s["id"] for s in r2.json()]
    assert data["id"] in ids


def test_contact_missing_field(client):
    r = client.post(f"{API}/contact", json={"name": "X"})
    assert r.status_code == 422


def test_contact_optional_email_omitted(client):
    payload = {
        "name": "TEST_NoEmail",
        "brand": "TEST_Brand2",
        "budget": "5000",
        "requirement": "Basic ask",
    }
    r = client.post(f"{API}/contact", json=payload)
    assert r.status_code == 200


# --- Creator onboarding ---
def test_creator_onboarding_submit(client):
    payload = {
        "name": "TEST_Creator",
        "email": "test_creator@example.com",
        "platform": "Instagram",
        "channel_url": "https://instagram.com/test",
        "subscribers": "50000",
        "engagement_rate": "5%",
        "niche": "Gaming",
    }
    r = client.post(f"{API}/creator-onboarding", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["email"] == payload["email"]
    assert data["platform"] == "Instagram"
    assert "id" in data

    r2 = client.get(f"{API}/creator-submissions")
    assert r2.status_code == 200
    assert any(s["id"] == data["id"] for s in r2.json())


def test_creator_invalid_email(client):
    payload = {
        "name": "TEST_Bad",
        "email": "not-an-email",
        "platform": "YT",
        "channel_url": "x",
        "subscribers": "1",
        "niche": "x",
    }
    r = client.post(f"{API}/creator-onboarding", json=payload)
    assert r.status_code == 422


# --- Brand lead ---
def test_brand_lead_submit(client):
    payload = {
        "company_name": "TEST_Company",
        "contact_name": "TEST_Contact",
        "email": "test_brand@example.com",
        "phone": "+911234567890",
        "campaign_goal": "Awareness",
        "budget_range": "5L-10L",
    }
    r = client.post(f"{API}/brand-lead", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["company_name"] == payload["company_name"]
    assert "id" in data

    r2 = client.get(f"{API}/brand-leads")
    assert r2.status_code == 200
    assert any(s["id"] == data["id"] for s in r2.json())


def test_brand_lead_missing_required(client):
    r = client.post(f"{API}/brand-lead", json={"company_name": "X"})
    assert r.status_code == 422
