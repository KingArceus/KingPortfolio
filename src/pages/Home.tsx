import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="min-h-screen container mx-auto pl-10 flex justify-between items-center">
                    <motion.div
                        className="w-3/5 mb-10 md:mb-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-heading">
                            Hi, I'm <span className="text-blue-400">Khang Thanh Pham</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                            Software Developer
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-lg">
                            Specialized in C# .NET, SQL Server, ETL (SSIS), and GitHub Actions.
                            Building robust software solutions for complex business problems.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link to="/contact" className="btn bg-blue-600 hover:bg-blue-700 text-white flex items-center">
                                    Contact Me <FaArrowRight className="ml-2" />
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link to="/projects" className="btn bg-gray-700 hover:bg-gray-600 text-white flex items-center">
                                    View Projects
                                </Link>
                            </motion.div>
                        </div>

                        <motion.div
                            className="flex mt-8 space-x-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <motion.a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaGithub size={24} />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaLinkedin size={24} />
                            </motion.a>
                            <motion.a
                                href="mailto:your.email@example.com"
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaEnvelope size={24} />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="min-h-screen w-2/5 flex justify-end relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <motion.div
                            className="absolute right-0 h-full "
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <img
                                src="/Demo.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover right-0 overflow-hidden"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;