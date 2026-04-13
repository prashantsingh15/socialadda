import { useState } from 'react';
import axios from 'axios';
import { Loader2, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        brand: '',
        budget: '',
        requirement: '',
        email: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = '+919523865073';
  const whatsappMessage = encodeURIComponent('Hi! I want to discuss a campaign with Social Adda.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen" data-testid="contact-page">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-[#0B0B0F] to-[#12121A]" data-testid="contact-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
            Ready to launch your next campaign? Get in touch and let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="contact-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-8">Get in <span className="text-[#00F0FF]">Touch</span></h2>
              <p className="text-[#A0A0A0] leading-relaxed mb-12">
                Whether you're a brand looking to scale or a creator wanting to join our network, we'd love to hear from you.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4" data-testid="contact-email">
                  <Mail className="w-6 h-6 text-[#00F0FF] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a href="mailto:business@socialadda.org" className="text-[#A0A0A0] hover:text-[#00F0FF] transition-colors">
                      business@socialadda.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-phone">
                  <Phone className="w-6 h-6 text-[#8A2BE2] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <a href="tel:+919523865073" className="text-[#A0A0A0] hover:text-[#8A2BE2] transition-colors">
                      +91 9523865073
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4" data-testid="contact-location">
                  <MapPin className="w-6 h-6 text-[#00F0FF] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-[#A0A0A0]">India</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="whatsapp-cta-button"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold py-4 px-8 rounded-full hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-[#12121A] border border-white/10 rounded-2xl p-8 space-y-6" data-testid="contact-form">
                <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">Name *</Label>
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
                  <Label htmlFor="brand" className="text-white mb-2 block">Brand/Company *</Label>
                  <Input
                    id="brand"
                    name="brand"
                    type="text"
                    required
                    value={formData.brand}
                    onChange={handleChange}
                    className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                    data-testid="form-input-brand"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                    data-testid="form-input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="budget" className="text-white mb-2 block">Budget *</Label>
                  <Input
                    id="budget"
                    name="budget"
                    type="text"
                    required
                    placeholder="e.g., ₹5-10 Lakhs"
                    value={formData.budget}
                    onChange={handleChange}
                    className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                    data-testid="form-input-budget"
                  />
                </div>

                <div>
                  <Label htmlFor="requirement" className="text-white mb-2 block">Your Requirement *</Label>
                  <Textarea
                    id="requirement"
                    name="requirement"
                    required
                    rows={5}
                    placeholder="Tell us about your campaign goals, target audience, timeline, etc."
                    value={formData.requirement}
                    onChange={handleChange}
                    className="bg-[#0B0B0F] border-white/10 text-white focus:border-[#00F0FF] focus:ring-1 focus:ring-[#00F0FF]"
                    data-testid="form-input-requirement"
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
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-24 bg-[#12121A]" data-testid="response-time-section">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Quick <span className="gradient-text">Response</span></h2>
          <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
            We typically respond to all inquiries within 24 hours. For urgent requests, feel free to reach out via WhatsApp for faster communication.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
