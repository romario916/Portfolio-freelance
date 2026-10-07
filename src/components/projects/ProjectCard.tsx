import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

const ProjectCard = ({ project, onOpen }: ProjectCardProps) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/5">
      {/* Image */}
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-inset"
        aria-label={`Voir les détails du projet ${project.name}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          <img
            src={project.image}
            alt={`Aperçu du projet ${project.name}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gray-950/0 transition-colors duration-300 group-hover:bg-gray-950/10" />

          <div className="absolute right-4 top-4 rounded-full bg-white/95 p-2 text-gray-900 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </div>
        </div>
      </button>

      {/* Contenu */}
      <div className="p-6 sm:p-7">
        <p className="text-sm font-medium text-blue-600">
          {project.category}
        </p>

        <h3 className="mt-2 text-xl font-bold text-gray-950">
          {project.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center gap-4">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="text-sm font-semibold text-gray-950 transition-colors hover:text-blue-600 focus:outline-none focus-visible:text-blue-600"
          >
            Voir l'étude de cas
          </button>

          {project.liveUrl && !project.liveUrl.startsWith("[") && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Site en ligne
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;