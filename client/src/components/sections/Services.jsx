import { RevealOnScroll } from "../RevealOnScroll";

export const Services = () => {

    // Array of services offered with title, description, and tech stack
    const services = [
        {
            title: "Web Development",
            description: "Building responsive, scalable web applications with modern frameworks.",
            tech: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"]
        },
        {
            title: "Mobile App Development",
            description: "Creating cross-platform mobile apps for Android and iOS.",
            tech: ["React Native", "Flutter", "Swift", "Kotlin"]
        },
        {
            title: "Backend & APIs",
            description: "Designing secure and efficient backend systems and APIs.",
            tech: ["Node.js", "Express", "Java", "C#", "GraphQL", "SQL"]
        },
        {
            title: "Cloud & DevOps",
            description: "Implementing cloud infrastructure, CI/CD pipelines, and automated deployments.",
            tech: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD"]
        }
    ];

    return (
        <section 
            id="services" // anchor id for navigation
            className="min-h-screen flex items-center justify-center py-20"
        >
            {/* Animate section when it scrolls into view */}
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    
                    {/* Section heading */}
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Services
                    </h2>

                    {/* Grid layout for service cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                            >
                                {/* Service title */}
                                <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>

                                {/* Service description */}
                                <p className="text-gray-400 text-center mb-4">{service.description}</p>

                                {/* Technologies used for this service */}
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {service.tech.map((item, key) => (
                                        <span
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
