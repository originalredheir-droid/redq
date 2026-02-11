# Abhishek ekka's AI & ML Portfolio

A personalized portfolio website built with Next.js 16, showcasing AI/ML projects and adapters from Hugging Face.

## Features

- Modern, responsive design
- Multiple themes (Dark, Light, Retro, Cyberpunk, Aurora, Synthwave, Paper)
- Optimized for SEO and performance
- Built with Next.js, React, TypeScript, Tailwind CSS
- Easy customization - add your projects, experience, and skills

## Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization Guide

### 1. Update Your Information
Edit `/config/site.ts`:
- Change your name, title, and bio
- Update social links (GitHub, LinkedIn, Twitter, Email)
- Add your Hugging Face profile link

### 2. Add Your Projects
Edit `/config/projects.ts` and add your projects following the structure:
```typescript
{
  id: "project-id",
  companyName: "Your Hugging Face Model / Project Name",
  type: "Personal",
  category: ["AI", "ML"],
  shortDescription: "Brief description",
  websiteLink: "https://huggingface.co/red001001/project",
  githubLink: "https://github.com/yourusername/project",
  techStack: ["Python", "PyTorch", "Transformers"],
  startDate: new Date("2024-01-01"),
  endDate: new Date("2024-12-31"),
  companyLogoImg: "/projects/your-logo.png",
  descriptionDetails: {
    paragraphs: ["Description"],
    bullets: ["Feature 1", "Feature 2"]
  },
  pagesInfoArr: []
}
```

### 3. Add Your Experience
Edit `/config/experience.ts` to showcase your career timeline.

### 4. Update Skills
Edit `/config/skills.ts` to highlight your technical skills.

### 5. Add Contributions
Edit `/config/contributions.ts` for open-source work.

### 6. Profile Image
Replace `/public/profile-img.jpg` with your profile picture.

## Deploy to Vercel (One-Click)

### Option 1: GitHub Integration (Recommended)

1. **Create a GitHub Repository**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select the project root directory
   - Click "Deploy"
   - Your site will be live in seconds!

3. **Automatic Deployments**
   - Any push to `main` branch automatically deploys
   - Preview deployments for pull requests

### Option 2: Manual Deployment

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

## Environment Variables

Create `.env.local` for local development (see `.env.copy` for reference):
```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## Project Structure

```
├── app/                    # Next.js app directory
├── components/             # Reusable React components
├── config/                 # Configuration files (projects, skills, etc.)
├── public/                 # Static assets
├── lib/                    # Utility functions
├── tailwind.config.js      # Tailwind CSS config
└── vercel.json            # Vercel deployment config
```

## Technologies

- **Framework**: Next.js 16
- **React**: 19
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Language**: TypeScript

## Hugging Face Integration

Your Hugging Face profile is featured on your portfolio:
- **Profile**: https://huggingface.co/red001001/models
- **Adapters**: 14 adapters ready to showcase
- Add adapter links in your projects!

## Tips for Maximum Visibility

1. Add 2-3 showcase projects
2. Highlight your best Hugging Face adapters
3. Keep your Hugging Face profile up-to-date
4. Share your portfolio on social media
5. Link to your GitHub repositories

## Support

For template documentation, visit the [original repo](https://github.com/namanbarkiya/minimal-next-portfolio)

---

**Built with ❤️ - Deploy now to Vercel!**
