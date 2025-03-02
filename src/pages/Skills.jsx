import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaCogs, FaTools, FaUsers } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import SkillBar from '../components/SkillBar';

function Skills() {
  const programmingSkills = [
    { name: 'C# .NET', level: 95 },
    { name: 'SQL', level: 90 },
    { name: 'JavaScript', level: 75 },
    { name: 'HTML/CSS', level: 80 },
    { name: 'Python', level: 65 }
  ];
  
  const databaseSkills = [
    { name: 'SQL Server', level: 95 },
    { name: 'Database Design', level: 90 },
    { name: 'Query Optimization', level: 85 },
    { name: 'Data Modeling', level: 80 },
    { name: 'NoSQL (MongoDB)', level: 60 }
  ];
  
  const etlSkills = [
    { name: 'SSIS', level: 90 },
    { name: 'Data Warehousing', level: 85 },
    { name: 'ETL Design Patterns', level: 80 },
    { name: 'Data Integration', level: 85 },
    { name: 'Data Quality', level: 75 }
  ];
  
  const devOpsSkills = [
    { name: 'GitHub Actions', level: 90 },
    { name: 'CI/CD Pipelines', level: 85 },
    { name: 'Azure DevOps', level: 80 },
    { name: 'Docker', level: 70 },
    { name: 'Kubernetes', level: 60 }
  ];
  
  const softSkills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Team Collaboration', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Project Management', level: 80 },
    { name: 'Agile Methodologies', level: 85 }
  ];

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="A comprehensive overview of my technical skills and competencies"
        />
        
        {/* Programming Skills */}
        <div className="mb-16">
          <motion.h3 
            className="section-subtitle flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaCode className="mr-2 text-primary-600" /> Programming Languages
          </motion.h3>
          
          <div className="card">
            <div className="max-w-3xl mx-auto">
              {programmingSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  level={skill.level} 
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Database Skills */}
        <div className="mb-16">
          <motion.h3 
            className="section-subtitle flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaDatabase className="mr-2 text-primary-600" /> Database Technologies
          </motion.h3>
          
          <div className="card">
            <div className="max-w-3xl mx-auto">
              {databaseSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  level={skill.level} 
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* ETL Skills */}
        <div className="mb-16">
          <motion.h3 
            className="section-subtitle flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaCogs className="mr-2 text-primary-600" /> ETL & Data Processing
          </motion.h3>
          
          <div className="card">
            <div className="max-w-3xl mx-auto">
              {etlSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  level={skill.level} 
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* DevOps Skills */}
        <div className="mb-16">
          <motion.h3 
            className="section-subtitle flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaTools className="mr-2 text-primary-600" /> DevOps & CI/CD
          </motion.h3>
          
          <div className="card">
            <div className="max-w-3xl mx-auto">
              {devOpsSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  level={skill.level} 
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Soft Skills */}
        <div>
          <motion.h3 
            className="section-subtitle flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaUsers className="mr-2 text-primary-600" /> Soft Skills & Collaboration
          </motion.h3>
          
          <div className="card">
            <div className="max-w-3xl mx-auto">
              {softSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  level={skill.level} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;