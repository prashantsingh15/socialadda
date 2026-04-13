from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, EmailStr, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import resend
import asyncio

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
resend.api_key = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
BUSINESS_EMAIL = os.environ.get('BUSINESS_EMAIL', 'business@socialadda.org')

# Create the main app
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# Models
class ContactFormSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    brand: str
    budget: str
    requirement: str
    email: Optional[EmailStr] = None
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactFormCreate(BaseModel):
    name: str
    brand: str
    budget: str
    requirement: str
    email: Optional[EmailStr] = None


class CreatorOnboardingSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    platform: str
    channel_url: str
    subscribers: str
    engagement_rate: Optional[str] = None
    niche: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class CreatorOnboardingCreate(BaseModel):
    name: str
    email: EmailStr
    platform: str
    channel_url: str
    subscribers: str
    engagement_rate: Optional[str] = None
    niche: str


class BrandLeadSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    company_name: str
    contact_name: str
    email: EmailStr
    phone: Optional[str] = None
    campaign_goal: str
    budget_range: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class BrandLeadCreate(BaseModel):
    company_name: str
    contact_name: str
    email: EmailStr
    phone: Optional[str] = None
    campaign_goal: str
    budget_range: str


# Helper function to send email
async def send_email_notification(recipient: str, subject: str, html_content: str) -> bool:
    """Send email using Resend API"""
    params = {
        "from": SENDER_EMAIL,
        "to": [recipient],
        "subject": subject,
        "html": html_content
    }
    
    try:
        email = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Email sent successfully to {recipient}: {email.get('id')}")
        return True
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False


# Routes
@api_router.get("/")
async def root():
    return {"message": "Social Adda API - Powering India's Top Gaming Creators"}


@api_router.post("/contact", response_model=ContactFormSubmission)
async def submit_contact_form(input: ContactFormCreate):
    """Handle contact form submissions"""
    try:
        contact_dict = input.model_dump()
        contact_obj = ContactFormSubmission(**contact_dict)
        
        # Convert to dict and serialize datetime to ISO string for MongoDB
        doc = contact_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        
        # Save to MongoDB
        await db.contact_submissions.insert_one(doc)
        logger.info(f"Contact form saved to database: {contact_obj.id}")
        
        # Prepare email notification
        html_content = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #00F0FF;">New Contact Form Submission - Social Adda</h2>
                <div style="background: #f4f4f4; padding: 20px; border-radius: 5px;">
                    <p><strong>Name:</strong> {contact_obj.name}</p>
                    <p><strong>Brand:</strong> {contact_obj.brand}</p>
                    <p><strong>Budget:</strong> {contact_obj.budget}</p>
                    <p><strong>Email:</strong> {contact_obj.email or 'Not provided'}</p>
                    <p><strong>Requirement:</strong></p>
                    <p>{contact_obj.requirement}</p>
                    <p style="margin-top: 20px; font-size: 12px; color: #777;">
                        Submitted on: {contact_obj.timestamp.strftime('%Y-%m-%d %H:%M:%S UTC')}
                    </p>
                </div>
            </body>
        </html>
        """
        
        # Send email notification asynchronously
        await send_email_notification(
            recipient=BUSINESS_EMAIL,
            subject=f"New Contact Form: {contact_obj.brand}",
            html_content=html_content
        )
        
        return contact_obj
        
    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to process contact form: {str(e)}")


@api_router.post("/creator-onboarding", response_model=CreatorOnboardingSubmission)
async def submit_creator_onboarding(input: CreatorOnboardingCreate):
    """Handle creator onboarding form submissions"""
    try:
        creator_dict = input.model_dump()
        creator_obj = CreatorOnboardingSubmission(**creator_dict)
        
        # Convert to dict and serialize datetime to ISO string for MongoDB
        doc = creator_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        
        # Save to MongoDB
        await db.creator_onboarding.insert_one(doc)
        logger.info(f"Creator onboarding saved to database: {creator_obj.id}")
        
        # Prepare email notification
        html_content = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #8A2BE2;">New Creator Onboarding - Social Adda</h2>
                <div style="background: #f4f4f4; padding: 20px; border-radius: 5px;">
                    <p><strong>Creator Name:</strong> {creator_obj.name}</p>
                    <p><strong>Email:</strong> {creator_obj.email}</p>
                    <p><strong>Platform:</strong> {creator_obj.platform}</p>
                    <p><strong>Channel URL:</strong> <a href="{creator_obj.channel_url}">{creator_obj.channel_url}</a></p>
                    <p><strong>Subscribers:</strong> {creator_obj.subscribers}</p>
                    <p><strong>Engagement Rate:</strong> {creator_obj.engagement_rate or 'Not provided'}</p>
                    <p><strong>Niche:</strong> {creator_obj.niche}</p>
                    <p style="margin-top: 20px; font-size: 12px; color: #777;">
                        Submitted on: {creator_obj.timestamp.strftime('%Y-%m-%d %H:%M:%S UTC')}
                    </p>
                </div>
            </body>
        </html>
        """
        
        # Send email notification asynchronously
        await send_email_notification(
            recipient=BUSINESS_EMAIL,
            subject=f"New Creator Application: {creator_obj.name}",
            html_content=html_content
        )
        
        return creator_obj
        
    except Exception as e:
        logger.error(f"Error processing creator onboarding: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to process creator onboarding: {str(e)}")


