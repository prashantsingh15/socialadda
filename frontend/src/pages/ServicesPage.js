import { Users, Trophy, Target, TrendingUp, Zap, Award } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Users,
      title: 'Influencer Marketing Campaigns',
      description: 'Strategic partnerships with India\'s top gaming creators to amplify your brand message.',
      features: [
        'Creator matching based on brand fit',
        'Campaign strategy & creative direction',
        'Performance tracking & analytics',
        'ROI-focused execution'
      ],
      color: '#00F0FF'
    },
    {
      icon: Trophy,
      title: 'Esports Tournaments & Events',
      description: 'End-to-end tournament execution for BGMI and competitive gaming events.',
      features: [
        'Tournament planning & logistics',
        'Live streaming production',
        'Prize pool management',
        'Audience engagement strategies'
      ],
      color: '#8A2BE2'
    },
    {
      icon: Target,
      title: 'Brand Integrations',
      description: 'Seamless brand integrations that feel authentic and drive real engagement.',
      features: [
        'Organic product placements',
        'Sponsored content creation',
        'Brand storytelling',
        'Community building'
      ],
      color: '#00F0FF'
    },
    {
      icon: TrendingUp,
      title: 'Creator Management & Scaling',
      description: 'Help creators grow their channels and maximize their earning potential.',
      features: [
        'Brand deal negotiations',
        'Content strategy consulting',
        'Growth analytics & insights',
        'Network opportunities'
      ],
      color: '#8A2BE2'
    },
    {
      icon: Zap,
      title: 'Performance Marketing',
      description: 'Data-driven campaigns optimized for conversions and measurable results.',
      features: [
        'A/B testing & optimization',
        'Conversion tracking',
        'Audience targeting',
        'Real-time reporting'
      ],
      color: '#00F0FF'
    },
    {
      icon: Award,
      title: 'Community Building',
      description: 'Build loyal gaming communities around your brand.',
      features: [
        'Discord server management',
        'Community engagement tactics',
        'Fan activation campaigns',
        'Long-term retention strategies'
      ],
      color: '#8A2BE2'
    }
  ];

  return (
    <div className="min-h-screen" data-testid="services-page">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-[#0B0B0F] to-[#12121A]" data-testid="services-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
            Comprehensive influencer marketing solutions designed for gaming and tech brands.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="services-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-[#12121A] border border-white/10 rounded-2xl p-10 hover:border-[#00F0FF]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-500 group"
                  data-testid={`service-${index}`}
                >
                  <Icon className="w-14 h-14 mb-6 transition-all duration-300" style={{ color: service.color }} />
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-[#A0A0A0] leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: service.color }}></div>
                        <span className="text-[#A0A0A0]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#12121A]" data-testid="process-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">How We <span className="text-[#00F0FF]">Work</span></h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discover', desc: 'Understand your brand goals and target audience' },
              { step: '02', title: 'Strategy', desc: 'Create a customized campaign strategy' },
              { step: '03', title: 'Execute', desc: 'Launch and manage your campaign' },
              { step: '04', title: 'Optimize', desc: 'Track, analyze, and improve results' }
            ].map((phase, index) => (
              <div key={index} className="text-center" data-testid={`process-step-${index}`}>
                <div className="text-6xl font-bold gradient-text mb-4">{phase.step}</div>
                <h4 className="text-xl font-semibold text-white mb-2">{phase.title}</h4>
                <p className="text-[#A0A0A0] text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="why-choose-section">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">Why Choose <span className="gradient-text">Social Adda</span>?</h2>
          <div className="space-y-6">
            {[
              { title: 'Deep Gaming Expertise', desc: '4+ years in esports with 100+ tournaments executed' },
              { title: 'Proven Track Record', desc: 'Over 100 successful campaigns with measurable ROI' },
              { title: 'Premium Creator Network', desc: 'Access to 150+ verified gaming creators across platforms' },
              { title: 'Performance-Driven', desc: 'Every campaign is optimized for conversions, not just vanity metrics' },
              { title: 'End-to-End Support', desc: 'From strategy to execution to reporting - we handle it all' }
            ].map((point, index) => (
              <div
                key={index}
                className="bg-[#12121A] border border-white/10 rounded-2xl p-8 hover:border-[#8A2BE2]/50 transition-all duration-300"
                data-testid={`why-choose-${index}`}
              >
                <h4 className="text-xl font-bold text-white mb-2">{point.title}</h4>
                <p className="text-[#A0A0A0]">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#00F0FF]/10 to-[#8A2BE2]/10" data-testid="services-cta">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Launch Your Campaign?</h2>
          <p className="text-xl text-[#A0A0A0] mb-12">Let's discuss how we can help you reach millions of gaming enthusiasts.</p>
          <a
            href="/contact"
            data-testid="services-cta-button"
            className="bg-[#00F0FF] text-[#0B0B0F] font-bold py-4 px-8 rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.5)] inline-block"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
