import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    // Array of featured projects with details
    const projects = [
        {
            title: "Cloud Platform",
            description: "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
            image: "images/projects/cloudPlatform.png",
            tech: ["React", "Node.js", "AWS", "Docker"],
            link: "#"
        },
        {
            title: "E-Commerce Web App",
            description: "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
            image: "images/projects/ecommerceApp.png",
            tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
            link: "#"
        },
        {
            title: "Real-Time Chat App",
            description: "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
            image: "images/projects/chatApp.png",
            tech: ["Socket.IO", "Express", "React", "Redis"],
            link: "#"
        }
    ];

    return (
        <section 
            id="projects" // anchor id for navigation
            className="min-h-screen flex items-center justify-center py-20"
        >
            {/* Animate section when scrolled into view */}
            <RevealOnScroll>
                <div className="max-w-[85rem] mx-auto px-4">
                    
                    {/* Section heading */}
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>

                    {/* Grid layout for projects */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                            >
                                {/* Project image */}
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-55 object-cover rounded-lg mb-4"
                                />

                                {/* Project title */}
                                <h3 className="text-xl font-bold mb-2 text-center">{project.title}</h3>

                                {/* Project description */}
                                <p className="text-gray-400 mb-4">{project.description}</p>

                                {/* List of technologies used */}
                                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                    {project.tech.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Link to view project */}
                                <div className="flex justify-center">
                                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                        View Project →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
