# Harendra Kumar's Modern Portfolio Website

A beautiful, fully responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Perfect for showcasing your projects, skills, and experience.

## 🚀 Features

### Core Features
- ✨ **Fully Responsive Design** - Mobile, tablet, and desktop optimized
- 🌙 **Dark/Light Mode Toggle** - System preference detection & persistent storage
- ⚡ **Smooth Animations** - Framer Motion animations and transitions
- 📱 **Mobile Optimized Navigation** - Hamburger menu with smooth transitions
- 🎯 **SEO Friendly** - Meta tags, semantic HTML, open graph tags
- ♿ **Accessibility** - WCAG compliant with proper ARIA labels

### Sections
1. **Home** - Hero section with profile introduction
2. **About Me** - Personal introduction and background
3. **Education** - Timeline-based academic details
4. **Skills** - Categorized skills with progress bars
5. **Projects** - Project showcase with tech stack and links
6. **Certifications** - Professional certifications display
7. **Resume** - PDF resume viewer with download option
8. **Contact** - Contact form with validation and social links

### Advanced Features
- Smooth scrolling navigation
- Form validation
- Error handling
- Loading states
- Responsive images
- Custom scrollbar styling
- Gradient text effects
- Hover animations on components

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vite** - Fast build tool and dev server

### Additional Libraries
- `react-icons` - Icon library
- `react-router-dom` - Routing (optional)
- `react-pdf` - PDF viewer component (optional)

## 📋 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf              # Your resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Hero.jsx           # Hero section
│   │   ├── About.jsx          # About section
│   │   ├── Education.jsx      # Education timeline
│   │   ├── Skills.jsx         # Skills with progress bars
│   │   ├── Projects.jsx       # Projects showcase
│   │   ├── Certifications.jsx # Certifications
│   │   ├── Resume.jsx         # Resume section
│   │   ├── Contact.jsx        # Contact form
│   │   ├── Footer.jsx         # Footer
│   │   └── ScrollToTop.jsx    # Scroll to top button
│   ├── context/
│   │   └── ThemeContext.jsx   # Dark mode context
│   ├── App.jsx                # Main component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── index.html                 # HTML entry point
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The portfolio will open at `http://localhost:3000`

## 🎨 Customization

### Update Personal Information
Edit the content in each component file:
- **Hero.jsx** - Your name, title, and introduction
- **About.jsx** - About section content
- **Skills.jsx** - Your skills and proficiency levels
- **Projects.jsx** - Your projects with descriptions
- **Contact.jsx** - Contact email and social links
- **Education.jsx** - Educational background

### Change Colors
Update `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',      // Dark background
      secondary: '#1e293b',    // Secondary dark
      accent: '#3b82f6',       // Blue accent
      light: '#f8fafc',        // Light background
    },
  },
}
```

### Add Resume
1. Place your PDF resume in the `public/` folder
2. Name it `resume.pdf`
3. Update the path in `Resume.jsx` if needed

### Update Social Links
Edit the social media URLs in:
- **Hero.jsx**
- **Contact.jsx**
- **Footer.jsx**

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Vite and configure it
   - Click "Deploy"

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository for auto-deploy

### Deploy to GitHub Pages

1. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/portfolio/', // Replace with your repo name
     plugins: [react()],
   })
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add to package.json**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are optimized for these breakpoints.

## 🎯 SEO Optimization

- ✅ Meta tags in HTML
- ✅ Semantic HTML structure
- ✅ Open Graph tags for social sharing
- ✅ Mobile-friendly viewport settings
- ✅ Performance optimization with Vite

## 🔐 Best Practices Implemented

- ✅ Component composition and reusability
- ✅ Context API for theme management
- ✅ Responsive design patterns
- ✅ Accessibility considerations
- ✅ Performance optimization
- ✅ Code splitting capability
- ✅ Environment variable support
- ✅ Error handling and validation

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev)

## 📝 License

This project is open source and available under the MIT License.

## 💬 Support

For questions or issues, feel free to:
- Create an issue on GitHub
- Contact via email
- Reach out on social media

## 🎉 What's Next?

### Enhancement Ideas
- Add blog section with markdown support
- Integrate with email service (Formspree, EmailJS)
- Add analytics (Google Analytics, Vercel Analytics)
- Add internationalization (i18n)
- Add testimonials/recommendations section
- Add search functionality for projects
- Add pagination for projects
- Add filters for projects by technology

### AI/ML Integrations
- AI-powered chatbot assistant
- LLM-based recommendation system
- Automated content generation with LangGraph
- AI-powered form response automation

---

**Built with ❤️ by Harendra Kumar**

## Deployment
This project is configured for deployment on:
- **GitHub Pages**: served at `/Myportfolio/`
- **Vercel**: served at `/`
