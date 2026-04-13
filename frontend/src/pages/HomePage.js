import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Users, Zap, MapPin, BarChart3, Shield, TrendingUp } from 'lucide-react';

const brandLogos = [
  { name: 'Flipkart', logo: '/brands/flipkart_hq.png' },
  { name: 'Amazon', logo: '/brands/amazon_hq.png' },
  { name: 'NVIDIA', logo: '/brands/nvidia_hq.png' },
  { name: 'Gigabyte', logo: '/brands/gigabyte_hq.png' },
  { name: 'Samsung', logo: '/brands/samsung_hq.png' },
  { name: 'Lenskart', logo: '/brands/lenskart_hq.png' },
  { name: 'UniPin', logo: '/brands/unipin_hq.png' },
  { name: 'Zupee', logo: '/brands/zupee_hq.png' },
  { name: 'Mars', logo: '/brands/mars_hq.png' },
  { name: 'Snitch', logo: '/brands/snitch_hq.png' },
];

const BrandLogoCard = ({ brand, index }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="bg-[#12121A] border border-white/10 rounded-xl p-6 flex items-center justify-center h-24 hover:border-[#00F0FF]/40 hover:bg-[#1A1A24] transition-all duration-300 group"
      data-testid={`brand-logo-${brand.name.toLowerCase()}`}
    >
      {!imgError ? (
        <img
          src={brand.logo}
          alt={brand.name}
          className="max-h-10 max-w-[100px] object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-[#A0A0A0] font-semibold text-sm tracking-[0.15em] uppercase group-hover:text-[#00F0FF] transition-colors duration-300">
          {brand.name}
        </span>
      )}
    </div>
  );
};

