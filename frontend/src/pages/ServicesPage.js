import { Link } from 'react-router-dom';
import { Users, Trophy, Target, TrendingUp, Zap, Shield, Megaphone, BarChart3, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const coreServices = [
    {
      icon: Megaphone,
      title: 'Influencer Marketing Strategy',
      description: 'We craft custom campaign blueprints aligned strictly with your brand objectives, moving beyond random posts to strategic storytelling.',
      outcomes: ['Brand Awareness', 'Audience Engagement', 'Sales & Conversions'],
      color: '#00F0FF',
    },
    {
      icon: BarChart3,
      title: 'Content Planning & Execution',
      description: 'End-to-end management of the content lifecycle, ensuring quality control and timely delivery at every stage.',
      outcomes: ['Ideation', 'Creator Briefing', 'Approval', 'Publishing', 'Reporting'],
      color: '#8A2BE2',
    },
  ];

  const campaignFormats = [
    'Product Reviews',
    'Gifting & Seeding',
    'Brand Challenges',
    'Live Streams',
    'Creator IPs',
    'Giveaway Activations',
    'Regional UGC Campaigns',
  ];

  const industries = [
    { name: 'Gaming & Esports', desc: 'Live streams, tournaments, and community engagement.' },
    { name: 'Beauty & Cosmetics', desc: 'Tutorials, hauls, and authentic product reviews.' },
    { name: 'Fashion & Apparel', desc: 'Style guides, lookbooks, and seasonal trends.' },
    { name: 'EdTech', desc: 'Educational content, course reviews, and skill building.' },
    { name: 'FinTech', desc: 'Financial literacy, trading apps, and investment tips.' },
    { name: 'Lifestyle', desc: 'Travel vlogs, wellness routines, and daily life.' },
    { name: 'E-commerce', desc: 'Unboxing, flash sales, and shopping festivals.' },
    { name: 'Food & Beverage', desc: 'Recipes, restaurant reviews, and culinary challenges.' },
    { name: 'Tech & Electronics', desc: 'Gadget reviews, comparisons, and tech news.' },
  ];

  const platforms = ['Instagram', 'YouTube', 'Shorts', 'Stories', 'Live Streams'];

  return (
    <div className="min-h-screen" data-testid="services-page">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-b from-[#0B0B0F] to-[#12121A]" data-testid="services-hero">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#00F0FF] mb-6">What We Do</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-8">
            Our Core <span className="gradient-text">Services</span>
          </h1>
          <p className="text-lg text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
            Comprehensive influencer marketing solutions designed to scale awareness, build trust, and drive conversions.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="core-services">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-[#12121A] border border-white/10 rounded-2xl p-10 hover:border-[#00F0FF]/40 transition-all duration-500"
                  data-testid={`core-service-${index}`}
                >
                  <Icon className="w-12 h-12 mb-6" style={{ color: service.color }} />
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-[#A0A0A0] leading-relaxed mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.outcomes.map((outcome, idx) => (
                      <span key={idx} className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 text-[#A0A0A0]">
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-[#12121A]" data-testid="platforms-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8A2BE2] mb-4">Platforms We Dominate</p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-[#0B0B0F] border border-white/10 rounded-full px-6 py-3 text-white font-medium text-sm hover:border-[#00F0FF]/50 transition-all duration-300" data-testid={`platform-${index}`}>
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Formats */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="campaign-formats">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#00F0FF] mb-4">Campaign Formats</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Campaign Formats <span className="gradient-text">We Offer</span></h2>
            <p className="text-[#A0A0A0] mt-4 max-w-xl mx-auto text-sm">Each format is customized to platform behavior & brand goals to maximize impact.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {campaignFormats.map((format, index) => (
              <div key={index} className="bg-[#12121A] border border-white/10 rounded-xl p-6 text-center hover:border-[#8A2BE2]/40 transition-all duration-300" data-testid={`format-${index}`}>
                <p className="text-white font-medium text-sm">{format}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-[#12121A]" data-testid="industries-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#00F0FF] mb-4">Industry Verticals</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Industries We <span className="gradient-text">Serve</span></h2>
            <p className="text-[#A0A0A0] mt-4 max-w-xl mx-auto text-sm">Delivering specialized creator strategies across diverse market segments.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {industries.map((industry, index) => (
              <div key={index} className="bg-[#0B0B0F] border border-white/10 rounded-xl p-6 hover:border-[#00F0FF]/30 transition-all duration-300" data-testid={`industry-${index}`}>
                <h4 className="text-white font-semibold mb-2">{industry.name}</h4>
                <p className="text-[#A0A0A0] text-sm">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="process-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8A2BE2] mb-4">Our Process</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">How We <span className="text-[#00F0FF]">Work</span></h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {['Ideation', 'Creator Briefing', 'Approval', 'Publishing', 'Reporting'].map((step, index) => (
              <div key={index} className="text-center" data-testid={`process-step-${index}`}>
                <div className="w-14 h-14 rounded-full bg-[#12121A] border border-[#00F0FF]/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#00F0FF] font-bold">{index + 1}</span>
                </div>
                <p className="text-white font-medium text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#00F0FF]/5 to-[#8A2BE2]/5" data-testid="services-cta">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Launch?</h2>
          <p className="text-lg text-[#A0A0A0] mb-10">Let's create a campaign strategy tailored to your brand goals.</p>
          <Link
            to="/contact"
            data-testid="services-cta-button"
            className="bg-[#00F0FF] text-[#0B0B0F] font-bold py-4 px-8 rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.5)] inline-flex items-center gap-2"
          >
            Start Your Campaign <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
