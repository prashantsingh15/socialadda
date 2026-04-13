# Social Adda - Creator-First Influencer Marketing Agency

## Original Problem Statement
Build a modern, high-converting website for Social Adda, an influencer marketing agency targeting gaming creators and premium brands.

## Architecture
- **Frontend**: React 19, React Router, Tailwind CSS, Shadcn UI, Lenis (smooth scroll), React GA4
- **Backend**: FastAPI, Python
- **Database**: MongoDB (motor async driver)
- **Email**: Resend API (needs API key)
- **Analytics**: Google Analytics (needs Measurement ID)

## User Personas
1. **Brand Marketers** - looking to scale campaigns through creator marketing
2. **Gaming Creators** - looking to join a managed network for brand deals
3. **Agency Partners** - looking for tournament/event execution

## Core Requirements
- 6-page marketing website (Home, About, Services, Creators, Brands, Contact)
- Dark theme (#0B0B0F) with neon cyan (#00F0FF) and purple (#8A2BE2) accents
- All content from official brand deck (no generic AI text)
- No fake creator profiles
- Brand logos from real clients
- Form submissions stored in MongoDB + email notifications via Resend
- WhatsApp click-to-chat integration
- Smooth scrolling, responsive design

## What's Been Implemented (April 13, 2026)

### Iteration 1 - Initial Build
- Created all 6 pages with placeholder content
- Backend with 3 form endpoints (contact, creator-onboarding, brand-lead)
- MongoDB storage for all form submissions
- Email notification system via Resend (placeholder key)
- WhatsApp float button
- Lenis smooth scroll
- Google Analytics setup (placeholder ID)
- Responsive navbar and footer

### Iteration 2 - Brand Deck Integration
- Extracted all content from 16-page brand deck PDF
- Replaced all generic content with real brand deck data
- Updated stats: 800M+ Views, 1000+ Collaborations, 2000+ Creators, 20+ States
- Updated clients: Flipkart, Amazon, NVIDIA, Gigabyte, Samsung, Lenskart, UniPin, Zupee, Mars, Snitch
- Added real mission/vision from deck
- Removed all fake creator profiles
- Updated phone to 9211758155 from deck
- Integrated official logo (navbar, footer, favicon)

### Iteration 3 - Final Design Polish
- Added brand logos section with locally cached logo images (logo.dev API)
- Updated social media to ONLY Instagram + LinkedIn (removed Facebook/YouTube/Twitter)
- Instagram: https://www.instagram.com/the.social.adda
- LinkedIn: https://www.linkedin.com/company/social-adda-page/
- Added Instagram CTA in Creators page
- Strengthened hero headline: "India's Leading Creator Marketing Agency"
- Added hero metrics (800M+, 1000+, 2000+) prominently
- Added social links to Contact page
- Improved overall premium feel with better spacing and typography

## Key Brand Data (from deck)
- Founded: 2023
- Tagline: Creator-First Agency
- Mission: Build meaningful, performance-driven collaborations between brands and creators
- Vision: Become India's most trusted influencer marketing partner
- Stats: 800M+ Views, 1000+ Collaborations, 2000+ Creators, 20+ States
- Clients: Flipkart, Amazon, NVIDIA, Gigabyte, Samsung, Lenskart, UniPin, Zupee, Mars, Snitch
- Services: Influencer Marketing Strategy, Content Planning & Execution
- Industries: Gaming & Esports, Beauty & Cosmetics, Fashion, EdTech, FinTech, Lifestyle, E-commerce, Food & Beverage, Tech & Electronics
- Contact: business@socialadda.org, +91 9211758155

## Prioritized Backlog

### P0 (Before Deployment)
- [x] Brand logos section
- [x] Social media links (IG + LinkedIn only)
- [x] Remove fake creator profiles
- [x] Stronger hero headline
- [x] Logo integration
- [ ] Get Resend API key from user
- [ ] Get Google Analytics Measurement ID

### P1 (Post-Launch)
- Admin dashboard for viewing form submissions
- SEO meta tags for each page
- Blog/case studies section
- Cookie consent banner
- Schema.org markup

### P2 (Growth)
- Creator portfolio showcase
- Campaign ROI calculator
- Automated email sequences
- CRM integration
- Multi-language support (Hindi, etc.)

## Contact
- Email: business@socialadda.org
- Phone: +91 9211758155
- Instagram: @the.social.adda
- LinkedIn: /company/social-adda-page/
