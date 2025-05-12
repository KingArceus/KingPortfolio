import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { aboutConfig } from '../../config';
import { FaDownload, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto pt-24 pb-20 px-10">
        <SectionTitle
          title={aboutConfig.title}
          subtitle={aboutConfig.description}
        />

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="section-subtitle">Who I Am</h3>
            {aboutConfig.introduction.map((paragraph, index) => (
              <p
                key={index}
                className={'text-gray-400 mb-6'}
              >
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-4">
              <a
                href="./resume.pdf"
                download
                className="btn btn-primary flex items-center"
              >
                <FaDownload className="mr-2" /> Download Resume
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center"
          >
            <img
              src="./squirtle.png"
              alt="Profile-sm"
              className="z-10 w-72 h-72 object-cover rounded-full border-4 border-white shadow-xl mx-auto"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="section-subtitle flex items-center">
            <FaGraduationCap className="mr-2 text-primary-500" /> Education & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {aboutConfig.education.map((item, index) => (
              <div className="bg-gray-800 p-6 rounded-lg" key={index}>
                <h4 className="text-xl font-semibold text-gray-100 mb-1">{item.title}</h4>
                <p className="text-primary-400">
                  {item.institution}
                </p>
                <p className="text-primary-600">
                  {item.year}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-16">
          <h3 className="section-subtitle flex items-center">
            <FaLaptopCode className="mr-2 text-primary-500" /> My Expertise
          </h3>
          <div className="space-y-4">
            {aboutConfig.expertise.map((item, index) => (
              <div className="bg-gray-800 p-6 rounded-lg" key={index}>
                <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;