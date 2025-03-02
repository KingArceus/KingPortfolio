import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Portfolio</h3>
            <p className="text-secondary-300">Software Developer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary-300 transition-colors duration-200"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary-300 transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="text-white hover:text-primary-300 transition-colors duration-200"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-secondary-700 text-center text-secondary-400">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;