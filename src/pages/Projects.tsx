import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { ProjectType } from '../types';

function Projects() {
  const projects: ProjectType[] = [
    {
      title: 'Financial Data ETL Pipeline',
      description: 'Developed a comprehensive ETL pipeline using SSIS for processing financial data from multiple sources. The solution includes data validation, transformation, and loading into a data warehouse for reporting.',
      technologies: ['C#', 'SSIS', 'SQL Server', 'Data Warehousing'],
      githubLink: 'https://github.com/yourusername/financial-etl',
      demoLink: null
    },
    {
      title: 'Automated CI/CD Workflow',
      description: 'Implemented a CI/CD pipeline using GitHub Actions for automated testing, building, and deployment of .NET applications. The workflow includes code quality checks, unit testing, and automated deployment to Azure.',
      technologies: ['GitHub Actions', 'CI/CD', 'Azure', '.NET'],
      githubLink: 'https://github.com/yourusername/cicd-workflow',
      demoLink: null
    },
    {
      title: 'Financial Reporting Dashboard',
      description: 'Built a real-time financial dashboard for monitoring key business metrics. The application features interactive charts, data filtering, and export capabilities.',
      technologies: ['C#', 'SQL Server', 'React', 'Chart.js'],
      githubLink: 'https://github.com/yourusername/financial-dashboard',
      demoLink: 'https://demo-financial-dashboard.example.com'
    },
    {
      title: 'Inventory Management System',
      description: 'Developed a comprehensive inventory management system for tracking product inventory, orders, and sales. The system includes barcode scanning, automated reordering, and reporting features.',
      technologies: ['C#', '.NET Core', 'SQL Server', 'Entity Framework'],
      githubLink: 'https://github.com/yourusername/inventory-system',
      demoLink: null
    },
    {
      title: 'Data Quality Monitoring Tool',
      description: 'Created a tool for monitoring and reporting on data quality issues in enterprise databases. The solution includes automated data profiling, anomaly detection, and alerting capabilities.',
      technologies: ['C#', 'SQL Server', 'SSIS', 'Power BI'],
      githubLink: 'https://github.com/yourusername/data-quality-tool',
      demoLink: null
    },
    {
      title: 'Customer Relationship Management (CRM)',
      description: 'Built a custom CRM system for managing customer interactions, sales pipeline, and support tickets. The application features a responsive UI, email integration, and reporting dashboard.',
      technologies: ['C#', 'ASP.NET MVC', 'SQL Server', 'JavaScript'],
      githubLink: 'https://github.com/yourusername/crm-system',
      demoLink: 'https://demo-crm.example.com'
    }
  ];

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <SectionTitle 
          title="Projects" 
          subtitle="A showcase of my recent work and technical projects"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;