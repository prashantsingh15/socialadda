# Social Adda - Influencer Marketing Agency Website

## Project Overview
A modern, high-converting website for Social Adda, an influencer marketing agency specializing in gaming creators and esports.

## Target Audience
- Gaming creators (YouTubers, streamers)
- Premium brands in tech, gaming, and lifestyle (Samsung, iQOO, Realme, AMD, Flipkart, Mars Cosmetics, Mirai, Alta)

## Goals
- Generate high-quality brand leads
- Get top gaming creators to join the network
- Showcase credibility and past work

## Tech Stack
- **Frontend**: React 19, React Router, Tailwind CSS, Lenis (smooth scroll), React GA4
- **Backend**: FastAPI, Python
- **Database**: MongoDB
- **Email**: Resend API
- **Analytics**: Google Analytics

## Design System

### Colors
- Primary Background: `#0B0B0F` (Void Black)
- Surface Background: `#12121A`
- Accent Neon (Primary): `#00F0FF` (Cyan)
- Secondary Accent: `#8A2BE2` (Blue-Violet)
- Text Primary: `#FFFFFF`
- Text Secondary: `#A0A0A0`
- Border Subtle: `rgba(255, 255, 255, 0.1)`

### Typography
- Headings: Outfit (Google Fonts)
- Body: Manrope (Google Fonts)
- Scale: Large hero headings, generous spacing

### Design Philosophy
- Dark theme with neon accents (gaming aesthetic)
- Premium, minimal, startup-style design (Apple x esports vibe)
- Generous spacing, bento box grids
- Glassmorphism effects
- Smooth animations and transitions

## Pages

### 1. Homepage (`/`)
- Hero section with bold headline and dual CTAs
- Social proof stats (100+ campaigns, 150+ creators, 4+ years)
- Featured brands marquee
- Featured creators showcase
- Services overview
- Testimonials
- Final CTA section

### 2. About Page (`/about`)
- Origin story
- Founder credibility (4+ years, 100+ events)
- Mission & Vision cards
- Timeline of milestones

### 3. Services Page (`/services`)
- 6 key services with icons and features
- 4-step process
- Why choose us section
- CTA to start campaign

### 4. Creators Page (`/creators`)
- Featured creators showcase
- Benefits of joining network
- Creator onboarding form (MongoDB + email notification)

### 5. Brands Page (`/brands`)
- Performance metrics
- Case studies with results
- Why partner with us
- Brand lead form (MongoDB + email notification)

### 6. Contact Page (`/contact`)
- Contact information (email, phone, location)
- WhatsApp CTA button
- Contact form (MongoDB + email notification)
- Response time info

## Features

### Navigation
- Sticky navbar with glassmorphic backdrop blur
- Mobile responsive hamburger menu
- Active link highlighting

### Forms (3 Total)
1. **Contact Form**: Name, Brand, Email, Budget, Requirement
2. **Creator Onboarding**: Name, Email, Platform, Channel URL, Subscribers, Engagement Rate, Niche
3. **Brand Lead Form**: Company Name, Contact Name, Email, Phone, Campaign Goal, Budget Range

All forms:
- Save to MongoDB
- Send email notification to `business@socialadda.org`
- Show success toast notification
- Form validation
- Loading states

### WhatsApp Integration
- Floating WhatsApp button on all pages (bottom-right)
- Click-to-chat with pre-filled message
- Number: +91 9523865073

### Analytics
- Google Analytics 4 integration
- Page view tracking
- Event tracking ready

### Animations
- Lenis smooth scroll implementation
- Hover lift effects on cards
- Neon glow effects on interactive elements
- Gradient text animations

## API Endpoints

### Backend Routes (FastAPI)
- `GET /api/` - Health check
- `POST /api/contact` - Contact form submission
- `POST /api/creator-onboarding` - Creator application
- `POST /api/brand-lead` - Brand lead submission
- `GET /api/contact-submissions` - Get all contact submissions
- `GET /api/creator-submissions` - Get all creator applications
- `GET /api/brand-leads` - Get all brand leads

## Environment Variables

### Backend (`.env`)
```
MONGO_URL="mongodb://localhost:27017"
DB_NAME="test_database"
CORS_ORIGINS="*"
RESEND_API_KEY=your_resend_api_key_here
SENDER_EMAIL=onboarding@resend.dev
BUSINESS_EMAIL=business@socialadda.org
```

### Frontend (`.env`)
```
REACT_APP_BACKEND_URL=https://esports-connect-9.preview.emergentagent.com
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## MongoDB Collections
1. `contact_submissions` - Contact form data
2. `creator_onboarding` - Creator applications
3. `brand_leads` - Brand lead inquiries

## Setup Instructions

### Prerequisites
- Resend API key (for email notifications)
- Google Analytics Measurement ID (for tracking)

### Installation
1. Backend dependencies are in `requirements.txt`
2. Frontend dependencies are in `package.json`
3. Update environment variables
4. Restart services: `sudo supervisorctl restart backend frontend`

## Next Steps & Enhancements

1. **Content Management**
   - Add admin dashboard to view form submissions
   - Export leads to CSV

2. **Creator Verification**
   - Implement creator profile review system
   - Badge system for verified creators

3. **Analytics Dashboard**
   - Custom analytics dashboard showing campaign metrics
   - Real-time lead tracking

4. **Email Automation**
   - Automated follow-up emails
   - Welcome email sequence for creators

5. **SEO Optimization**
   - Add meta tags for all pages
   - Implement sitemap
   - Add schema.org markup

6. **Performance**
   - Image optimization (WebP format)
   - Lazy loading for images
   - CDN integration

## Brand Assets Mentioned
- Samsung
- iQOO
- Realme
- AMD
- Flipkart
- Mars Cosmetics
- Mirai
- Alta

## Contact Information
- Email: business@socialadda.org
- Phone: +91 9523865073
- WhatsApp: +91 9523865073
- Location: India

## Notes
- All forms store data in MongoDB as backup
- Email notifications sent via Resend API
- Smooth scroll implemented with Lenis
- Google Analytics tracking on all pages
- Responsive design (mobile-first approach)
- Dark theme throughout
- Premium gaming aesthetic with neon accents
