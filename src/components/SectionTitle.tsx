import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div 
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="text-secondary-600 max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}

export default SectionTitle;