const HomePage = () => {
  const stats = [
    { value: '800M+', label: 'Views Delivered', icon: Eye },
    { value: '1000+', label: 'Campaigns Executed', icon: Users },
    { value: '2000+', label: 'Verified Creators', icon: Zap },
    { value: '20+', label: 'States Covered', icon: MapPin },
  ];

  const whySocialAdda = [
    {
      title: 'Creator-First Approach',
      description: 'Prioritizing authentic storytelling and creator freedom over forced scripts and vanity metrics.',
      icon: Users,
    },
    {
      title: 'Data-Driven Matchmaking',
      description: 'Selection based on audience demographics and engagement quality, not just follower count.',
      icon: BarChart3,
    },
    {
      title: 'Platform-Native Strategies',
      description: 'Content formats optimized specifically for Reels, Shorts, and Stories algorithms.',
      icon: TrendingUp,
    },
    {
      title: 'Transparent Execution',
      description: 'Clear communication, real-time tracking, and honest reporting from start to finish.',
      icon: Shield,
    },
  ];

  const testimonials = [
    {
      quote: "Social Adda's creator-first approach delivered campaigns that truly resonated with our gaming audience. The ROI exceeded expectations.",
      author: "Marketing Head",
      company: "Leading Tech Brand"
    },
    {
      quote: "Their regional reach and vernacular creator network helped us penetrate Tier 2 & 3 markets we couldn't access before.",
      author: "Brand Manager",
      company: "E-commerce Platform"
    },
    {
      quote: "Transparent reporting and data-driven matchmaking made every campaign predictable and profitable. A true partner, not just a vendor.",
      author: "Growth Lead",
      company: "Gaming Company"
    }
  ];

  return (
    <div className="min-h-screen" data-testid="homepage">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" data-testid="hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/14266493/pexels-photo-14266493.jpeg"
            alt="Esports arena"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F]/50 via-[#0B0B0F]/80 to-[#0B0B0F]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
          <p className="text-sm uppercase tracking-[0.3em] text-[#00F0FF] mb-6 font-medium" data-testid="hero-tagline">
            Creator-First Agency
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-8" data-testid="hero-headline">
            India's Leading <br />
            <span className="gradient-text">Creator Marketing</span> <br />
            <span className="text-[#00F0FF]">Agency</span>
          </h1>
          <p className="text-lg text-[#A0A0A0] mb-12 max-w-2xl mx-auto leading-relaxed" data-testid="hero-subheadline">
            Building brands through authentic creators & measurable impact. We connect brands with the right creators, on the right platforms, with the right strategy.
          </p>

          {/* Hero Metrics */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { value: '800M+', label: 'Views' },
              { value: '1000+', label: 'Campaigns' },
              { value: '2000+', label: 'Creators' },
            ].map((stat, i) => (
              <div key={i} className="text-center" data-testid={`hero-metric-${i}`}>
                <p className="text-3xl sm:text-4xl font-bold text-[#00F0FF]">{stat.value}</p>
                <p className="text-xs uppercase tracking-widest text-[#A0A0A0] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              to="/brands"
              data-testid="hero-cta-brands"
              className="bg-[#00F0FF] text-[#0B0B0F] font-bold py-4 px-10 rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.5)] flex items-center gap-2 text-base"
            >
              Start a Campaign <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/creators"
              data-testid="hero-cta-creators"
              className="bg-transparent text-white border border-white/20 font-semibold py-4 px-10 rounded-full hover:border-[#8A2BE2] hover:text-[#8A2BE2] transition-all duration-300 flex items-center gap-2 text-base"
            >
              Join as Creator <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#12121A] border-y border-white/5" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-[#A0A0A0] text-center mb-12">Proven Scale. Real Results.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center" data-testid={`stat-${index}`}>
                  <Icon className="w-8 h-8 mx-auto mb-4 text-[#00F0FF] opacity-80" />
                  <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">{stat.value}</h3>
                  <p className="text-[#A0A0A0] text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="brand-logos-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#00F0FF] mb-4">Our Clients</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Trusted by leading brands across gaming, tech, and digital ecosystems
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {brandLogos.map((brand, index) => (
              <BrandLogoCard key={index} brand={brand} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Social Adda */}
      <section className="py-24 bg-[#12121A]" data-testid="why-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#00F0FF] mb-4">What Sets Us Apart</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Why <span className="gradient-text">Social Adda</span>?</h2>
            <p className="text-[#A0A0A0] mt-4 max-w-2xl mx-auto text-sm">We combine human creativity with data precision to deliver campaigns that don't just reach audiences — they move them.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {whySocialAdda.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#0B0B0F] border border-white/10 rounded-2xl p-8 hover:border-[#00F0FF]/40 transition-all duration-500"
                  data-testid={`why-card-${index}`}
                >
                  <Icon className="w-10 h-10 text-[#00F0FF] mb-5" />
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-[#A0A0A0] leading-relaxed text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Creator Network Highlight */}
      <section className="py-24 relative overflow-hidden" data-testid="network-section">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/9072205/pexels-photo-9072205.jpeg"
            alt="Esports team"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-[#0B0B0F]/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#8A2BE2] mb-4">Our Creator Network</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            <span className="text-[#00F0FF]">2,000+</span> Verified Creators
          </h2>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto mb-12 text-sm">
            Micro, Macro & Celebrity creators tailored to your budget & goals. Pan-India reach with hyper-local presence in Tier 2 & 3 cities through vernacular content.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Diverse Tiers', desc: 'Micro, Macro & Celebrity' },
              { label: 'Pan-India + Regional', desc: '20+ States Covered' },
              { label: 'Multi-Platform', desc: 'YouTube, Instagram, Shorts' },
              { label: 'Data-Driven', desc: 'Audience Relevance > Follower Count' },
            ].map((item, index) => (
              <div key={index} className="glass-card p-6 text-center" data-testid={`network-feature-${index}`}>
                <h4 className="text-white font-semibold text-sm mb-2">{item.label}</h4>
                <p className="text-[#A0A0A0] text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#12121A]" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#00F0FF] mb-4">Client Feedback</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Trusted by <span className="gradient-text">Leading Brands</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#0B0B0F] border border-white/10 rounded-2xl p-8 hover:border-[#8A2BE2]/40 transition-all duration-300"
                data-testid={`testimonial-${index}`}
              >
                <p className="text-[#A0A0A0] leading-relaxed mb-6 text-sm italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-[#00F0FF] text-xs">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 relative overflow-hidden" data-testid="final-cta-section">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF]/5 to-[#8A2BE2]/5"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Let's Build <span className="gradient-text">Influence</span> Together</h2>
          <p className="text-lg text-[#A0A0A0] mb-10">Scale your brand with creators who convert. Drive trust, engagement & results.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-testid="final-cta-button"
              className="bg-[#00F0FF] text-[#0B0B0F] font-bold py-4 px-10 rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.5)] inline-flex items-center gap-2 justify-center text-base"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/creators"
              data-testid="final-cta-creators"
              className="text-white border border-white/20 font-semibold py-4 px-10 rounded-full hover:border-[#8A2BE2] hover:text-[#8A2BE2] transition-all duration-300 inline-flex items-center gap-2 justify-center text-base"
            >
              Join Our Network <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
