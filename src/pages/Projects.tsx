import { useState, useEffect, useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { ProjectType } from '../types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useScreenSize from '../Utils/GetScreenSize';

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
  const screenSize = useScreenSize();
  const componentRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState<number>(0);

  // Calculate gap size based on screen size
  const getGapSize = () => {
    switch (screenSize) {
      case 'xs':
      case 'sm':
        return 16; // 0.25rem (4px)
      default:
        return 32;
    }
  };

  // Calculate number of projects to show based on screen size
  const getProjectsPerPage = () => {
    switch (screenSize) {
      case 'xs':
      case 'sm':
        return 1; // Show 1 project on mobile
      case 'md':
        return 2; // Show 2 projects on tablet
      default:
        return 3;
    }
  };

  // Handle screen resize
  useEffect(() => {
    const totalPages = projects.length - (getProjectsPerPage() - 1);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }

    const updateWidth = () => {
      if (componentRef.current) {
        setCardWidth(componentRef.current.offsetWidth);
      }
    };

    updateWidth(); // Set initial width
    window.addEventListener('resize', updateWidth); // Optional: update on resize

    return () => window.removeEventListener('resize', updateWidth);
  }, [screenSize, projects.length, currentPage]);

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
        // Initialize displayed projects with the first set
        const initialProjects = transformedProjects.slice(0, getProjectsPerPage());
        setDisplayedProjects(initialProjects);
        setCurrentPage(1);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  // Update displayed projects when current page changes
  useEffect(() => {
    if (projects.length > 0) {
      const startIndex = currentPage - 1;
      const endIndex = startIndex + getProjectsPerPage();
      setDisplayedProjects(projects.slice(startIndex, endIndex));
    }
  }, [currentPage, projects, screenSize]);

  const totalProjects = projects.length - (getProjectsPerPage() - 1);

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
        const newProjects = [...displayedProjects, ...projects.slice(0, getProjectsPerPage())];
        setDisplayedProjects(newProjects);
        return 1;
      }
      return newPage;
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900">
        <div className="container mx-auto pt-24 md:pt-24 pb-20 px-4 md:px-10">
          <SectionTitle 
            title="Projects" 
            subtitle="A showcase of my recent work and technical projects"
          />
          <div className="relative grid gap-4 md:gap-8 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[500px] md:min-h-[600px] overflow-hidden">
            {Array.from({ length: getProjectsPerPage() }).map((_, index) => (
              <ProjectCard
                key={index}
                title=""
                description=""
                technologies={[]}
                githubLink=""
                demoLink={null}
                index={index}
                isLoading={true}
              />
            ))}
          </div>
        </div>
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
      <div className="container mx-auto pt-24 md:pt-24 pb-20 px-4 md:px-10">
        <SectionTitle 
          title="Projects" 
          subtitle="A showcase of my recent work and technical projects"
        />
        <div className="relative grid gap-4 md:gap-8 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[500px] md:min-h-[600px] overflow-hidden">
          <motion.div
            ref={carousel}
            className="flex gap-4 md:gap-8 w-full"
            animate={{
              x: `-${(currentPage - 1) * (cardWidth + getGapSize())}px`
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                ref={componentRef}
                key={`${project.githubLink}-${index}`}
                className="w-full flex-shrink-0 px-2"
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
          className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm py-3 md:py-4 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-3 md:space-y-4">
              <div className="flex justify-center items-center space-x-4 md:space-x-6">
                <motion.button
                  onClick={handlePreviousPage}
                  className="p-2 md:p-3 rounded-full text-white hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaChevronLeft size={20} className="md:w-6 md:h-6" />
                </motion.button>
                
                <motion.div 
                  className="flex items-center space-x-2 text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={currentPage}
                >
                  <span className="text-base md:text-lg font-medium">{currentPage}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-400">{totalProjects}</span>
                </motion.div>
                
                <motion.button
                  onClick={handleNextPage}
                  className="p-2 md:p-3 rounded-full text-white hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaChevronRight size={20} className="md:w-6 md:h-6" />
                </motion.button>
              </div>

              {/* Slider Navigation */}
              <div className="w-full max-w-[280px] md:max-w-md h-1 bg-gray-800 rounded-full relative">
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