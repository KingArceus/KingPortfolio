import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading">
                Hi, I'm <span className="text-blue-400">Your Name</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                Software Developer
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-lg">
                Specialized in C# .NET, SQL Server, ETL (SSIS), and GitHub Actions. 
                Building robust software solutions for complex business problems.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn bg-blue-600 hover:bg-blue-700 text-white flex items-center">
                  Contact Me <FaArrowRight className="ml-2" />
                </Link>
                <Link to="/projects" className="btn bg-gray-800 hover:bg-gray-700 text-white">
                  View Projects
                </Link>
              </div>
              
              <div className="flex mt-8 space-x-4">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <FaGithub size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  <FaLinkedin size={24} />
                </a>
                <a 
                  href="mailto:your.email@example.com" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
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
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="relative z-10 w-64 h-64 object-cover rounded-full border-4 border-gray-800 shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;