@api_router.post("/brand-lead", response_model=BrandLeadSubmission)
async def submit_brand_lead(input: BrandLeadCreate):
    """Handle brand lead form submissions"""
    try:
        lead_dict = input.model_dump()
        lead_obj = BrandLeadSubmission(**lead_dict)
        
        # Convert to dict and serialize datetime to ISO string for MongoDB
        doc = lead_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        
        # Save to MongoDB
        await db.brand_leads.insert_one(doc)
        logger.info(f"Brand lead saved to database: {lead_obj.id}")
        
        # Prepare email notification
        html_content = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #00F0FF;">New Brand Lead - Social Adda</h2>
                <div style="background: #f4f4f4; padding: 20px; border-radius: 5px;">
                    <p><strong>Company:</strong> {lead_obj.company_name}</p>
                    <p><strong>Contact Name:</strong> {lead_obj.contact_name}</p>
                    <p><strong>Email:</strong> {lead_obj.email}</p>
                    <p><strong>Phone:</strong> {lead_obj.phone or 'Not provided'}</p>
                    <p><strong>Campaign Goal:</strong> {lead_obj.campaign_goal}</p>
                    <p><strong>Budget Range:</strong> {lead_obj.budget_range}</p>
                    <p style="margin-top: 20px; font-size: 12px; color: #777;">
                        Submitted on: {lead_obj.timestamp.strftime('%Y-%m-%d %H:%M:%S UTC')}
                    </p>
                </div>
            </body>
        </html>
        """
        
        # Send email notification asynchronously
        await send_email_notification(
            recipient=BUSINESS_EMAIL,
            subject=f"New Brand Lead: {lead_obj.company_name}",
            html_content=html_content
        )
        
        return lead_obj
        
    except Exception as e:
        logger.error(f"Error processing brand lead: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to process brand lead: {str(e)}")


@api_router.get("/contact-submissions", response_model=List[ContactFormSubmission])
async def get_contact_submissions():
    """Get all contact form submissions"""
    submissions = await db.contact_submissions.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for sub in submissions:
        if isinstance(sub['timestamp'], str):
            sub['timestamp'] = datetime.fromisoformat(sub['timestamp'])
    
    return submissions


@api_router.get("/creator-submissions", response_model=List[CreatorOnboardingSubmission])
async def get_creator_submissions():
    """Get all creator onboarding submissions"""
    submissions = await db.creator_onboarding.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for sub in submissions:
        if isinstance(sub['timestamp'], str):
            sub['timestamp'] = datetime.fromisoformat(sub['timestamp'])
    
    return submissions


@api_router.get("/brand-leads", response_model=List[BrandLeadSubmission])
async def get_brand_leads():
    """Get all brand lead submissions"""
    submissions = await db.brand_leads.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for sub in submissions:
        if isinstance(sub['timestamp'], str):
            sub['timestamp'] = datetime.fromisoformat(sub['timestamp'])
    
    return submissions


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
