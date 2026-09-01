import { ArrowDown, ArrowUpRight, Download, FolderGit2, Link2, Mail } from 'lucide-react'
import { Navbar } from './components/Navbar'
import { ProjectCard } from './components/ProjectCard'
import { SectionHeading } from './components/SectionHeading'
import { gmailComposeUrl, portfolio } from './data/portfolio'

function App() {
  return <div id="home" className="min-h-screen bg-sand text-ink">
    <Navbar />
    <main>
      <section className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl content-center px-5 py-20 sm:px-8 sm:py-24">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.16em] text-moss">Portfolio</p>
        <h1 className="max-w-4xl font-display text-5xl leading-[0.96] tracking-tight sm:text-7xl lg:text-[5.7rem]">{portfolio.name}<span className="text-moss"></span></h1>
        <p className="mt-6 text-lg font-medium text-ink sm:text-xl">{portfolio.title}</p>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">{portfolio.intro}</p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#projects" className="button-primary">View projects <ArrowDown size={17} /></a>
          <a href={portfolio.resumeUrl} target="_blank" rel="noreferrer" className="button-secondary">Resume <Download size={16} /></a>
        </div>
        <div className="mt-12 flex gap-5">
          <a href={portfolio.githubUrl} target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub profile"><FolderGit2 size={20} /> GitHub</a>
          <a href={portfolio.linkedinUrl} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn profile"><Link2 size={20} /> LinkedIn</a>
        </div>
      </section>

      <section id="about" className="border-y border-line bg-white/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          <SectionHeading eyebrow="01 · About" title="A considered approach to building." />
          <div className="space-y-6 text-lg leading-8 text-muted">{portfolio.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading eyebrow="02 · Skills" title="The tools I work with." />
        <div className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.skills.map((skill) => <div className="border-b border-line py-6 sm:pr-8 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0" key={skill.category}>
            <h3 className="font-semibold text-ink">{skill.category}</h3>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>)}
        </div>
      </section>

      <section id="projects" className="bg-ink text-sand">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-10 sm:mb-14"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#a7c3a9]">03 · Projects</p><h2 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">Selected work.</h2></div>
          <div className="project-list">{portfolio.projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
        </div>
      </section>

      <section id="education" className="border-y border-line bg-white/40"><div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"><SectionHeading eyebrow="05 · Education" title="Foundation and learning." />
        <div className="border-t border-line">{portfolio.education.map((item) => <article className="grid gap-3 border-b border-line py-7 sm:grid-cols-[11rem_1fr] sm:gap-8" key={`${item.degree}-${item.institution}`}><p className="text-sm font-medium text-moss">{item.period}</p><div><h3 className="text-lg font-semibold text-ink">{item.degree}</h3><p className="mt-1 font-medium text-muted">{item.institution}</p><p className="mt-3 leading-7 text-muted">{item.details}</p></div></article>)}</div>
        <a href={portfolio.resumeUrl} target="_blank" rel="noreferrer" className="button-primary mt-10">View resume <ArrowUpRight size={17} /></a>
      </div></section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-moss">06 · Contact</p><p className="max-w-xl text-lg leading-8 text-muted">I&apos;m always open to discussing opportunities, thoughtful products, and interesting problems.</p><a href={gmailComposeUrl} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 border-b-2 border-moss pb-1 text-lg font-semibold text-ink transition-colors hover:text-moss">{portfolio.email} <ArrowUpRight size={18} /></a><div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"><a className="inline-flex items-center gap-2 hover:text-moss" href={portfolio.githubUrl} target="_blank" rel="noreferrer"><FolderGit2 size={17} /> GitHub</a><a className="inline-flex items-center gap-2 hover:text-moss" href={portfolio.linkedinUrl} target="_blank" rel="noreferrer"><Link2 size={17} /> LinkedIn</a><a className="inline-flex items-center gap-2 hover:text-moss" href={gmailComposeUrl} target="_blank" rel="noreferrer"><Mail size={17} /> Gmail</a></div></section>
    </main>
    <footer className="border-t border-line px-5 py-7 text-center text-sm text-muted sm:px-8">© {new Date().getFullYear()} {portfolio.name}</footer>
  </div>
}

export default App
