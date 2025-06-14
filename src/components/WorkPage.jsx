import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const WorkPage = ({ navigateTo }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <button 
          onClick={() => navigateTo('home')}
          className="absolute top-6 left-6 flex items-center text-purple-400 hover:text-purple-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>
        
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Our Work
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="bg-slate-800/50 p-12 rounded-3xl border border-purple-500/20 backdrop-blur-sm">
          <div className="text-7xl mb-6">🚀</div>
          <h2 className="text-3xl font-bold mb-4 text-purple-300">Coming Soon</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            We're curating an amazing showcase of our latest projects and case studies. 
            Our portfolio will feature innovative mobile apps, stunning websites, and cutting-edge digital solutions.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            In the meantime, feel free to reach out to discuss your project ideas!
          </p>
          <button 
            onClick={() => navigateTo('contact')}
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
          >
            Get in Touch
            <ArrowRight className="inline w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;