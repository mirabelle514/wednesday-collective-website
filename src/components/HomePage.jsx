import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { services, lumiereFeatures } from '../data/content';

const HomePage = ({ navigateTo }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.3)_0%,transparent_50%)]"
          style={{ transform: `scale(${1 + scrollY * 0.0002})` }}
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8 transform transition-all duration-1000 ease-out">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              The Wednesday
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Collective
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide">
            Digital Innovation Through Design Excellence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => navigateTo('work')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
            >
              Explore Our Work
              <ArrowRight className="inline w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={() => navigateTo('contact')}
              className="px-8 py-4 border border-purple-400/50 rounded-full font-semibold transition-all duration-300 hover:bg-purple-400/10 hover:border-purple-400"
            >
              Get in Touch
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                About Us
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                The Wednesday Collective is a comprehensive digital design and development studio specializing in mobile applications, web development, and cutting-edge digital solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Built on the foundation of our proprietary <span className="text-purple-400 font-semibold">Lumière Design System</span>, we create cohesive, beautiful, and highly functional digital experiences that seamlessly integrate across all platforms.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-800/50 p-8 rounded-3xl border border-purple-500/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
                    <div className="text-sm text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                    <div className="text-sm text-gray-400">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-400 mb-2">12+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
                    <div className="text-sm text-gray-400">Attention to Detail</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Our Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-6 bg-slate-800/50 rounded-2xl border border-purple-500/20 transition-all duration-300 hover:border-purple-400/50 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lumière Design System */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Lumière</span> Design System
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At the heart of everything we create lies our comprehensive design language that ensures excellence across all digital touchpoints.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lumiereFeatures.map((feature, index) => (
              <div 
                key={index}
                className="group p-6 bg-gradient-to-br from-slate-800/80 to-slate-700/80 rounded-xl border border-yellow-500/20 transition-all duration-300 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-500/10"
              >
                <h3 className="text-lg font-semibold mb-3 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Philosophy
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            We believe that exceptional digital experiences are born from the marriage of innovative technology and thoughtful design. Every pixel, every interaction, and every line of code is crafted with intention, creating solutions that not only function flawlessly but inspire and delight users.
          </p>
          <div className="inline-block p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl border border-purple-500/30">
            <p className="text-lg font-medium text-purple-300">
              "Design is not just what it looks like and feels like. Design is how it works."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Our Promise
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Whether you're a startup looking to make your mark, an established business seeking digital transformation, or an entrepreneur with a revolutionary idea, The Wednesday Collective brings your vision to life with uncompromising quality and attention to detail.
          </p>
          <button 
            onClick={() => navigateTo('contact')}
            className="group px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
          >
            Start Your Project
            <ArrowRight className="inline w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p>Powered by the <span className="text-yellow-400">Lumière Design System</span></p>
            <p>Part of The Wednesday Collective family of initiatives</p>
          </div>
          <div className="text-gray-500">
            © 2025 The Wednesday Collective. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;