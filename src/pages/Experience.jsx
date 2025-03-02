import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import TimelineItem from '../components/TimelineItem';

function Experience() {
  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Software Developer',
      company: 'AllianceBernstein',
      description: 'Developing business solutions using C# .NET and SQL Server for financial customers. Leading ETL development with SSIS and implementing CI/CD pipelines with GitHub Actions.'
    },
    {
      year: '2020 - 2023',
      title: 'Software Developer',
      company: 'Tech Solutions Inc.',
      description: 'Built and maintained enterprise applications using C# .NET and SQL Server. Designed and implemented data integration solutions using SSIS. Collaborated with cross-functional teams to deliver high-quality software products.'
    },
    {
      year: '2019 - 2020',
      title: 'Junior Developer',
      company: 'StartUp Innovations',
      description: 'Assisted in the development of web applications using .NET Core. Worked on database design and implementation using SQL Server. Participated in Agile development processes and daily stand-ups.'
    },
    {
      year: '2018 - 2019',
      title: 'Software Development Intern',
      company: 'Tech Internships Co.',
      description: 'Gained hands-on experience with C# and .NET Framework. Assisted senior developers with coding tasks and bug fixes. Participated in code reviews and learned industry best practices.'
    }
  ];

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey and career highlights"
        />
        
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
        
        {/* Key Achievements */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="section-subtitle text-center">Key Achievements</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h4 className="text-xl font-semibold mb-2 text-primary-700">ETL Pipeline Optimization</h4>
              <p className="text-secondary-700">
                Redesigned and optimized ETL processes using SSIS, resulting in a 40% reduction in processing time 
                and improved data quality for financial reporting systems.
              </p>
            </div>
            
            <div className="card">
              <h4 className="text-xl font-semibold mb-2 text-primary-700">CI/CD Implementation</h4>
              <p className="text-secondary-700">
                Implemented automated CI/CD pipelines using GitHub Actions, reducing deployment time by 60% 
                and minimizing manual errors in the release process.
              </p>
            </div>
            
            <div className="card">
              <h4 className="text-xl font-semibold mb-2 text-primary-700">Database Performance Tuning</h4>
              <p className="text-secondary-700">
                Optimized SQL Server database performance through query tuning and index optimization, 
                resulting in a 50% improvement in application response time.
              </p>
            </div>
            
            <div className="card">
              <h4 className="text-xl font-semibold mb-2 text-primary-700">Team Leadership</h4>
              <p className="text-secondary-700">
                Led a team of 5 developers in delivering a mission-critical financial reporting system, 
                completing the project on time and under budget.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;