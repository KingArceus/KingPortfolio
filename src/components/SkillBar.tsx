import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
}

function SkillBar({ name, level }: SkillBarProps) {
  const getProficiencyLabel = (level: number): string => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  const getProficiencyColor = (level: number): string => {
    if (level >= 90) return 'border-emerald-600 text-emerald-400';
    if (level >= 80) return 'border-blue-600 text-blue-400';
    if (level >= 70) return 'border-purple-600 text-purple-400';
    return 'border-orange-600 text-orange-400';
  };

  return (
    <motion.div 
      className={`skill-tag bg-primary-900/50 border ${getProficiencyColor(level)} flex items-center`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <span>{name}</span>
      <span className="ml-2 px-1.5 py-0.5 text-xs rounded-full bg-primary-800/50">
        {getProficiencyLabel(level)}
      </span>
    </motion.div>
  );
}

export default SkillBar;