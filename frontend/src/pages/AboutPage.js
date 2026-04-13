import { Target, Eye, Award, Users } from 'lucide-react';

const AboutPage = () => {
  const milestones = [
    { year: '2020', event: 'Founded Social Adda' },
    { year: '2021', event: 'Executed 50+ esports events' },
    { year: '2022', event: 'Partnered with 100+ creators' },
    { year: '2023', event: 'Crossed 100 brand campaigns' },
    { year: '2024', event: 'Became India\'s leading gaming marketing agency' }
  ];

  return (
    <div className="min-h-screen" data-testid="about-page">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-b from-[#0B0B0F] to-[#12121A]" data-testid="about-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            The <span className="gradient-text">Story</span> Behind <br /> Social Adda
          </h1>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
            Built by gamers, for gamers. We understand the pulse of India's gaming community.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="story-section">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/9072205/pexels-photo-9072205.jpeg"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">How It All <span className="text-[#00F0FF]">Started</span></h2>
              <p className="text-[#A0A0A0] leading-relaxed mb-4">
                Social Adda was born from a simple observation: gaming creators had massive influence, but brands struggled to connect with them authentically.
              </p>
              <p className="text-[#A0A0A0] leading-relaxed mb-4">
                Our founder, with 4+ years of experience in esports and over 100 tier-1 tournament executions, saw an opportunity to bridge this gap.
              </p>
              <p className="text-[#A0A0A0] leading-relaxed">
                Today, we're India's most trusted gaming marketing agency, connecting premium brands with top creators to create campaigns that actually convert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#12121A]" data-testid="mission-vision-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#0B0B0F] border border-[#00F0FF]/20 rounded-2xl p-10 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300">
              <Target className="w-16 h-16 text-[#00F0FF] mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-[#A0A0A0] leading-relaxed">
                To become India's leading gaming marketing agency by connecting premium brands with authentic creator partnerships that drive real business results.
              </p>
            </div>
            <div className="bg-[#0B0B0F] border border-[#8A2BE2]/20 rounded-2xl p-10 hover:shadow-[0_0_30px_rgba(138,43,226,0.2)] transition-all duration-300">
              <Eye className="w-16 h-16 text-[#8A2BE2] mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-[#A0A0A0] leading-relaxed">
                To bridge the gap between brands and creators at scale, building an ecosystem where both parties thrive and India's gaming community grows exponentially.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Credibility */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="founder-section">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12">Founded By <span className="gradient-text">Esports Veterans</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#12121A] border border-white/10 rounded-2xl p-8">
              <Award className="w-12 h-12 text-[#00F0FF] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">4+ Years</h3>
              <p className="text-[#A0A0A0]">In Esports Industry</p>
            </div>
            <div className="bg-[#12121A] border border-white/10 rounded-2xl p-8">
              <Users className="w-12 h-12 text-[#8A2BE2] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">100+ Events</h3>
              <p className="text-[#A0A0A0]">Tier-1 Tournaments Executed</p>
            </div>
            <div className="bg-[#12121A] border border-white/10 rounded-2xl p-8">
              <Target className="w-12 h-12 text-[#00F0FF] mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">Tier 1</h3>
              <p className="text-[#A0A0A0]">Experience with Top Brands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#12121A]" data-testid="timeline-section">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">Our <span className="text-[#00F0FF]">Journey</span></h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start" data-testid={`milestone-${index}`}>
                <div className="bg-[#00F0FF] text-[#0B0B0F] font-bold px-4 py-2 rounded-lg min-w-[80px] text-center">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-[#0B0B0F] border border-white/10 rounded-2xl p-6">
                  <p className="text-white text-lg">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
