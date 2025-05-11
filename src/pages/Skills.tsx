import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaCogs, FaTools, FaUsers } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import SkillBar from '../components/SkillBar';
import { skillsConfig } from '../../config';

function Skills() {
  const skills = skillsConfig.skills;

  const getIcon = (skill: string) => {
    switch (skill) {
      case 'Programming Languages':
        return <FaCode className="mr-2" />;
      case 'Databases':
        return <FaDatabase className="mr-2" />;
      case 'ETL':
        return <FaCogs className="mr-2" />;
      case 'DevOps':
        return <FaTools className="mr-2" />;  
      case 'Soft Skills':
        return <FaUsers className="mr-2" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto pt-20 md:pt-32 pb-10 md:pb-20 px-4 md:px-10">
        <SectionTitle
          title={skillsConfig.title}
          subtitle="A comprehensive overview of my technical skills and competencies"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              className="card md:last:col-span-2"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 flex items-center text-primary-400">
                {getIcon(skill.name)} {skill.name}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {skill.skills.map((skill, index) => (
                  <SkillBar
                    key={index}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;