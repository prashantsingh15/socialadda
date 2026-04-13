import requests
import sys
from datetime import datetime
import json

class SocialAddaAPITester:
    def __init__(self, base_url="https://esports-connect-9.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/api/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"Response: {json.dumps(response_data, indent=2)}")
                except:
                    print(f"Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text}")
                self.failed_tests.append({
                    'test': name,
                    'expected': expected_status,
                    'actual': response.status_code,
                    'response': response.text
                })

            return success, response.json() if success and response.content else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                'test': name,
                'error': str(e)
            })
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test(
            "Root API Endpoint",
            "GET",
            "",
            200
        )

    def test_contact_form(self):
        """Test contact form submission"""
        test_data = {
            "name": "Test User",
            "brand": "Test Brand Co",
            "budget": "₹5-10 Lakhs",
            "requirement": "Looking for gaming influencer partnerships for product launch",
            "email": "test@example.com"
        }
        
        return self.run_test(
            "Contact Form Submission",
            "POST",
            "contact",
            200,
            data=test_data
        )

    def test_creator_onboarding(self):
        """Test creator onboarding form"""
        test_data = {
            "name": "Gaming Creator",
            "email": "creator@example.com",
            "platform": "YouTube",
            "channel_url": "https://youtube.com/@testcreator",
            "subscribers": "100K-500K",
            "engagement_rate": "5-10%",
            "niche": "Gaming/BGMI"
        }
        
        return self.run_test(
            "Creator Onboarding",
            "POST",
            "creator-onboarding",
            200,
            data=test_data
        )

    def test_brand_lead(self):
        """Test brand lead form"""
        test_data = {
            "company_name": "Tech Brand India",
            "contact_name": "Marketing Manager",
            "email": "brand@example.com",
            "phone": "+91 9876543210",
            "campaign_goal": "Product launch with gaming creators for new smartphone",
            "budget_range": "₹10-25 Lakhs"
        }
        
        return self.run_test(
            "Brand Lead Submission",
            "POST",
            "brand-lead",
            200,
            data=test_data
        )

    def test_get_submissions(self):
        """Test getting submissions (optional endpoints)"""
        endpoints = [
            ("Contact Submissions", "contact-submissions"),
            ("Creator Submissions", "creator-submissions"),
            ("Brand Leads", "brand-leads")
        ]
        
        for name, endpoint in endpoints:
            self.run_test(name, "GET", endpoint, 200)

def main():
    print("🚀 Starting Social Adda API Testing...")
    print("=" * 60)
    
    tester = SocialAddaAPITester()
    
    # Test all endpoints
    print("\n📡 Testing API Endpoints...")
    tester.test_root_endpoint()
    tester.test_contact_form()
    tester.test_creator_onboarding()
    tester.test_brand_lead()
    
    print("\n📊 Testing Data Retrieval...")
    tester.test_get_submissions()

    # Print final results
    print("\n" + "=" * 60)
    print(f"📊 Final Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for failure in tester.failed_tests:
            print(f"  - {failure}")
    
    success_rate = (tester.tests_passed / tester.tests_run) * 100 if tester.tests_run > 0 else 0
    print(f"Success Rate: {success_rate:.1f}%")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())