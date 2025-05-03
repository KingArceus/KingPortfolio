import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import TimelineItem from '../components/TimelineItem';
import { ExperienceType } from '../types';

function Experience() {
  const experiences: ExperienceType[] = [
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
    <div className="min-h-screen bg-gray-900">
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <SectionTitle 
            title="Experience" 
            subtitle="My professional journey and work experience"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-700"></div>
              
              <TimelineItem
                year="2020 - Present"
                title="Senior Software Developer"
                company="Tech Solutions Inc."
                description="Leading the development of enterprise-level applications using C# .NET and SQL Server. Implementing CI/CD pipelines and mentoring junior developers."
              />
              
              <TimelineItem
                year="2018 - 2020"
                title="Software Developer"
                company="Data Systems Ltd."
                description="Developed and maintained ETL processes using SSIS, optimized database performance, and implemented automated testing solutions."
              />
              
              <TimelineItem
                year="2016 - 2018"
                title="Junior Developer"
                company="WebTech Solutions"
                description="Worked on web applications using C# .NET, implemented RESTful APIs, and contributed to database design and optimization."
              />
            </div>
          </motion.div>
          
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-2">Performance Optimization</h4>
                <p className="text-gray-400">
                  Improved database query performance by 60% through optimization and indexing strategies.
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-2">Automation Implementation</h4>
                <p className="text-gray-400">
                  Automated deployment processes, reducing deployment time by 80% and eliminating manual errors.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Experience;