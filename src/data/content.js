import React from 'react';
import { Smartphone, Globe, Code, Zap, Users, Star } from 'lucide-react';

export const services = [
  { 
    icon: <Smartphone className="w-6 h-6" />, 
    title: "Mobile Applications", 
    desc: "iOS and React Native development with cross-platform excellence" 
  },
  { 
    icon: <Globe className="w-6 h-6" />, 
    title: "Web Development", 
    desc: "Responsive websites and progressive web applications" 
  },
  { 
    icon: <Code className="w-6 h-6" />, 
    title: "Digital Solutions", 
    desc: "Custom software development tailored to your needs" 
  },
  { 
    icon: <Zap className="w-6 h-6" />, 
    title: "Digital Strategy", 
    desc: "Comprehensive digital product strategy and consulting" 
  },
  { 
    icon: <Users className="w-6 h-6" />, 
    title: "UX Design", 
    desc: "User experience design that delights and converts" 
  },
  { 
    icon: <Star className="w-6 h-6" />, 
    title: "Design Systems", 
    desc: "Comprehensive design system consulting and implementation" 
  }
];

export const lumiereFeatures = [
  { 
    title: "Consistency", 
    desc: "Unified experience across all digital touchpoints" 
  },
  { 
    title: "Accessibility", 
    desc: "WCAG compliant design for everyone" 
  },
  { 
    title: "Scalability", 
    desc: "Solutions that grow with your business" 
  },
  { 
    title: "Efficiency", 
    desc: "Streamlined development and maintenance" 
  },
  { 
    title: "Aesthetics", 
    desc: "Beautiful design that enhances engagement" 
  }
];