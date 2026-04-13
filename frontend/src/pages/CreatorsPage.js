import { useState } from 'react';
import axios from 'axios';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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
  const [isSuccess, setIsSuccess] = useState(false);

  const creators = [
    {
      name: 'Pro Gamer Elite',
      subscribers: '1.2M',
      engagement: '15%',
      niche: 'BGMI Pro Player',
      image: 'https://images.unsplash.com/photo-1759701547448-f3f336e478cd'
    },
    {
      name: 'Stream Legend',
      subscribers: '850K',
      engagement: '12%',
      niche: 'Gaming Streamer',
      image: 'https://images.unsplash.com/photo-1759701546668-4fe410517caf'
    },
    {
      name: 'Esports Champion',
      subscribers: '650K',
      engagement: '10%',
      niche: 'Competitive Gaming',
      image: 'https://images.unsplash.com/photo-1759701547467-a54a5e86a4f0'
    },
    {
      name: 'Gaming Guru',
      subscribers: '920K',
      engagement: '13%',
      niche: 'Tips & Tricks',
      image: 'https://images.pexels.com/photos/18966441/pexels-photo-18966441.jpeg'
    }
  ];

  const benefits = [
    'Access to premium brand deals',
    'Dedicated account manager',
    'Negotiation support for better rates',
    'Growth strategy & consulting',
    'Exclusive networking opportunities',
    'Fast payment processing'
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
      await axios.post(`${API}/creator-onboarding`, formData);
      setIsSuccess(true);
      toast.success('Application submitted successfully! We\'ll be in touch soon.');
      setFormData({
        name: '',
        email: '',
        platform: '',
        channel_url: '',
        subscribers: '',
        engagement_rate: '',
        niche: ''
      });
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" data-testid="creators-page">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-[#0B0B0F] to-[#12121A] relative overflow-hidden" data-testid="creators-hero">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1766052631095-c16328022120"
            alt="Gaming setup"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            Join India's Top <br />
            <span className="gradient-text">Gaming Creator</span> Network
          </h1>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
            Get access to premium brand deals, dedicated support, and grow your channel faster.
          </p>
        </div>
      </section>

      {/* Featured Creators */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="featured-creators">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">Our <span className="text-[#00F0FF]">Creators</span></h2>
          <p className="text-[#A0A0A0] text-center mb-16 max-w-2xl mx-auto">Join a network of elite gaming creators crushing it with premium brand partnerships.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {creators.map((creator, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl hover-lift" data-testid={`creator-showcase-${index}`}>
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#12121A]/90 backdrop-blur-xl p-4 border-t border-white/10">
                  <h3 className="text-lg font-bold text-white mb-1">{creator.name}</h3>
                  <p className="text-sm text-[#00F0FF] font-semibold">{creator.subscribers} Subscribers</p>
                  <p className="text-xs text-[#A0A0A0]">{creator.niche} • {creator.engagement} Engagement</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#12121A]" data-testid="benefits-section">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">Why Join <span className="gradient-text">Social Adda</span>?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-[#0B0B0F] border border-white/10 rounded-xl p-6" data-testid={`benefit-${index}`}>
                <CheckCircle2 className="w-6 h-6 text-[#00F0FF] flex-shrink-0 mt-1" />
                <p className="text-white text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Form */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="onboarding-form-section">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">Apply to Join <span className="text-[#00F0FF]">Now</span></h2>
          <p className="text-[#A0A0A0] text-center mb-12">Fill out the form below and we'll review your application within 48 hours.</p>

          <form onSubmit={handleSubmit} className="bg-[#12121A] border border-white/10 rounded-2xl p-8 space-y-6" data-testid="creator-onboarding-form">
            <div>
              <Label htmlFor="name" className="text-white mb-2 block">Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                data-testid="form-input-name"
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
                className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                data-testid="form-input-email"
              />
            </div>

            <div>
              <Label htmlFor="platform" className="text-white mb-2 block">Primary Platform *</Label>
              <Input
                id="platform"
                name="platform"
                type="text"
                required
                placeholder="e.g., YouTube, Twitch, Facebook Gaming"
                value={formData.platform}
                onChange={handleChange}
                className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                data-testid="form-input-platform"
              />
            </div>

            <div>
              <Label htmlFor="channel_url" className="text-white mb-2 block">Channel/Profile URL *</Label>
              <Input
                id="channel_url"
                name="channel_url"
                type="url"
                required
                placeholder="https://..."
                value={formData.channel_url}
                onChange={handleChange}
                className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                data-testid="form-input-channel-url"
              />
            </div>

            <div>
              <Label htmlFor="subscribers" className="text-white mb-2 block">Subscriber/Follower Count *</Label>
              <Input
                id="subscribers"
                name="subscribers"
                type="text"
                required
                placeholder="e.g., 100K-500K"
                value={formData.subscribers}
                onChange={handleChange}
                className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                data-testid="form-input-subscribers"
              />
            </div>

            <div>
              <Label htmlFor="engagement_rate" className="text-white mb-2 block">Average Engagement Rate</Label>
              <Input
                id="engagement_rate"
                name="engagement_rate"
                type="text"
                placeholder="e.g., 5-10%"
                value={formData.engagement_rate}
                onChange={handleChange}
                className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                data-testid="form-input-engagement"
              />
            </div>

            <div>
              <Label htmlFor="niche" className="text-white mb-2 block">Content Niche *</Label>
              <Input
                id="niche"
                name="niche"
                type="text"
                required
                placeholder="e.g., BGMI, Valorant, Gaming Reviews"
                value={formData.niche}
                onChange={handleChange}
                className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                data-testid="form-input-niche"
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
                'Submit Application'
              )}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreatorsPage;
