import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  color?: string;
}

function SkillBar({ name, level, color = 'primary' }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-secondary-700">{name}</span>
        <span className="text-secondary-500">{level}%</span>
      </div>
      <div className="h-2 bg-secondary-200 rounded-full overflow-hidden">
        <motion.div 
          className={`h-full bg-${color}-600 rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default SkillBar;