import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string | null;
  index: number;
  isLoading?: boolean;
}

function ProjectCard({ title, description, technologies, githubLink, demoLink, index, isLoading = false }: ProjectCardProps) {
  if (isLoading) {
    return (
      <motion.div 
        className="bg-gray-800 rounded-lg shadow-lg p-4 md:p-6 h-full flex flex-col overflow-hidden animate-pulse"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-700 rounded w-4/6"></div>
        </div>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 bg-gray-700 rounded w-20"></div>
          ))}
        </div>
        
        <div className="flex space-x-4 mt-auto">
          <div className="h-6 bg-gray-700 rounded w-24"></div>
          <div className="h-6 bg-gray-700 rounded w-24"></div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="bg-gray-800 rounded-lg shadow-lg p-4 md:p-6 h-full flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="text-lg md:text-xl font-semibold mb-2 text-primary-600 line-clamp-2">{title}</h3>
      <p className="text-sm md:text-base text-gray-400 mb-4 flex-grow line-clamp-3 md:line-clamp-4">{description}</p>
      
      <div className="mb-4 flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <span key={i} className="skill-tag text-xs md:text-sm">
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
            className="flex items-center text-gray-400 hover:text-primary-600 transition-colors duration-200 text-sm md:text-base"
          >
            <FaGithub className="mr-1" /> GitHub
          </a>
        )}
        {demoLink && (
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-primary-600 transition-colors duration-200 text-sm md:text-base"
          >
            <FaExternalLinkAlt className="mr-1" /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;