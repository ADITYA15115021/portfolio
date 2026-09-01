# Personal Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Lucide icons.

## Customize content

Update **`src/data/portfolio.ts`**. It holds your name, biography, social links, skills, projects, experience, education, and resume URL. All placeholder values are visibly marked with brackets.

For every project, add the `githubUrl`, `liveUrl`, and optionally `image` fields in that same file. External URLs open safely in a new tab.

Replace `public/resume.pdf` with your actual PDF. Keep the file name or update `resumeUrl` in the configuration file.

## Run locally

```bash
npm install
npm run dev
```

## Build for deployment

```bash
npm run build
```

The production-ready output is created in `dist/`.
