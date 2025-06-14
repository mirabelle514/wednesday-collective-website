# The Wednesday Collective

> **Digital Innovation Through Design Excellence**

A sophisticated React website showcasing The Wednesday Collective's digital design and development services, built with the proprietary Lumière Design System aesthetic.

**Live Website:** [https://thewednesdaycollective.com](https://thewednesdaycollective.com)

## Design Philosophy

The Wednesday Collective website embodies the **Lumière Design System** - a comprehensive design language that ensures consistency, accessibility, scalability, efficiency, and beautiful aesthetics across all digital touchpoints.

### Visual Identity
- **French-inspired elegance** with sophisticated color palettes
- **Purple/blue gradient themes** throughout the interface
- **Golden accents** for premium Lumière branding
- **Dark theme** with carefully crafted contrast ratios
- **Smooth animations** and micro-interactions

## Features

### Homepage
- **Hero section** with animated gradients and parallax effects
- **About section** with company statistics and achievements
- **Services showcase** with interactive hover effects
- **Lumière Design System** dedicated section
- **Philosophy & Promise** sections with call-to-actions

### Work Portfolio
- **Coming Soon** page with professional messaging
- **Rocket emoji** and engaging copy
- **Navigation** to contact page for inquiries

### Contact Page
- **Comprehensive contact form** with validation
- **Google reCAPTCHA v2** spam protection
- **Company information** with clickable email links
- **Service highlights** and capabilities list
- **Professional styling** with purple theme integration

### Key Statistics
- **100+** Projects Delivered
- **50+** Happy Clients
- **12+** Years Experience
- **100%** Attention to Detail

## Tech Stack

- **React 18.2.0** - Modern React with functional components and hooks
- **Tailwind CSS 3.4.1** - Utility-first CSS framework for styling
- **Lucide React 0.515.0** - Beautiful, customizable icons
- **react-google-recaptcha** - Google reCAPTCHA integration
- **JavaScript ES6+** - Modern JavaScript features

## Project Structure

```
wednesday-collective-website/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── HomePage.jsx          # Main landing page
│   │   ├── WorkPage.jsx          # Portfolio (Coming Soon)
│   │   └── ContactPage.jsx       # Contact form & info
│   ├── data/
│   │   └── content.js            # Services & content data
│   ├── App.js                    # Main router component
│   ├── index.js                  # React entry point
│   └── index.css                 # Tailwind CSS setup
├── tailwind.config.js            # Tailwind configuration
├── postcss.config.js             # PostCSS configuration
├── package.json                  # Dependencies & scripts
└── README.md                     # Project documentation
```

## Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Google reCAPTCHA** site key (for contact form)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/wednesday-collective-website.git
   cd wednesday-collective-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   
   The app will open at `http://localhost:3000`

## Build & Deployment

### Development Workflow

1. **Local Development**
   ```bash
   npm start                    # Start development server
   ```

2. **Production Build**
   ```bash
   npm run build               # Create optimized production build
   ```

3. **Deploy to Production**
   - Upload contents of `build/` folder to web server
   - For cPanel: Upload to `public_html/thewednesdaycollective.com/`
   - Ensure proper file permissions (644 for files, 755 for folders)

### File Structure After Build
```
build/
├── index.html              # Main HTML file
├── static/
│   ├── css/
│   │   └── main.[hash].css # Compiled styles
│   ├── js/
│   │   └── main.[hash].js  # Compiled React app
│   └── media/              # Optimized assets
└── favicon.ico
```

## Lumière Design System

The website implements the proprietary **Lumière Design System** with:

### Color Palette
- **Primary:** Purple/Blue gradients (`from-purple-400 to-blue-400`)
- **Secondary:** Indigo/Pink accents (`from-indigo-400 to-pink-400`)
- **Accent:** Golden yellow for Lumière branding (`from-yellow-400 to-orange-400`)
- **Background:** Dark slate theme (`bg-slate-900`)
- **Text:** White primary with gray variations

### Typography
- **Font Stack:** System fonts with fallbacks
- **Headings:** Bold weights with gradient text effects
- **Body:** Light to regular weights for readability
- **Hierarchy:** Clear size and weight distinctions

### Spacing
- **Grid System:** 8px base unit
- **Containers:** Max-width responsive containers
- **Sections:** Consistent padding and margins

## Contact Form Configuration

### Form Features
- **Validation:** Required fields with user feedback
- **Spam Protection:** Google reCAPTCHA integration
- **Responsive Design:** Mobile-optimized layout
- **Professional Styling:** Consistent with design system

## Development Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run test suite
npm run eject      # Eject from Create React App (not recommended)
```

## Performance Features

- **Code Splitting:** Automatic with React
- **Asset Optimization:** Images and files optimized in build
- **CSS Purging:** Unused Tailwind classes removed
- **Minification:** JavaScript and CSS minified
- **Responsive Images:** Optimized for different screen sizes

## Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## Responsive Design

- **Mobile First:** Designed for mobile devices first
- **Breakpoints:** Tailwind's default responsive breakpoints
- **Flexible Layouts:** CSS Grid and Flexbox
- **Touch Friendly:** Optimized for touch interactions

## Security Features

- **reCAPTCHA Protection:** Prevents spam submissions
- **Input Validation:** Client-side form validation
- **Secure Deployment:** HTTPS enforced
- **No Sensitive Data:** No API keys or secrets in frontend code

## Future Enhancements

- **Portfolio Gallery:** Showcase completed projects
- **Blog Section:** Content marketing and insights
- **Client Testimonials:** Social proof and reviews
- **Case Studies:** Detailed project breakdowns
- **Analytics Integration:** Google Analytics or similar
- **SEO Optimization:** Meta tags and structured data

## Contributing

This is a proprietary website for The Wednesday Collective. For inquiries about collaboration or services, please contact through the website's contact form.

## Contact

**The Wednesday Collective**
- **Website:** [https://thewednesdaycollective.com](https://thewednesdaycollective.com)
- **Email:** [hello@thewednesdaycollective.com](mailto:hello@thewednesdaycollective.com)

## License

This project is proprietary and confidential. All rights reserved by The Wednesday Collective.

---

**Built with ❤️ using the Lumière Design System**

*Powered by React, Tailwind CSS, and modern web technologies*