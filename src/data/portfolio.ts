export type Project = {
  name: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
}

export const portfolio = {
  // Replace this section with your personal information.
  name: 'Aditya Kamboj',
  initials: 'AK',
  title: 'SOFTWARE ENGINEERING · DATA · MACHINE LEARNING',
  intro: 'I build reliable software systems and data-driven applications with a focus on backend development, data analysis, and machine learning.',
  email: 'adityakamboj1511@gmail.com',
  githubUrl: 'https://github.com/ADITYA15115021',
  linkedinUrl: 'https://www.linkedin.com/in/adityakamboj1511',
  resumeUrl: 'https://drive.google.com/file/d/1ZuKRjkMc577XPeAmb0ZsnpRgRCggl8bN/view?usp=drive_link',
  about: [
     ['I’m a software engineer interested in building reliable software and understanding the systems behind it. My work spans backend development, data analysis, and machine learning, with a particular interest in turning raw data and real-world problems into practical applications.'],
      ['I enjoy working across the stack—from designing APIs and working with databases to building data pipelines, analyzing patterns, and developing predictive models. I care about writing code that is clean, maintainable, and purposeful rather than simply making something work.']
      ],
  skills: [
    { category: 'Programming', items: ['JavaScript, Python, Java, SQL'] },
    { category: 'Data / ML', items: ['Numpy, Pandas, Scikit-learn'] },
    { category: 'Frameworks & Libraries', items: ['Nodejs, Express, FastAPI, Pandas, Scikit-learn, React'] },
    { category: 'Databases and DevOps', items: ['PostgreSQL, Git, Github Actions, Docker'] }
  ],
  projects: [
    
    { name: 'Agricultural Crop Price Analytics & Forecasting', description: 'Built a data-driven application for analyzing and forecasting agricultural crop prices across Indian markets. The system processes historical price data to identify trends, seasonality, and market-level variations, and exposes the analysis and forecasting functionality through a FastAPI backend.', technologies: ['[Python]','[FastAPI]','[Pandas]', '[React]','[PostgreSQL]','[Scikit-learn]'], githubUrl: 'https://github.com/ADITYA15115021/crop_price', liveUrl: 'https://crop-price-theta.vercel.app/' },
    { name: 'Anonymous Feedback Platform', description: 'Built a full-stack anonymous feedback platform that allows users to create shareable feedback pages and receive anonymous responses. The system provides authenticated page management, feedback acceptance controls, JWT-based authentication, and persistent storage through a PostgreSQL database.', technologies: ['[Python]', '[FastAPI]', '[React]', '[PostgreSQL]','[SQLAlchemy]'], githubUrl: 'https://github.com/ADITYA15115021/anonfeedback', liveUrl: 'https://anonfeedback-khaki.vercel.app/' },
    
  ] as Project[],

  education: [
    { degree: 'BTECH CSE', institution: 'VIT VELLORE', period: 'SEPT 2022 — AUG 2026' }
  ]
} as const

// Used for all email buttons so they open a Gmail compose window instead of a local mail app.
export const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolio.email)}`
