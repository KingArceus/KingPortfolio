import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaCogs, FaTools, FaUsers } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import SkillBar from '../components/SkillBar';
import { SkillType } from '../types';

function Skills() {
  const programmingSkills: SkillType[] = [
    { name: 'C# .NET', level: 95 },
    { name: 'SQL', level: 90 },
    { name: 'JavaScript', level: 75 },
    { name: 'HTML/CSS', level: 80 },
    { name: 'Python', level: 65 }
  ];
  
  const databaseSkills: SkillType[] = [
    { name: 'SQL Server', level: 95 },
    { name: 'Database Design', level: 90 },
    { name: 'Query Optimization', level: 85 },
    { name: 'Data Modeling', level: 80 },
    { name: 'NoSQL (MongoDB)', level: 60 }
  ];
  
  const etlSkills: SkillType[] = [
    { name: 'SSIS', level: 90 },
    { name: 'Data Warehousing', level: 85 },
    { name: 'ETL Design Patterns', level: 80 },
    { name: 'Data Integration', level: 85 },
    { name: 'Data Quality', level: 75 }
  ];
  
  const devOpsSkills: SkillType[] = [
    { name: 'GitHub Actions', level: 90 },
    { name: 'CI/CD Pipelines', level: 85 },
    { name: 'Azure DevOps', level: 80 },
    { name: 'Docker', level: 70 },
    { name: 'Kubernetes', level: 60 }
  ];
  
  const softSkills: SkillType[] = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Team Collaboration', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Project Management', level: 80 },
    { name: 'Agile Methodologies', level: 85 }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto pt-32 pb-20 px-10">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="A comprehensive overview of my technical skills and competencies"
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center text-primary-400">
              <FaCode className="mr-2" /> Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {programmingSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  level={skill.level} 
                />
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center text-primary-400">
              <FaDatabase className="mr-2" /> Database Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {databaseSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  level={skill.level} 
                />
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center text-primary-400">
              <FaCogs className="mr-2" /> ETL & Data Processing
            </h3>
            <div className="flex flex-wrap gap-2">
              {etlSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  level={skill.level} 
                />
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center text-primary-400">
              <FaTools className="mr-2" /> DevOps & CI/CD
            </h3>
            <div className="flex flex-wrap gap-2">
              {devOpsSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  level={skill.level} 
                />
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="card md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center text-primary-400">
              <FaUsers className="mr-2" /> Soft Skills & Collaboration
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  level={skill.level} 
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Skills;