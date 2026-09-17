# 🚀 High-Impact Developer Portfolio

A modern, ultra-responsive personal portfolio website built with pure HTML5, CSS3, and ES6+ JavaScript. Designed with obsidian dark-mode glassmorphism, dynamic accent theming, an interactive retro-modern terminal, project case study modals, and fluid micro-animations.

---

## 🌟 Key Features

- **⚡ Blazing Fast**: Zero heavy framework overhead or build steps required. 100/100 performance score.
- **🎨 Dynamic Theme Picker**: Switch effortlessly between **Neon Indigo**, **Electric Cyan**, **Cyber Emerald**, and **Solar Amber** with persistent `localStorage` preference.
- **💻 Interactive Hero Terminal**: Visitors and recruiters can type commands (`about`, `skills`, `projects`, `experience`, `contact`, `theme`, `clear`) or click pills for instant responses.
- **📂 Filterable Projects Showcase**: Categorize projects by Full Stack, Web Apps & AI, Tools & Security, and Creative UI.
- **🔍 Deep-Dive Project Modal**: Comprehensive case studies highlighting problem statements, engineering solutions, and architectural wins.
- **🎯 Interactive Skills Arsenal**: Categorized proficiency indicators with animated progress bars.
- **⏳ Career & Education Timeline**: Sleek interactive vertical timeline.
- **💬 Testimonials Carousel**: Client and colleague endorsements with smooth slide transitions.
- **✉️ Working Contact Form & Clipboard Action**: Instant client-side validation, toast notifications, and one-click email copy.
- **📱 100% Mobile & Tablet Responsive**: Custom glassmorphic mobile navigation drawer.

---

## 🛠️ How to Customize Your Portfolio

All your portfolio content is cleanly centralized in a single file: **[`portfolio-data.js`](portfolio-data.js)**.

You do **not** need to edit `index.html` to update your details! Simply open `portfolio-data.js` and modify:

1. **Personal Information**:
   - `name`, `surname`, `role`, `statusBadge`, `email`, `location`, `resumeUrl`
2. **About Me**:
   - `bioHeadline`, `bioLong`, `philosophy`, `strengths`
3. **Skills**:
   - Add, edit, or reorder technical skills and percentage levels
4. **Projects**:
   - Add new projects with titles, taglines, tags, live URLs, GitHub links, and case study details
5. **Experience / Timeline**:
   - Add career roles, companies, dates, and bulleted achievements
6. **Testimonials**:
   - Add client quotes, names, avatars, and roles

---

## 💻 How to Run Locally

You can open `index.html` directly in any web browser!

Or, run a local development server using Python:
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000` in your browser.

---

## 🌐 1-Click Free Deployment

### Deploy to GitHub Pages:
1. Initialize a git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
2. Push to your GitHub repository.
3. In your repository on GitHub, navigate to **Settings** > **Pages** > Select `main` branch root (`/`) > **Save**.

### Deploy to Vercel or Netlify:
- Drag and drop your project folder directly into [Netlify Drop](https://app.netlify.com/drop) or import into [Vercel](https://vercel.com).