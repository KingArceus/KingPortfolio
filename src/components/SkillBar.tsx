import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
  color?: string;
}

function SkillBar({ name, level, color = 'blue' }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-300">{name}</span>
        <span className="text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className={`h-full bg-${color}-400 rounded-full`}
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