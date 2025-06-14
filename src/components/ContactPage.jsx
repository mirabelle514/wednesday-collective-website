import React, { useState } from 'react';
import { ArrowLeft, Mail, MapPin, Send } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactPage = ({ navigateTo }) => {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
    });
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!captchaValue) {
          alert('Please complete the CAPTCHA verification.');
          return;
        }
        
        alert('Thank you for your message! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', company: '', project: '', message: '' });
        setCaptchaValue(null);
      };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-20">
        <button 
          onClick={() => navigateTo('home')}
          className="flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's discuss your project and create something extraordinary together.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-300">Let's Start a Conversation</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Whether you're a startup with a groundbreaking idea, an established business ready for digital transformation, 
                  or an entrepreneur looking to make your mark, we're here to help bring your vision to life.
                </p>
              </div>

              <div className="space-y-6">
              <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <a 
                  href="mailto:hello@thewednesdaycollective.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors underline"
                >hello@thewednesdaycollective.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Studio</h4>
                <p className="text-gray-400">Fox Point, WI</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-2xl border border-purple-500/20">
                <h4 className="font-semibold text-purple-300 mb-3">What We Do Best</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Mobile App Development (iOS & React Native)</li>
                  <li>• Web Application Development</li>
                  <li>• Design System Creation</li>
                  <li>• Digital Product Strategy</li>
                  <li>• UX/UI Design & Research</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/30 p-8 rounded-3xl border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all"
                  >
                    <option value="">Select a project type</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="web-app">Web Application</option>
                    <option value="design-system">Design System</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all resize-none"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                </div>
                <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey="6Ld7YGArAAAAAIjFQ6Sqk70F4WqnYlRVeU4FV6oI"
                  onChange={(value) => setCaptchaValue(value)}
                  theme="dark"
                />
              </div>

              <button
                type="submit"
                className="w-full group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 flex items-center justify-center"
              >
                Send Message
                  <Send className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              <p className="text-sm text-gray-400 mt-4 text-center">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;