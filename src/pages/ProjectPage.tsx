import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="project-page-error">
        <div className="container">
          <Link to="/" className="back-link">
            ← Voltar
          </Link>
          <p>Projeto não encontrado.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="project-page">
      <div className="container project-page-container">
        <Link to="/" className="back-link">
          ← Voltar para Trabalhos
        </Link>

        <div className="project-page-header">
          <img
            src={project.image}
            alt={project.title}
            className="project-page-image"
          />
        </div>

        <div className="project-page-content">
          <div className="project-page-meta">
            <span className="project-page-category">{project.tags[0]}</span>
            <span className="project-page-year">{project.year}</span>
          </div>

          <h1 className="project-page-title">{project.title}</h1>
          <p className="project-page-subtitle">{project.subtitle}</p>

          <div className="project-page-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-page-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="project-page-description">
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}