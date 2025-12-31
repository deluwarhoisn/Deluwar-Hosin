# Deluwar Hosin - Professional Portfolio Website

A modern, high-performance portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ✨ **Modern Design** - Clean, minimalist, and professional
- 🌓 **Dark/Light Mode** - Toggle between themes
- 📱 **Fully Responsive** - Mobile-first design
- 🎭 **Smooth Animations** - Powered by Framer Motion
- ⚡ **High Performance** - Optimized with Vite
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔧 **Modular Structure** - Easy to customize and edit

## 🛠️ Tech Stack

- **React 18** - UI library
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Vite** - Build tool

## 📦 Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Start development server**:
```bash
npm run dev
```

3. **Build for production**:
```bash
npm run build
```

4. **Preview production build**:
```bash
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx      # Navigation with theme toggle
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Skills.jsx      # Skills with progress bars
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── Contact.jsx     # Contact form & social links
│   │   └── Footer.jsx      # Footer
│   ├── context/            # React contexts
│   │   └── ThemeContext.jsx # Dark/light mode context
│   ├── data/               # Data files
│   │   └── portfolioData.js # All portfolio data (easy to edit!)
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles & Tailwind
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies
```

## ✏️ Customization

### Edit Your Information

All your personal information, projects, and skills are in **`src/data/portfolioData.js`**. Simply edit this file to update:

- Personal information (name, title, about text)
- Skills with proficiency levels
- Projects (title, description, tags, links)
- Social media links

### Example:

```javascript
export const portfolioData = {
  personal: {
    name: 'Your Name',
    title: 'Your Title',
    headline: "Hi, I'm Your Name",
    // ... edit here
  },
  skills: [
    { name: 'React', level: 90 },
    // ... add/remove skills
  ],
  projects: [
    {
      title: 'My Project',
      description: 'Project description',
      // ... edit projects
    }
  ],
  // ...
}
```

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Add/Remove Sections

Simply import and add components in `src/App.jsx`:

```jsx
import NewSection from './components/NewSection'

// Add in App component
<NewSection />
```

## 🎨 Design Features

- **Gradient Text** - Beautiful gradient headings
- **Smooth Scrolling** - Enhanced navigation experience
- **Hover Effects** - Interactive elements
- **Progress Bars** - Animated skill levels
- **Card Animations** - Staggered entrance animations
- **Theme Toggle** - Persistent dark/light mode

## 📱 Sections

1. **Hero** - Eye-catching introduction with CTA
2. **About** - Personal story and key features
3. **Skills** - Technical skills with progress indicators
4. **Projects** - Project showcase with links
5. **Contact** - Contact form and social links

## 🚀 Deployment

### Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

See `DEPLOY.md` for detailed instructions.

## 📝 License

© 2025 Deluwar Hosin. All rights reserved.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
