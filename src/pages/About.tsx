import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';

function About() {
  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <SectionTitle 
          title="About Me" 
          subtitle="Learn more about my background, education, and professional journey"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/profile.jpg" 
              alt="Profile" 
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="section-subtitle">Who I Am</h3>
            <p className="text-secondary-700 mb-4">
              I'm a passionate Software Developer with expertise in C# .NET, SQL Server, ETL (SSIS), and GitHub Actions. 
              With a strong foundation in software development principles and a keen eye for detail, 
              I specialize in building robust, scalable applications that solve complex business problems.
            </p>
            <p className="text-secondary-700 mb-6">
              My approach combines technical excellence with a deep understanding of business needs, 
              allowing me to deliver solutions that not only meet technical requirements but also drive business value.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/resume.pdf" 
                download 
                className="btn btn-primary flex items-center"
              >
                <FaDownload className="mr-2" /> Download Resume
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Education Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="section-subtitle flex items-center">
            <FaGraduationCap className="mr-2 text-primary-600" /> Education
          </h3>
          
          <div className="card mb-6">
            <h4 className="text-xl font-semibold mb-1">Bachelor of Science in Computer Science</h4>
            <p className="text-primary-600 mb-2">University Name, 2015-2019</p>
            <p className="text-secondary-700">
              Graduated with honors. Coursework included Advanced Algorithms, Database Systems, 
              Software Engineering, and Web Development.
            </p>
          </div>
          
          <div className="card">
            <h4 className="text-xl font-semibold mb-1">Microsoft Certified: Azure Developer Associate</h4>
            <p className="text-primary-600 mb-2">Microsoft, 2020</p>
            <p className="text-secondary-700">
              Certification demonstrating proficiency in designing, building, testing, and maintaining 
              cloud applications and services on Microsoft Azure.
            </p>
          </div>
        </motion.div>
        
        {/* Professional Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="section-subtitle flex items-center">
            <FaLaptopCode className="mr-2 text-primary-600" /> Professional Philosophy
          </h3>
          
          <div className="card">
            <p className="text-secondary-700 mb-4">
              I believe that great software is not just about writing code, but about solving real problems 
              for real people. My development philosophy centers around these key principles:
            </p>
            
            <ul className="list-disc pl-6 text-secondary-700 space-y-2">
              <li>
                <span className="font-semibold">User-Centered Design:</span> Always keeping the end-user in mind when designing solutions.
              </li>
              <li>
                <span className="font-semibold">Clean, Maintainable Code:</span> Writing code that is not only functional but also readable and maintainable.
              </li>
              <li>
                <span className="font-semibold">Continuous Learning:</span> Staying updated with the latest technologies and best practices.
              </li>
              <li>
                <span className="font-semibold">Effective Communication:</span> Clearly communicating technical concepts to non-technical stakeholders.
              </li>
              <li>
                <span className="font-semibold">Problem-Solving:</span> Approaching challenges with a solution-oriented mindset.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;