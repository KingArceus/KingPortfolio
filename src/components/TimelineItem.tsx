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
      className="timeline-item"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="timeline-dot" />
      <div className="mb-1 text-primary-600 font-medium">{year}</div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <h4 className="text-secondary-600 mb-2">{company}</h4>
      <p className="text-secondary-700">{description}</p>
    </motion.div>
  );
}

export default TimelineItem;