import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "HR Dashboard",
                description:
                  "Analyzed employee data to provide insights on workforce trends, performance, and retention.",
                technologies: ["Tableau", "SQL", "Python"],
                Image: "./public/Project Images/HR_Summary.png",
              },
              {
                title: "Sales Dashboard",
                description:
                  "Visualized sales performance metrics to track revenue, growth, and market trends.",
                technologies: ["Tableau", "Excel", "Power BI"],
                Image: "./public/Project Images/Customer Dashboard.png",
              },
              {
                title: "Customer Churn Rate Dashboard",
                description:
                  "Identified key factors contributing to customer churn and retention strategies.",
                technologies: ["Tableau", "Python", "Machine Learning"],
                Image: "./public/Project Images/churn Analysis.png",
              },
              {
                title: "COVID-19 Dashboard",
                description:
                  "Provided data-driven insights on pandemic trends, cases, and recovery rates.",
                technologies: ["Tableau", "SQL", "Data Visualization"],
                Image: "./public/Project Images/Covid19.png",
              }, {
                title: "Market Analysis Dashboard",
                description:
                  "Analyzed market trends, customer segments, and product performance.",
                technologies: ["Tableau", "SQL", "Data Visualization"],
                Image: "./public/Project Images/market analysis overview.png",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <img src={project.Image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                  <div className="flex justify-between items-center">
                  <a
                    href="https://public.tableau.com/views/SalesPerformance__K/CustomerDashboard?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
