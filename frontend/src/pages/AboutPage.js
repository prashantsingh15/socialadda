import { Target, Eye, Users, Award, TrendingUp, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen" data-testid="about-page">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-b from-[#0B0B0F] to-[#12121A]" data-testid="about-hero">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#00F0FF] mb-6">Introduction</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-8">
            Who We <span className="gradient-text">Are</span>
          </h1>
          <p className="text-lg text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
            Social Adda is a creator-first influencer marketing agency helping brands scale awareness, trust, and conversions through high-impact digital creators across India.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="story-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/9072205/pexels-photo-9072205.jpeg"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#8A2BE2] mb-4">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Building Brands Through <span className="text-[#00F0FF]">Authentic Creators</span></h2>
              <p className="text-[#A0A0A0] leading-relaxed mb-5">
                Founded in 2023, Social Adda was born from a clear vision: to bridge the gap between brands and the creators who truly influence their audiences.
              </p>
              <p className="text-[#A0A0A0] leading-relaxed mb-5">
                We connect brands with the right creators, on the right platforms, with the right strategy — delivering results that matter. Our approach goes beyond simple matchmaking; we build authentic narratives that resonate.
              </p>
              <p className="text-[#A0A0A0] leading-relaxed">
                Today, with 800M+ views delivered, 1000+ successful collaborations, and a network of 2000+ verified creators across 20+ states, we're powering influence across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#12121A]" data-testid="mission-vision-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#00F0FF] mb-4">Core Values</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Our Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0B0B0F] border border-[#00F0FF]/20 rounded-2xl p-10 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-500">
              <Target className="w-12 h-12 text-[#00F0FF] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-[#A0A0A0] leading-relaxed">
                To build meaningful, performance-driven collaborations between brands and creators.
              </p>
            </div>
            <div className="bg-[#0B0B0F] border border-[#8A2BE2]/20 rounded-2xl p-10 hover:shadow-[0_0_30px_rgba(138,43,226,0.15)] transition-all duration-500">
              <Eye className="w-12 h-12 text-[#8A2BE2] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-[#A0A0A0] leading-relaxed">
                To become India's most trusted influencer marketing partner across national and regional markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="impact-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#00F0FF] mb-4">Proven Scale. Real Results.</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-16">Our <span className="gradient-text">Impact</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Eye, value: '800M+', label: 'Views Delivered', desc: 'Across Instagram, YouTube & Shorts' },
              { icon: Users, value: '1000+', label: 'Collaborations', desc: 'Across diverse categories & regions' },
              { icon: TrendingUp, value: 'High', label: 'Engagement Rates', desc: 'Optimized for saves, shares & watch time' },
              { icon: Award, value: 'Strong', label: 'Repeat Partnerships', desc: 'Trusted for consistent performance' },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-[#12121A] border border-white/10 rounded-2xl p-6" data-testid={`impact-stat-${index}`}>
                  <Icon className="w-8 h-8 text-[#00F0FF] mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-white text-sm font-medium mb-2">{stat.label}</p>
                  <p className="text-[#A0A0A0] text-xs">{stat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-[#12121A]" data-testid="differentiators-section">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8A2BE2] mb-4">What Sets Us Apart</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Why <span className="text-[#00F0FF]">Social Adda</span>?</h2>
            <p className="text-[#A0A0A0] mt-4 max-w-2xl mx-auto">We combine human creativity with data precision to deliver campaigns that don't just reach audiences — they move them.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Creator-First Approach', desc: 'Prioritizing authentic storytelling and creator freedom over forced scripts and vanity metrics.' },
              { title: 'Regional & Vernacular', desc: 'Deep network of creators fluent in Hindi, Tamil, Telugu, Marathi, and more for real connection.' },
              { title: 'Data-Driven Matchmaking', desc: 'Selection based on audience demographics and engagement quality, not just follower count.' },
              { title: 'Platform-Native Strategies', desc: 'Content formats optimized specifically for Reels, Shorts, and Stories algorithms.' },
              { title: 'Transparent Execution', desc: 'Clear communication, real-time tracking, and honest reporting from start to finish.' },
              { title: 'Scalable Solutions', desc: 'Agile campaigns tailored for early-stage startups to established global enterprises.' },
            ].map((item, index) => (
              <div key={index} className="bg-[#0B0B0F] border border-white/10 rounded-2xl p-8 hover:border-[#00F0FF]/30 transition-all duration-300" data-testid={`diff-${index}`}>
                <div className="w-8 h-8 rounded-full bg-[#00F0FF]/10 flex items-center justify-center mb-4">
                  <span className="text-[#00F0FF] font-bold text-sm">0{index + 1}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                <p className="text-[#A0A0A0] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
