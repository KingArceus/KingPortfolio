import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto pt-24 pb-20 px-10">
        <SectionTitle
          title="Contact Me"
          subtitle="Get in touch for collaborations, job opportunities, or just to say hello"
        />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-8">
              I'm currently available for freelance work and full-time positions.
              If you have a project that needs my expertise or if you're looking to hire,
              feel free to reach out using the contact form or through any of the channels below.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <FaEnvelope className="text-blue-400 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <FaLinkedin className="text-blue-400 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-white">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    linkedin.com/in/yourusername
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <FaGithub className="text-blue-400 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-white">GitHub</h4>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    github.com/yourusername
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3" size={20} />
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-gray-400">New York, NY</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Resume</h4>
              <a
                href="/resume.pdf"
                download
                className="btn bg-blue-600 hover:bg-blue-700 text-white"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;