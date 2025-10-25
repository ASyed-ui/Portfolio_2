import { RevealOnScroll } from "../RevealOnScroll";

// About section of the site
export const About = () => {

    // Arrays of frontend & backend skills
    const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"];
    const backendSkills = ["Java", "C#", "Python", "Node.js", "GraphQL", "AWS"];

    return (
        <section        
            id="about" // anchor id for navigation
            className="min-h-screen flex items-center justify-center py-20"
        >
            {/* Wraps content with scroll animation */}
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    
                    {/* Section heading + CV link */}
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center flex items-center justify-center gap-4">
                        About Me

                        {/* Link to resume (opens in new tab) */}
                        <a  
                            href="/aadil_resume.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-blue-500/50 text-blue-500 py-2 px-2 text-2xl rounded font-normal transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                        >
                            View CV
                        </a>
                    </h2>

                    {/* Card with short bio + skills */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <p className="text-gray-300 mb-6 text-center">
                            Passionate developer with expertise in building scalable web
                            applications and creating innovative solutions.
                        </p>

                        {/* Grid for frontend & backend skills */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            {/* Frontend skills */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend skills */}
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education & Work Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        
                        {/* Education card */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-4 text-center"> 🏫 Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-4">
                                <li>
                                    <strong> Advanced Diploma in Software Engineering</strong> - Centennial College
                                    (2024-2027)
                                </li>
                                <li>
                                    Relevant Coursework: Data Structures, Web Development, Cloud
                                    Computing
                                </li>
                            </ul>
                        </div>

                        {/* Work Experience card */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-4 text-center"> 💼 Work Experience </h3>
                            <div className="space-y-4 text-gray-300">
                                
                                <div>
                                    <h4 className="font-semibold">Software Engineer at ABC Corp (2020 - Present)</h4>
                                    <p>Developed and maintained microservices for cloud-based applications.</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold">Intern at DEF Startups (2019)</h4>
                                    <p>Assisted in building front-end components and integrating REST APIs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
