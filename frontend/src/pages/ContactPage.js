import { useState } from 'react';
import axios from 'axios';
import { Loader2, Mail, Phone, MapPin, MessageCircle, ArrowRight, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    budget: '',
    requirement: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post(`${API}/contact`, formData);
      toast.success("Message sent! We'll get back to you within 24 hours.");
      setFormData({ name: '', brand: '', budget: '', requirement: '', email: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = '919211758155';
  const whatsappMessage = encodeURIComponent("Hi! I'd like to discuss a campaign with Social Adda.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen" data-testid="contact-page">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-b from-[#0B0B0F] to-[#12121A]" data-testid="contact-hero">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#00F0FF] mb-6">Get In Touch</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-8">
            Let's Build <span className="gradient-text">Influence</span> Together
          </h1>
          <p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed">
            Ready to launch your next campaign? Reach out and let's create something impactful.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="contact-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info - Left Side */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Reach <span className="text-[#00F0FF]">Us</span></h2>
              <p className="text-[#A0A0A0] leading-relaxed mb-10 text-sm">
                Whether you're a brand looking to scale or a creator wanting to join our network, we'd love to hear from you.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4" data-testid="contact-email">
                  <div className="w-10 h-10 rounded-full bg-[#12121A] border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#00F0FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">Email</h4>
                    <a href="mailto:business@socialadda.org" className="text-[#A0A0A0] text-sm hover:text-[#00F0FF] transition-colors">
                      business@socialadda.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-phone">
                  <div className="w-10 h-10 rounded-full bg-[#12121A] border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#8A2BE2]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">Phone</h4>
                    <a href="tel:+919211758155" className="text-[#A0A0A0] text-sm hover:text-[#8A2BE2] transition-colors">
                      +91 9211758155
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-location">
                  <div className="w-10 h-10 rounded-full bg-[#12121A] border border-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#00F0FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">Location</h4>
                    <p className="text-[#A0A0A0] text-sm">India</p>
                  </div>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="whatsapp-cta-button"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold py-3 px-6 rounded-full text-sm hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-white font-semibold text-sm mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  <a
                    href="https://www.instagram.com/the.social.adda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#A0A0A0] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all duration-300"
                    aria-label="Instagram"
                    data-testid="contact-social-instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/social-adda-page/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#A0A0A0] hover:border-[#00F0FF] hover:text-[#00F0FF] transition-all duration-300"
                    aria-label="LinkedIn"
                    data-testid="contact-social-linkedin"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-[#12121A] border border-white/10 rounded-2xl p-8 space-y-5" data-testid="contact-form">
                <h3 className="text-xl font-bold text-white mb-4">Send Us a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name" className="text-white text-sm mb-2 block">Name *</Label>
                    <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]" data-testid="form-input-name" />
                  </div>
                  <div>
                    <Label htmlFor="brand" className="text-white text-sm mb-2 block">Brand/Company *</Label>
                    <Input id="brand" name="brand" type="text" required value={formData.brand} onChange={handleChange} className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]" data-testid="form-input-brand" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="email" className="text-white text-sm mb-2 block">Email</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]" data-testid="form-input-email" />
                  </div>
                  <div>
                    <Label htmlFor="budget" className="text-white text-sm mb-2 block">Budget *</Label>
                    <Input id="budget" name="budget" type="text" required placeholder="e.g., ₹5-10 Lakhs" value={formData.budget} onChange={handleChange} className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]" data-testid="form-input-budget" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="requirement" className="text-white text-sm mb-2 block">Your Requirement *</Label>
                  <Textarea id="requirement" name="requirement" required rows={5} placeholder="Tell us about your campaign goals, target audience, timeline, etc." value={formData.requirement} onChange={handleChange} className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]" data-testid="form-input-requirement" />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-[#00F0FF] text-[#0B0B0F] font-bold py-6 rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.5)] disabled:opacity-50" data-testid="form-submit-button">
                  {isSubmitting ? (<><Loader2 className="w-5 h-5 mr-2 animate-spin" />Sending...</>) : (<>Send Message <ArrowRight className="w-5 h-5 ml-2" /></>)}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response */}
      <section className="py-20 bg-[#12121A]" data-testid="response-time-section">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[#A0A0A0] text-sm">
            We typically respond to all inquiries within <span className="text-[#00F0FF] font-semibold">24 hours</span>. For urgent requests, reach out via WhatsApp.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
