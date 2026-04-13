import { Link } from 'react-router-dom';
import { ArrowRight, Users, Briefcase, Award, TrendingUp } from 'lucide-react';

const HomePage = () => {
  const brands = ['SAMSUNG', 'iQOO', 'REALME', 'AMD', 'FLIPKART', 'MARS COSMETICS', 'MIRAI', 'ALTA'];

  const creators = [
    {
      name: 'Pro Gamer X',
      subscribers: '850K',
      engagement: '12%',
      niche: 'BGMI',
      image: 'https://images.unsplash.com/photo-1759701547448-f3f336e478cd'
    },
    {
      name: 'Stream Master',
      subscribers: '1.2M',
      engagement: '15%',
      niche: 'Gaming',
      image: 'https://images.unsplash.com/photo-1759701546668-4fe410517caf'
    },
    {
      name: 'Esports Elite',
      subscribers: '650K',
      engagement: '10%',
      niche: 'Competitive',
      image: 'https://images.unsplash.com/photo-1759701547467-a54a5e86a4f0'
    }
  ];

  const stats = [
    { icon: Briefcase, value: '100+', label: 'Campaigns' },
    { icon: Users, value: '150+', label: 'Creators' },
    { icon: Award, value: '4+', label: 'Years in Esports' },
    { icon: TrendingUp, value: '50M+', label: 'Total Reach' }
  ];

  const services = [
    {
      title: 'Influencer Marketing',
      description: 'Connect with top gaming creators for authentic brand collaborations and maximum impact.',
      icon: Users
    },
    {
      title: 'Esports Tournaments',
      description: 'End-to-end tournament execution for BGMI and competitive gaming events.',
      icon: Award
    },
    {
      title: 'Brand Integrations',
      description: 'Seamless brand integrations with creators that drive engagement and conversions.',
      icon: Briefcase
    }
  ];

  const testimonials = [
    {
      quote: "Social Adda helped us reach 10M gamers through strategic creator partnerships. The ROI was phenomenal.",
      author: "Marketing Head",
      company: "Tech Brand"
    },
    {
      quote: "Their tournament execution is world-class. We've run 5 successful BGMI tournaments with them.",
      author: "Brand Manager",
      company: "Gaming Peripheral Company"
    },
    {
      quote: "Joining Social Adda network was the best decision. They connect us with premium brands regularly.",
      author: "Gaming Creator",
      company: "YouTube - 800K Subscribers"
    }
  ];

  return (
    <div className="min-h-screen" data-testid="homepage">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" data-testid="hero-section">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/14266493/pexels-photo-14266493.jpeg"
            alt="Esports tournament"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F]/60 via-[#0B0B0F]/80 to-[#0B0B0F]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center py-24">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-6" data-testid="hero-headline">
            Powering India's Top <br />
            <span className="gradient-text">Gaming Creators</span> & <br />
            <span className="text-[#00F0FF]">Brand Campaigns</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#A0A0A0] mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="hero-subheadline">
            We help brands like Samsung, iQOO, Realme, AMD, Flipkart and more scale through creator-led marketing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/brands"
              data-testid="hero-cta-brands"
              className="bg-[#00F0FF] text-[#0B0B0F] font-bold py-4 px-8 rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] flex items-center gap-2"
            >
              Work With Us <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/creators"
              data-testid="hero-cta-creators"
              className="bg-transparent text-white border-2 border-white/30 font-bold py-4 px-8 rounded-full hover:border-[#8A2BE2] hover:text-[#8A2BE2] transition-all duration-300 flex items-center gap-2"
            >
              Join as Creator <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#12121A]" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}>
                  <Icon className="w-12 h-12 mx-auto mb-4 text-[#00F0FF]" />
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-[#A0A0A0] uppercase tracking-widest text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands Marquee */}
      <section className="py-20 overflow-hidden" data-testid="brands-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm uppercase tracking-widest text-[#A0A0A0] text-center mb-12">Trusted by Leading Brands</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {brands.map((brand, index) => (
              <div key={index} className="text-[#A0A0A0] font-semibold text-lg tracking-widest hover:text-[#00F0FF] transition-colors duration-300" data-testid={`brand-${brand.toLowerCase()}`}>
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Creators */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="featured-creators-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-center">Featured <span className="gradient-text">Creators</span></h2>
          <p className="text-[#A0A0A0] text-center mb-16 max-w-2xl mx-auto">Work with India's top gaming creators who have built loyal, engaged communities.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creators.map((creator, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl hover-lift" data-testid={`creator-card-${index}`}>
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="w-full h-96 object-cover"
                />
                {/* Glassmorphic overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#12121A]/80 backdrop-blur-xl p-6 border-t border-white/10">
                  <h3 className="text-xl font-bold text-white mb-2">{creator.name}</h3>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="text-[#00F0FF] font-semibold">{creator.subscribers}</p>
                      <p className="text-[#A0A0A0] text-xs">Subscribers</p>
                    </div>
                    <div>
                      <p className="text-[#8A2BE2] font-semibold">{creator.engagement}</p>
                      <p className="text-[#A0A0A0] text-xs">Engagement</p>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{creator.niche}</p>
                      <p className="text-[#A0A0A0] text-xs">Niche</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-[#12121A]" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-center">Our <span className="text-[#00F0FF]">Services</span></h2>
          <p className="text-[#A0A0A0] text-center mb-16 max-w-2xl mx-auto">End-to-end influencer marketing solutions for gaming and tech brands.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-[#12121A] border border-white/10 rounded-2xl p-8 hover:border-[#00F0FF]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300"
                  data-testid={`service-card-${index}`}
                >
                  <Icon className="w-12 h-12 text-[#00F0FF] mb-6" />
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-[#A0A0A0] leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              data-testid="services-cta"
              className="inline-flex items-center gap-2 text-[#00F0FF] font-semibold hover:gap-4 transition-all duration-300"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0B0B0F]" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-16 text-center">What Our <span className="gradient-text">Clients Say</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#12121A] border border-white/10 rounded-2xl p-8 hover:border-[#8A2BE2]/50 transition-all duration-300"
                data-testid={`testimonial-${index}`}
              >
                <p className="text-[#A0A0A0] leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-[#00F0FF] text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-[#00F0FF]/10 to-[#8A2BE2]/10" data-testid="final-cta-section">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Ready to Scale Your Brand?</h2>
          <p className="text-xl text-[#A0A0A0] mb-12">Let's create your next winning campaign with India's top gaming creators.</p>
          <Link
            to="/contact"
            data-testid="final-cta-button"
            className="bg-[#00F0FF] text-[#0B0B0F] font-bold py-4 px-8 rounded-full hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.5)] inline-flex items-center gap-2"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
