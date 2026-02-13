import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

export const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Group projects by category
  const groupedProjects = resumeData.projects.reduce((acc, project) => {
    const category = (project as any).category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(project);
    return acc;
  }, {} as Record<string, typeof resumeData.projects>);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text"
        >
          Notable Projects
        </motion.h2>

        {/* Professional Projects Section */}
        {groupedProjects['Professional'] && (
          <motion.div
            className="mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-8 text-blue-400 flex items-center"
            >
              <span className="w-1 h-8 bg-blue-500 mr-3 rounded"></span>
              Professional Projects
            </motion.h3>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {groupedProjects['Professional'].map((project: any) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  hoveredId={hoveredId}
                  setHoveredId={setHoveredId}
                  itemVariants={itemVariants}
                />
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Personal Projects Section */}
        {groupedProjects['Personal'] && (
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-8 text-purple-400 flex items-center"
            >
              <span className="w-1 h-8 bg-purple-500 mr-3 rounded"></span>
              Personal Projects
            </motion.h3>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {groupedProjects['Personal'].map((project: any) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  hoveredId={hoveredId}
                  setHoveredId={setHoveredId}
                  itemVariants={itemVariants}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Separate component for project card
const ProjectCard = ({ project, hoveredId, setHoveredId, itemVariants }: any) => (
  <motion.div
    variants={itemVariants}
    onMouseEnter={() => setHoveredId(project.id)}
    onMouseLeave={() => setHoveredId(null)}
    className="group"
  >
    <motion.div
      className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl overflow-hidden border border-slate-600 h-full flex flex-col hover:border-blue-500 transition-colors"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Header */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{project.name}</h3>
            <p className="text-blue-400 text-sm font-semibold">{project.company}</p>
          </div>
          {project.url && (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-blue-400 hover:text-blue-300"
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
        </div>

        <p className="text-xs text-gray-400 mb-3">{project.duration}</p>
        <p className="text-gray-300 text-sm mb-4 flex-1">{project.description}</p>

        {/* Highlights */}
        {project.highlights && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: hoveredId === project.id ? 1 : 0,
              height: hoveredId === project.id ? 'auto' : 0,
            }}
            transition={{ duration: 0.3 }}
            className="mb-4 overflow-hidden"
          >
            <ul className="space-y-1 pb-3 border-b border-slate-600">
              {project.highlights.map((highlight: string, idx: number) => (
                <li key={idx} className="text-xs text-gray-300 flex items-start">
                  <span className="text-blue-400 mr-2">▸</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="px-2.5 py-1 bg-blue-500 bg-opacity-15 text-blue-300 text-xs rounded-full border border-blue-500 border-opacity-30 hover:bg-opacity-30 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.div>
);
