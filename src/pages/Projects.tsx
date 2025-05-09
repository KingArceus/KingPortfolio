import { useState, useEffect, useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { ProjectType } from '../types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  homepage: string | null;
}

function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedProjects, setDisplayedProjects] = useState<ProjectType[]>([]);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/KingArceus/repos?sort=updated&per_page=100');
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub projects');
        }
        
        const repos: GitHubRepo[] = await response.json();
        
        // Filter and transform repositories into projects
        const transformedProjects: ProjectType[] = repos
          .filter(repo => !repo.name.includes('.github.io')) // Exclude GitHub Pages repos
          .map(repo => ({
            title: repo.name.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' '),
            description: repo.description || 'No description available',
            technologies: repo.topics || [],
            githubLink: repo.html_url,
            demoLink: repo.homepage
          }));

        setProjects(transformedProjects);
        setDisplayedProjects(transformedProjects.slice(currentPage - 1, currentPage + 2));
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  const totalProjects = projects.length - 2;

  const handlePreviousPage = () => {
    setCurrentPage(prev => {
      const newPage = prev - 1;
      if (newPage < 1) {
        // Add projects to the start
        const newProjects = [...projects, ...displayedProjects];
        setDisplayedProjects(newProjects);
        return totalProjects;
      }
      return newPage;
    });
  };

  const handleNextPage = () => {
    setCurrentPage(prev => {
      const newPage = prev + 1;
      if (newPage > totalProjects) {
        // Add projects to the end
        const newProjects = [...displayedProjects, ...projects.slice(0, 3)];
        setDisplayedProjects(newProjects);
        return 1;
      }
      return newPage;
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-red-500 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto pt-24 pb-20 px-10">
        <SectionTitle 
          title="Projects" 
          subtitle="A showcase of my recent work and technical projects"
        />
        
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3 min-h-[600px] overflow-hidden">
          <motion.div
            ref={carousel}
            className="flex gap-8 w-full"
            animate={{
              x: `-${(currentPage - 1) * (100 + 6.9)}%`
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={`${project.githubLink}-${index}`}
                className="w-full flex-shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard 
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Controls */}
        <motion.div 
          className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm py-4 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex justify-center items-center space-x-6">
                <motion.button
                  onClick={handlePreviousPage}
                  className="p-3 rounded-full text-white hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaChevronLeft size={24} />
                </motion.button>
                
                <motion.div 
                  className="flex items-center space-x-2 text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={currentPage}
                >
                  <span className="text-lg font-medium">{currentPage}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-400">{totalProjects}</span>
                </motion.div>
                
                <motion.button
                  onClick={handleNextPage}
                  className="p-3 rounded-full text-white hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaChevronRight size={24} />
                </motion.button>
              </div>

              {/* Slider Navigation */}
              <div className="w-full max-w-md h-1 bg-gray-800 rounded-full relative">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                  initial={false}
                  animate={{
                    width: `${(100 / totalProjects)}%`,
                    x: `${((currentPage - 1) * 100)}%`
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                <div className="absolute inset-0 flex">
                  {Array.from({ length: totalProjects }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className="flex-1 h-full cursor-pointer"
                      aria-label={`Go to page ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;