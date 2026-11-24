import { useState } from 'react';
import axios from 'axios';
import { Loader2, Eye, Users, TrendingUp, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { brandLogos, brandMetrics, contentHighlights, measureMetrics } from '@/data/constants';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = BACKEND_URL ? `${BACKEND_URL}/api` : '/api';
const iconMap = { Eye, Users, TrendingUp, Shield };
const INITIAL_FORM = { company_name: '', contact_name: '', email: '', phone: '', campaign_goal: '', budget_range: '' };

export default function BrandsPage() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(`${API}/brand-lead`, formData);
      toast.success("Thank you! We'll contact you within 24 hours with a custom campaign strategy.");
      setFormData(INITIAL_FORM);
    } catch (error) {
      toast.error('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" data-testid="brands-page">
      <section className="py-32 bg-gradient-to-b from-[#0B0B0F] to-[#12121A]" data-testid="brands-hero">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#00F0FF] mb-6">For Brands</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-8">Scale Your Brand With <br /><span className="gradient-text">Creators Who Convert</span></h1>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed">Drive trust, engagement & results through strategic influencer marketing campaigns across India.</p>
        </div>
      </section>

      <section className="py-24 bg-[#0B0B0F] border-y border-white/5" data-testid="metrics-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#A0A0A0] text-center mb-12">Delivering measurable performance across the metrics that matter most.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brandMetrics.map((m) => {
              const Icon = iconMap[m.iconName];
              return (
                <div key={m.id} className="text-center" data-testid={`metric-${m.id}`}>
                  <Icon className="w-8 h-8 mx-auto mb-3" style={{ color: m.color }} />
                  <h3 className="text-4xl font-bold text-white mb-1">{m.value}</h3>
                  <p className="text-[#A0A0A0] text-sm">{m.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#12121A]" data-testid="brands-clients">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#00F0FF] text-center mb-10">Brands We've Worked With</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {brandLogos.map((client) => (
              <div key={client.id} className="bg-[#0B0B0F] border border-white/10 rounded-xl p-5 flex items-center justify-center h-20 hover:border-[#00F0FF]/40 transition-all duration-300 group" data-testid={`brand-client-${client.id}`}>
                <img src={client.logo} alt={client.name} className="max-h-8 max-w-[90px] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300" onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0B0F]" data-testid="content-strategy-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8A2BE2] mb-4">Strategy</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Why Our Content <span className="gradient-text">Works</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {contentHighlights.map((item) => (
              <div key={item.id} className="bg-[#12121A] border border-white/10 rounded-2xl p-8 hover:border-[#00F0FF]/30 transition-all duration-300" data-testid={`content-strategy-${item.id}`}>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#12121A]" data-testid="reporting-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#00F0FF] mb-4">What We Measure</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Reporting & <span className="gradient-text">Metrics</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {measureMetrics.map((m) => (
              <div key={m.id} className="bg-[#0B0B0F] border border-white/10 rounded-xl p-5 text-center hover:border-[#8A2BE2]/30 transition-all duration-300" data-testid={`measure-${m.id}`}>
                <p className="text-white font-medium text-sm">{m.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              {isSubmitting ? (<><Loader2 className="w-5 h-5 mr-2 animate-spin" />Submitting...</>) : (<>Start Your Campaign <ArrowRight className="w-5 h-5 ml-2" /></>)}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
