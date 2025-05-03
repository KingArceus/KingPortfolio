import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
}

function TimelineItem({ year, title, company, description }: TimelineItemProps) {
  return (
    <motion.div 
      className="relative pl-8 pb-8 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-400 -translate-x-1/2" />
      <div className="mb-1 text-blue-400 font-medium">{year}</div>
      <h3 className="text-xl font-semibold mb-1 text-white">{title}</h3>
      <h4 className="text-gray-400 mb-2">{company}</h4>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

export default TimelineItem;