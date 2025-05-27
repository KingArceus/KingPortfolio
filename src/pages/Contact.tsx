import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { contactConfig } from '../../config';

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
            <h3 className="section-subtitle">Let's Connect</h3>
            <p className="text-gray-400 mb-8">
              {contactConfig.description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <FaEnvelope className="text-primary-600 my-auto mr-4" size={28} />
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="text-primary-600 hover:text-primary-500 transition-colors duration-200"
                  >
                    {contactConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <FaLinkedin className="text-primary-600 my-auto mr-4" size={28} />
                <div>
                  <h4 className="font-semibold text-white">LinkedIn</h4>
                  <a
                    href={contactConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-500 transition-colors duration-200"
                  >
                    {contactConfig.social.linkedin}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <FaGithub className="text-primary-600 my-auto mr-4" size={28} />
                <div>
                  <h4 className="font-semibold text-white">GitHub</h4>
                  <a
                    href={contactConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-500 transition-colors duration-200"
                  >
                    {contactConfig.social.github}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary-600 my-auto mr-4" size={28} />
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-gray-400">{contactConfig.location}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="./CV_Thanh-Khang Pham.pdf"
                download
                className="btn btn-primary flex items-center"
              >
                <FaDownload className="mr-2" /> Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="section-subtitle">Send Me a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;