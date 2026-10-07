import { useState } from "react";
import { motion } from "framer-motion";

import { projects } from "../data/projects";
import type { Project } from "../types";
import SectionTitle from "../components/common/SectionTitle";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectModal from "../components/projects/ProjectModal";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null,
  );

  const { t } = useLanguage();

  return (
    <section
      id="projets"
      aria-labelledby="projects-title"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-violet-50/50 py-20 sm:py-24 lg:py-28"
    >
      {/* Motif de points discret */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:radial-gradient(#c7d2fe_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
        aria-hidden="true"
      />

      {/* Halos décoratifs */}
      <div
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group relative rounded-3xl bg-gradient-to-br from-blue-200/70 via-gray-200/60 to-violet-200/70 p-px shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:from-blue-500 hover:via-violet-500 hover:to-violet-600 hover:shadow-2xl hover:shadow-violet-500/20"
            >
              <div className="h-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-white">
                <ProjectCard
                  project={project}
                  onOpen={setSelectedProject}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;