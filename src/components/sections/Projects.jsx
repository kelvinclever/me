import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const projects = [
    {
      title: "HR Dashboard",
      description: "Analyzed employee data to provide insights on workforce trends, performance, and retention.",
      technologies: ["Tableau", "SQL", "Python"],
      image: "./public/Project Images/HR_Summary.png",
      category: "Data Analysis",
      link: "https://public.tableau.com/views/SalesPerformance__K/CustomerDashboard",
      featured: true
    },
    {
      title: "Sales Dashboard",
      description: "Visualized sales performance metrics to track revenue, growth, and market trends.",
      technologies: ["Tableau", "Excel", "Power BI"],
      image: "./public/Project Images/Customer Dashboard.png",
      category: "Data Visualization",
      link: "https://public.tableau.com/views/SalesPerformance__K/CustomerDashboard",
      featured: true
    },
    {
      title: "Customer Churn Rate Dashboard",
      description: "Identified key factors contributing to customer churn and retention strategies.",
      technologies: ["Tableau", "Python", "Machine Learning"],
      image: "./public/Project Images/churn Analysis.png",
      category: "Machine Learning",
      link: "https://public.tableau.com/views/SalesPerformance__K/CustomerDashboard",
      featured: true
    },
    {
      title: "COVID-19 Dashboard",
      description: "Provided data-driven insights on pandemic trends, cases, and recovery rates.",
      technologies: ["Tableau", "SQL", "Data Visualization"],
      image: "./public/Project Images/Covid19.png",
      category: "Data Visualization",
      link: "https://public.tableau.com/views/SalesPerformance__K/CustomerDashboard"
    },
    {
      title: "Market Analysis Dashboard",
      description: "Analyzed market trends, customer segments, and product performance.",
      technologies: ["Tableau", "SQL", "Data Visualization"],
      image: "./public/Project Images/market analysis overview.png",
      category: "Data Analysis",
      link: "https://public.tableau.com/views/SalesPerformance__K/CustomerDashboard"
    },
  ];

  // Extract unique categories for filter
  const categories = ["All", ...new Set(projects.map(project => project.category))];
  
  // Filter projects based on selected category
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-400 rounded-full mb-3">
              My Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my data analysis and visualization projects, demonstrating expertise in transforming complex data into actionable insights.
            </p>
          </div>
        </RevealOnScroll>

        {/* Filter Categories */}
        <RevealOnScroll delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <RevealOnScroll key={index} delay={0.1 * index}>
              <div className="group relative bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-blue-500 text-xs text-white px-2 py-1 rounded-full shadow-lg shadow-blue-500/20 font-medium">
                    Featured
                  </div>
                )}
                
                {/* Project Image */}
                <div className="overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-gray-700 text-gray-300 py-1 px-2 rounded-md text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project
                    <svg 
                      className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        {/* View All Projects Button */}
        <RevealOnScroll>
          <div className="mt-12 text-center">
            <a
              href="#all-projects"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all hover:-translate-y-1"
            >
              View All Projects
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};