import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Loader2, CheckCircle2, ArrowRight, Users, MapPin, BarChart3, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const CreatorsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    platform: '',
    channel_url: '',
    subscribers: '',
    engagement_rate: '',
    niche: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const networkStats = [
    { icon: Users, value: '2,000+', label: 'Verified Creators', desc: 'Micro, Macro & Celebrity tiers' },
    { icon: MapPin, value: '20+', label: 'States Covered', desc: 'Pan-India + Regional reach' },
    { icon: Layers, value: 'Multi-Platform', label: 'Presence', desc: 'Instagram, YouTube, Shorts, LinkedIn' },
    { icon: BarChart3, value: 'Data-Driven', label: 'Selection', desc: 'Audience Relevance > Follower Count' },
  ];

  const benefits = [
    'Access to premium brand deals from Flipkart, Samsung, NVIDIA & more',
    'Dedicated creator management and negotiation support',
    'Content strategy & growth consulting',
    'Real-time campaign analytics and performance tracking',
    'Pan-India networking and collaboration opportunities',
    'Fast, transparent payment processing',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(`${API}/creator-onboarding`, formData);
      toast.success("Application submitted! We'll review and get back to you within 48 hours.");
      setFormData({ name: '', email: '', platform: '', channel_url: '', subscribers: '', engagement_rate: '', niche: '' });
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" data-testid="creators-page">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-b from-[#0B0B0F] to-[#12121A] relative overflow-hidden" data-testid="creators-hero">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1766052631095-c16328022120" alt="Gaming setup" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-[#0B0B0F]/70"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8A2BE2] mb-6">For Creators</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-8">
            Join India's Largest <br />
            <span className="gradient-text">Creator Network</span>
          </h1>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed">
            Get access to premium brand deals, dedicated management, and grow your influence with Social Adda.
          </p>
        </div>
      </section>

      {/* Network Stats */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="network-stats">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#00F0FF] mb-4">Our Creator Network</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight"><span className="text-[#00F0FF]">2,000+</span> Verified Creators</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {networkStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-[#12121A] border border-white/10 rounded-2xl p-6 text-center" data-testid={`network-stat-${index}`}>
                  <Icon className="w-8 h-8 text-[#00F0FF] mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-white text-sm font-medium mb-1">{stat.label}</p>
                  <p className="text-[#A0A0A0] text-xs">{stat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#12121A]" data-testid="benefits-section">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8A2BE2] mb-4">Why Join</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Why Creators Choose <span className="gradient-text">Social Adda</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-[#0B0B0F] border border-white/10 rounded-xl p-5" data-testid={`benefit-${index}`}>
                <CheckCircle2 className="w-5 h-5 text-[#00F0FF] flex-shrink-0 mt-0.5" />
                <p className="text-[#A0A0A0] text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Form */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="onboarding-form-section">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#00F0FF] mb-4">Apply Now</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Join the <span className="gradient-text">Network</span></h2>
            <p className="text-[#A0A0A0] mt-4 text-sm">Fill out the form and we'll review your application within 48 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#12121A] border border-white/10 rounded-2xl p-8 space-y-5" data-testid="creator-onboarding-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name" className="text-white text-sm mb-2 block">Full Name *</Label>
                <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]" data-testid="form-input-name" />
              </div>
              <div>
                <Label htmlFor="email" className="text-white text-sm mb-2 block">Email *</Label>
                <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]" data-testid="form-input-email" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="platform" className="text-white text-sm mb-2 block">Primary Platform *</Label>
                <Input id="platform" name="platform" type="text" required placeholder="YouTube, Instagram, etc." value={formData.platform} onChange={handleChange} className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]" data-testid="form-input-platform" />
              </div>
              <div>
                <Label htmlFor="subscribers" className="text-white text-sm mb-2 block">Followers/Subscribers *</Label>
                <Input id="subscribers" name="subscribers" type="text" required placeholder="e.g., 100K-500K" value={formData.subscribers} onChange={handleChange} className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]" data-testid="form-input-subscribers" />
              </div>
            </div>

            <div>
              <Label htmlFor="channel_url" className="text-white text-sm mb-2 block">Channel/Profile URL *</Label>
              <Input id="channel_url" name="channel_url" type="url" required placeholder="https://..." value={formData.channel_url} onChange={handleChange} className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]" data-testid="form-input-channel-url" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="engagement_rate" className="text-white text-sm mb-2 block">Engagement Rate</Label>
                <Input id="engagement_rate" name="engagement_rate" type="text" placeholder="e.g., 5-10%" value={formData.engagement_rate} onChange={handleChange} className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]" data-testid="form-input-engagement" />
              </div>
              <div>
                <Label htmlFor="niche" className="text-white text-sm mb-2 block">Content Niche *</Label>
                <Input id="niche" name="niche" type="text" required placeholder="Gaming, Tech, Lifestyle..." value={formData.niche} onChange={handleChange} className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]" data-testid="form-input-niche" />
              </div>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-[#00F0FF] text-[#0B0B0F] font-bold py-6 rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.5)] disabled:opacity-50" data-testid="form-submit-button">
              {isSubmitting ? (<><Loader2 className="w-5 h-5 mr-2 animate-spin" />Submitting...</>) : 'Submit Application'}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreatorsPage;
