import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import type { Project } from '../data/portfolio'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className="group grid border-t border-line py-7 first:border-t-0 sm:grid-cols-[4rem_1fr_auto] sm:gap-6 sm:py-9">
    <p className="mb-3 text-sm font-medium text-moss sm:mb-0">0{index + 1}</p>
    <div>
      {project.image && <img src={project.image} alt={`${project.name} project preview`} className="mb-5 aspect-[16/8] w-full object-cover" />}
      <h3 className="text-xl font-semibold tracking-tight text-ink">{project.name}</h3>
      <p className="mt-3 max-w-2xl leading-7 text-muted">{project.description}</p>
      <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-ink" aria-label={`${project.name} technologies`}>
        {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
    </div>
    <div className="mt-5 flex flex-wrap items-start gap-3 sm:mt-0 sm:justify-end">
      {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link"><FolderGit2 size={17} /> View source</a>}
      {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link"><ArrowUpRight size={17} /> Live demo</a>}
    </div>
  </article>
}
