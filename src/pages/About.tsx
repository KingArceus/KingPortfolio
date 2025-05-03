import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="About Me" 
            subtitle="Get to know more about my background and expertise"
          />
          
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Who I Am</h3>
              <p className="text-gray-400 mb-6">
                I am a passionate software developer with expertise in C# .NET, SQL Server, and ETL development.
                With a strong foundation in database management and data integration, I specialize in creating
                efficient and scalable solutions for complex business problems.
              </p>
              <p className="text-gray-400 mb-6">
                My journey in software development began with a deep interest in solving real-world problems
                through technology. Over the years, I've worked on various projects ranging from data pipelines
                to enterprise applications, always focusing on delivering high-quality, maintainable code.
              </p>
              <p className="text-gray-400">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing my knowledge with the developer community.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">My Expertise</h3>
              <div className="space-y-4">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-white mb-2">Backend Development</h4>
                  <p className="text-gray-400">
                    Extensive experience in C# .NET development, API design, and database optimization.
                  </p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-white mb-2">Data Integration</h4>
                  <p className="text-gray-400">
                    Proficient in ETL development using SSIS, data warehousing, and data pipeline automation.
                  </p>
                </div>
                
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-white mb-2">DevOps</h4>
                  <p className="text-gray-400">
                    Skilled in CI/CD implementation, GitHub Actions, and automated deployment processes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Education & Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-2">Bachelor's Degree in Computer Science</h4>
                <p className="text-gray-400">University Name, Year</p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-2">Microsoft Certified Solutions Developer</h4>
                <p className="text-gray-400">Microsoft, Year</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;