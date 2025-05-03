import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

interface Skill {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
}

const Home: React.FC = () => {
  const skills: Skill[] = [
    { name: 'C# .NET', icon: '🔷' },
    { name: 'SQL Server', icon: '🛢️' },
    { name: 'SSIS (ETL)', icon: '🔄' },
    { name: 'GitHub Actions', icon: '🔧' },
    { name: 'Agile', icon: '🔄' }
  ];

  const projects: Project[] = [
    {
      title: 'ETL Data Pipeline',
      description: 'Developed a robust ETL pipeline using SSIS for financial data processing.',
      technologies: ['C#', 'SSIS', 'SQL Server'],
      githubLink: 'https://github.com/yourusername/etl-pipeline'
    },
    {
      title: 'Automated Workflow System',
      description: 'Created a CI/CD pipeline with GitHub Actions for automated testing and deployment.',
      technologies: ['GitHub Actions', 'C#', '.NET'],
      githubLink: 'https://github.com/yourusername/workflow-system'
    },
    {
      title: 'Financial Dashboard',
      description: 'Built a real-time financial dashboard for monitoring key business metrics.',
      technologies: ['C#', 'SQL Server', 'React'],
      githubLink: 'https://github.com/yourusername/financial-dashboard'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary-50 to-secondary-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-4 font-heading">
                Hi, I'm <span className="text-primary-600">Your Name</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-secondary-700 mb-6">
                Software Developer
              </h2>
              <p className="text-lg text-secondary-600 mb-8 max-w-lg">
                Specialized in C# .NET, SQL Server, ETL (SSIS), and GitHub Actions. 
                Building robust software solutions for complex business problems.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn btn-primary flex items-center">
                  Contact Me <FaArrowRight className="ml-2" />
                </Link>
                <Link to="/projects" className="btn btn-secondary">
                  View Projects
                </Link>
              </div>
              
              <div className="flex mt-8 space-x-4">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-700 hover:text-primary-600 transition-colors duration-200"
                >
                  <FaGithub size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-700 hover:text-primary-600 transition-colors duration-200"
                >
                  <FaLinkedin size={24} />
                </a>
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-secondary-700 hover:text-primary-600 transition-colors duration-200"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="relative z-10 w-64 h-64 object-cover rounded-full border-4 border-white shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Core Skills</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Specialized in building robust software solutions with the following technologies
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="card text-center py-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="font-semibold text-secondary-800">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/skills" className="btn btn-primary">
              View All Skills
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-20 px-4 bg-secondary-50">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Featured Projects</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Check out some of my recent work
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="card h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-primary-800">{project.title}</h3>
                <p className="text-secondary-700 mb-4 flex-grow">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-secondary-700 hover:text-primary-600 transition-colors duration-200"
                  >
                    <FaGithub className="mr-1" /> View on GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary-700 text-white">
        <div className="container mx-auto">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 font-heading">Ready to Work Together?</h2>
            <p className="text-primary-100 mb-8 text-lg">
              I'm currently available for freelance work and full-time positions.
              Let's build something amazing together!
            </p>
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50 px-8 py-3 text-lg">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;