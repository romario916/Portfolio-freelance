import { useEffect } from "react";
import { Code2, ExternalLink, X } from "lucide-react";
import type { Project } from "../../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (!project) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        {/* Fermer */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-gray-700 shadow-md transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {/* Image */}
        <div className="aspect-[16/9] overflow-hidden bg-gray-100">
          <img
            src={project.image}
            alt={`Aperçu du projet ${project.name}`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-sm font-semibold text-blue-600">
            {project.category}
          </p>

          <h2
            id="project-modal-title"
            className="mt-2 text-2xl font-bold text-gray-950 sm:text-3xl"
          >
            {project.name}
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            {project.description}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-gray-950">Le besoin</h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {project.problem}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-950">La solution</h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-gray-950">Technologies</h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {project.liveUrl && !project.liveUrl.startsWith("[") && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Voir le site
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}

            {project.githubUrl && !project.githubUrl.startsWith("[") && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50"
              >
                GitHub
                <Code2 className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;