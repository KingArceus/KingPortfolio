import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import TimelineItem from '../components/TimelineItem';
import { AchievementType, ExperienceType } from '../types';
import { experienceConfig } from '../../config';

function Experience() {
  const experiences: ExperienceType[] = experienceConfig.experiences;
  const achievements: AchievementType[] = experienceConfig.achievements;
  
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto pt-24 pb-20 px-10">
        <SectionTitle
          title={experienceConfig.title}
          subtitle="My professional journey and work experience"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              year={exp.year}
              title={exp.title}
              company={exp.company}
              description={exp.description}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="section-subtitle text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-primary-600 mb-2">{achievement.title} - {achievement.year}</h4>
              <p className="text-gray-400">{achievement.description}</p>
            </div>
          ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;