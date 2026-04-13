import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Loader2, TrendingUp, Users, Target, Eye, ArrowRight, BarChart3, Shield } from 'lucide-react';
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

  const metrics = [
    { icon: Eye, value: '800M+', label: 'Views Delivered', color: '#00F0FF' },
    { icon: Users, value: '2000+', label: 'Creators', color: '#8A2BE2' },
    { icon: TrendingUp, value: '8.4%', label: 'Avg. Engagement', color: '#00F0FF' },
    { icon: Shield, value: 'Strong', label: 'Repeat Partnerships', color: '#8A2BE2' },
  ];

  const clients = ['Flipkart', 'Amazon', 'NVIDIA', 'Gigabyte', 'Samsung', 'Lenskart', 'UniPin', 'Zupee', 'Mars', 'Snitch'];

  const whatWeMeasure = [
    'Reach & Impressions',
    'Engagement Rate',
    'Watch Time & Retention',
    'Clicks & Conversions',
    'Creator-wise Performance',
  ];

  const contentHighlights = [
    { title: 'Strong Hooks', desc: 'Capturing attention within the first 3 seconds.' },
    { title: 'High Audience Retention', desc: 'Content structured to keep viewers watching till the end.' },
    { title: 'Share-worthy Narratives', desc: 'Stories that people want to pass on to their network.' },
    { title: 'Platform-friendly Formats', desc: 'Native aspect ratios and editing styles for max reach.' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(`${API}/brand-lead`, formData);
      toast.success("Thank you! We'll contact you within 24 hours with a custom campaign strategy.");
      setFormData({ company_name: '', contact_name: '', email: '', phone: '', campaign_goal: '', budget_range: '' });
    } catch (error) {
      toast.error('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" data-testid="brands-page">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-b from-[#0B0B0F] to-[#12121A]" data-testid="brands-hero">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#00F0FF] mb-6">For Brands</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-8">
            Scale Your Brand With <br />
            <span className="gradient-text">Creators Who Convert</span>
          </h1>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed">
            Drive trust, engagement & results through strategic influencer marketing campaigns across India.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24 bg-[#0B0B0F] border-y border-white/5" data-testid="metrics-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#A0A0A0] text-center mb-12">Delivering measurable performance across the metrics that matter most.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="text-center" data-testid={`metric-${index}`}>
                  <Icon className="w-8 h-8 mx-auto mb-3" style={{ color: metric.color }} />
                  <h3 className="text-4xl font-bold text-white mb-1">{metric.value}</h3>
                  <p className="text-[#A0A0A0] text-sm">{metric.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 bg-[#12121A]" data-testid="brands-clients">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#00F0FF] text-center mb-10">Brands We've Worked With</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {clients.map((client, index) => (
              <span key={index} className="text-[#A0A0A0] font-semibold text-sm tracking-[0.15em] uppercase hover:text-white transition-colors duration-300" data-testid={`brand-client-${index}`}>
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Content Works */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="content-strategy-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8A2BE2] mb-4">Strategy</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Why Our Content <span className="gradient-text">Works</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {contentHighlights.map((item, index) => (
              <div key={index} className="bg-[#12121A] border border-white/10 rounded-2xl p-8 hover:border-[#00F0FF]/30 transition-all duration-300" data-testid={`content-strategy-${index}`}>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting & Metrics */}
      <section className="py-24 bg-[#12121A]" data-testid="reporting-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#00F0FF] mb-4">What We Measure</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Reporting & <span className="gradient-text">Metrics</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {whatWeMeasure.map((metric, index) => (
              <div key={index} className="bg-[#0B0B0F] border border-white/10 rounded-xl p-5 text-center hover:border-[#8A2BE2]/30 transition-all duration-300" data-testid={`measure-${index}`}>
                <p className="text-white font-medium text-sm">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="lead-form-section">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#00F0FF] mb-4">Get Started</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Start Your <span className="gradient-text">Campaign</span></h2>
            <p className="text-[#A0A0A0] mt-4 text-sm">Tell us about your goals and we'll create a custom strategy within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#12121A] border border-white/10 rounded-2xl p-8 space-y-5" data-testid="brand-lead-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="company_name" className="text-white text-sm mb-2 block">Company Name *</Label>
                <Input id="company_name" name="company_name" type="text" required value={formData.company_name} onChange={handleChange} className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]" data-testid="form-input-company" />
              </div>
              <div>
                <Label htmlFor="contact_name" className="text-white text-sm mb-2 block">Your Name *</Label>
                <Input id="contact_name" name="contact_name" type="text" required value={formData.contact_name} onChange={handleChange} className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]" data-testid="form-input-contact-name" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="email" className="text-white text-sm mb-2 block">Email *</Label>
                <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]" data-testid="form-input-email" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-white text-sm mb-2 block">Phone</Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]" data-testid="form-input-phone" />
              </div>
            </div>

            <div>
              <Label htmlFor="campaign_goal" className="text-white text-sm mb-2 block">Campaign Goal *</Label>
              <Textarea id="campaign_goal" name="campaign_goal" required rows={4} placeholder="e.g., Product launch, brand awareness, sales conversion..." value={formData.campaign_goal} onChange={handleChange} className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]" data-testid="form-input-goal" />
            </div>

            <div>
              <Label htmlFor="budget_range" className="text-white text-sm mb-2 block">Budget Range *</Label>
              <Input id="budget_range" name="budget_range" type="text" required placeholder="e.g., ₹5-10 Lakhs" value={formData.budget_range} onChange={handleChange} className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]" data-testid="form-input-budget" />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-[#00F0FF] text-[#0B0B0F] font-bold py-6 rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.5)] disabled:opacity-50" data-testid="form-submit-button">
              {isSubmitting ? (<><Loader2 className="w-5 h-5 mr-2 animate-spin" />Submitting...</>) : 'Start Your Campaign'}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BrandsPage;
