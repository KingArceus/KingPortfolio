import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string | null;
  index: number;
}

function ProjectCard({ title, description, technologies, githubLink, demoLink, index }: ProjectCardProps) {
  return (
    <motion.div 
      className="bg-gray-800 rounded-lg shadow-lg p-6 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      
      <div className="mb-4 flex flex-wrap">
        {technologies.map((tech, i) => (
          <span key={i} className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-gray-300 m-1">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4 mt-auto">
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <FaGithub className="mr-1" /> GitHub
          </a>
        )}
        {demoLink && (
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <FaExternalLinkAlt className="mr-1" /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;