import { useState } from 'react';
import axios from 'axios';
import { Loader2, TrendingUp, Users, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const BrandsPage = () => {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    phone: '',
    campaign_goal: '',
    budget_range: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const caseStudies = [
    {
      brand: 'Tech Giant X',
      campaign: 'Product Launch Campaign',
      reach: '15M+',
      engagement: '2.5M+',
      conversions: '50K+',
      image: 'https://images.pexels.com/photos/18966441/pexels-photo-18966441.jpeg',
      description: 'Launched flagship gaming phone with 25 top BGMI creators'
    },
    {
      brand: 'Gaming Peripheral Brand',
      campaign: 'Tournament Sponsorship',
      reach: '8M+',
      engagement: '1.8M+',
      conversions: '30K+',
      image: 'https://images.pexels.com/photos/14266493/pexels-photo-14266493.jpeg',
      description: 'Sponsored 3 major esports tournaments with integrated brand activations'
    },
    {
      brand: 'E-commerce Platform',
      campaign: 'Gaming Sale Promotion',
      reach: '12M+',
      engagement: '3.2M+',
      conversions: '80K+',
      image: 'https://images.pexels.com/photos/9072205/pexels-photo-9072205.jpeg',
      description: 'Drove record sales through coordinated creator campaigns'
    }
  ];

  const metrics = [
    { icon: TrendingUp, value: '150M+', label: 'Total Reach', color: '#00F0FF' },
    { icon: Users, value: '25M+', label: 'Engagement', color: '#8A2BE2' },
    { icon: Target, value: '5x', label: 'Average ROI', color: '#00F0FF' },
    { icon: Award, value: '95%', label: 'Client Satisfaction', color: '#8A2BE2' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/brand-lead`, formData);
      toast.success('Thank you! We\'ll contact you within 24 hours.');
      setFormData({
        company_name: '',
        contact_name: '',
        email: '',
        phone: '',
        campaign_goal: '',
        budget_range: ''
      });
    } catch (error) {
      toast.error('Failed to submit. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" data-testid="brands-page">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-[#0B0B0F] to-[#12121A]" data-testid="brands-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            Scale Your Brand With <br />
            <span className="gradient-text">Gaming Creators</span>
          </h1>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
            Reach millions of engaged gaming enthusiasts through authentic creator partnerships.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="metrics-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="text-center" data-testid={`metric-${index}`}>
                  <Icon className="w-12 h-12 mx-auto mb-4" style={{ color: metric.color }} />
                  <h3 className="text-4xl font-bold text-white mb-2">{metric.value}</h3>
                  <p className="text-[#A0A0A0] uppercase tracking-widest text-sm">{metric.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-[#12121A]" data-testid="case-studies-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">Success <span className="text-[#00F0FF]">Stories</span></h2>
          <p className="text-[#A0A0A0] text-center mb-16 max-w-2xl mx-auto">Real campaigns, real results. See how we've helped brands dominate the gaming space.</p>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-[#0B0B0F] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00F0FF]/50 transition-all duration-500"
                data-testid={`case-study-${index}`}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <img
                    src={study.image}
                    alt={study.brand}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                  <div className="p-10">
                    <h3 className="text-3xl font-bold text-white mb-2">{study.brand}</h3>
                    <p className="text-[#00F0FF] font-semibold mb-4">{study.campaign}</p>
                    <p className="text-[#A0A0A0] leading-relaxed mb-6">{study.description}</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-2xl font-bold text-white">{study.reach}</p>
                        <p className="text-xs text-[#A0A0A0] uppercase tracking-wider">Reach</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">{study.engagement}</p>
                        <p className="text-xs text-[#A0A0A0] uppercase tracking-wider">Engagement</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">{study.conversions}</p>
                        <p className="text-xs text-[#A0A0A0] uppercase tracking-wider">Conversions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="why-work-section">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">Why Partner With <span className="gradient-text">Social Adda</span>?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'ROI-Focused Campaigns', desc: 'Every campaign is optimized for conversions and measurable business impact' },
              { title: 'Verified Creator Network', desc: '150+ vetted gaming creators with proven engagement and authenticity' },
              { title: 'Full Campaign Management', desc: 'From strategy to execution to reporting - we handle everything' },
              { title: 'Real-Time Analytics', desc: 'Track campaign performance with detailed metrics and insights' }
            ].map((point, index) => (
              <div key={index} className="bg-[#12121A] border border-white/10 rounded-2xl p-8" data-testid={`why-work-${index}`}>
                <h4 className="text-xl font-bold text-white mb-3">{point.title}</h4>
                <p className="text-[#A0A0A0]">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-24 bg-[#12121A]" data-testid="lead-form-section">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">Start Your <span className="text-[#00F0FF]">Campaign</span></h2>
          <p className="text-[#A0A0A0] text-center mb-12">Tell us about your goals and we'll create a custom campaign strategy for you.</p>

          <form onSubmit={handleSubmit} className="bg-[#0B0B0F] border border-white/10 rounded-2xl p-8 space-y-6" data-testid="brand-lead-form">
            <div>
              <Label htmlFor="company_name" className="text-white mb-2 block">Company Name *</Label>
              <Input
                id="company_name"
                name="company_name"
                type="text"
                required
                value={formData.company_name}
                onChange={handleChange}
                className="bg-[#12121A] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                data-testid="form-input-company"
              />
            </div>

            <div>
              <Label htmlFor="contact_name" className="text-white mb-2 block">Your Name *</Label>
              <Input
                id="contact_name"
                name="contact_name"
                type="text"
                required
                value={formData.contact_name}
                onChange={handleChange}
                className="bg-[#12121A] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                data-testid="form-input-contact-name"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-white mb-2 block">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-[#12121A] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                data-testid="form-input-email"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-white mb-2 block">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="bg-[#12121A] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                data-testid="form-input-phone"
              />
            </div>

            <div>
              <Label htmlFor="campaign_goal" className="text-white mb-2 block">Campaign Goal *</Label>
              <Textarea
                id="campaign_goal"
                name="campaign_goal"
                required
                rows={4}
                placeholder="e.g., Product launch, brand awareness, sales conversion..."
                value={formData.campaign_goal}
                onChange={handleChange}
                className="bg-[#12121A] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                data-testid="form-input-goal"
              />
            </div>

            <div>
              <Label htmlFor="budget_range" className="text-white mb-2 block">Budget Range *</Label>
              <Input
                id="budget_range"
                name="budget_range"
                type="text"
                required
                placeholder="e.g., ₹5-10 Lakhs"
                value={formData.budget_range}
                onChange={handleChange}
                className="bg-[#12121A] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                data-testid="form-input-budget"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#00F0FF] text-[#0B0B0F] font-bold py-6 rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.5)] disabled:opacity-50"
              data-testid="form-submit-button"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Start Your Campaign'
              )}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BrandsPage;
