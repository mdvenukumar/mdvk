import { useState } from "react";

export const AboutMe = () => {
  const [tooltip, setTooltip] = useState("");

  const handleMouseEnter = (skill) => {
    setTooltip(skill);
  };

  const handleMouseLeave = () => {
    setTooltip("");
  };

  return (
    <section id="aboutme" className="bg-gray-900 py-16 px-6">
      <div className="max-w-screen-xl mx-auto">

        {/* Personal Intro */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto lg:mx-0">
          Hi! I’m Venu Kumar, a tech enthusiast with a passion for innovation. I love exploring new ideas and tackling challenges that inspire creativity. In my free time, I enjoy keeping up with tech trends, collaborating with others, and sharing knowledge. Let’s connect and discover what we can create together!</p>
        </div>

        {/* Work Experience */}
        <div className="mb-12">
        <h3 className="text-3xl font-semibold text-white mb-8 text-center lg:text-left">
            Work Experience
        </h3>

        {/* Experience List */}
        <div className="space-y-8">
            {/* Experience 1 */}
            <div className="flex flex-col lg:flex-row items-start bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:shadow-xl duration-300">
            <div className="px-3 py-3 lg:w-1/4 flex justify-start items-start lg:items-start">
                <img
                src="https://veddyai.vercel.app/static/aroma.png" // Replace with actual company logo
                alt="Veddy AI"
                className="w-24 h-24 mb-4 rounded-full"
                />
            </div>
            <div className="lg:w-3/4">
                <h4 className="text-xl font-medium text-white">
                Veddy AI
                </h4>
                <p className="text-md text-gray-400 mb-3">
                <span className="font-bold">Founder & CEO</span> <br /> 2024 - Present
                </p>
                <p className="text-gray-300 leading-relaxed">
                Lead architect in developing AI-driven tools for optimizing professional growth and skill development. Enhanced operational efficiency and collaborated with a small, dynamic team.
                </p>
            </div>
            </div>

            {/* Experience 2 */}
            <div className="flex flex-col lg:flex-row items-start bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:shadow-xl duration-300">
            <div className="px-3 py-3 lg:w-1/4 flex justify-start items-start lg:items-start">
                <img
                src="napkin.png" // Replace with actual company logo
                alt="Freelancer"
                className="w-24 h-24 mb-4 rounded-full"
                />
            </div>
            <div className="lg:w-3/4">
                <h4 className="text-xl font-medium text-white">
                Napkin AI
                </h4>
                <p className="text-md text-gray-400 mb-3">
                UX Research Intern<br /> Jan 2024 - Apr 2024
                </p>
                <p className="text-gray-300 leading-relaxed">
                Led user research, conducted data analysis, and enhanced the overall user experience for Napkin AI, driving product improvements and ensuring alignment with user needs.
                </p>
            </div>
            </div>
            {/* Experience 3 */}
            <div className="flex flex-col lg:flex-row items-start bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:shadow-xl duration-300">
            <div className="px-3 py-3 lg:w-1/4 flex justify-start items-start lg:items-start">
                <img
                src="data:image/png;base64,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" // Replace with actual company logo
                alt="Fluentgrid"
                className="w-24 h-24 mb-4 rounded-full"
                />
            </div>
            <div className="lg:w-3/4">
                <h4 className="text-xl font-medium text-white">
                Fluentgrid
                </h4>
                <p className="text-md text-gray-400 mb-3">
                <span className="font-bold">Project Intern</span> <br /> Nov 2023 - Jan 2024
                </p>
                <p className="text-gray-300 leading-relaxed">
                Collaborated with a cross-functional team on a project to develop a real-time monitoring system for utility operations, honing my problem-solving skills and learning about the energy industry.
                </p>
            </div>
            </div>
            {/* Experience 4 */}
            <div className="flex flex-col lg:flex-row items-start bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:shadow-xl duration-300">
            <div className="px-3 py-3 lg:w-1/4 flex justify-start items-start lg:items-start">
                <img
                src="data:image/jpeg;base64,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" // Replace with actual company logo
                alt="IIT Madras Build Club"
                className="w-24 h-24 mb-4 rounded-full"
                />
            </div>
            <div className="lg:w-3/4">
                <h4 className="text-xl font-medium text-white">
                IIT Madras Research Park - Build Club
                </h4>
                <p className="text-md text-gray-400 mb-3">
                <span className="font-bold">Student Coordinator</span> <br /> Jun 2022 - Dec 2022
                </p>
                <p className="text-gray-300 leading-relaxed">
                Guided students in project and entrepreneurial development, while successfully organizing hackathons and tech events to enhance engagement and drive technological innovation.                </p>
            </div>
            </div>
            
        </div>
        </div>

        

        {/* Skills Section */}
        <h3 id="skills" className="text-3xl font-semibold text-white mb-8 text-center lg:text-left">
          Skills
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {[
            { src: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png", name: "Python" },
            { src: "https://cdn-icons-png.flaticon.com/128/226/226777.png", name: "Java" },
            { src: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png", name: "JavaScript" },
            { src: "https://cdn-icons-png.flaticon.com/128/10826/10826338.png", name: "React" },
            { src: "https://cdn-icons-png.flaticon.com/128/11230/11230683.png", name: "Rest API" },
            { src: "https://spring.io/img/logos/spring-initializr.svg", name: "Spring" },
            { src: "data:image/png;base64,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", name: "Streamlit" },
            { src: "https://cdn-icons-png.flaticon.com/128/8752/8752436.png", name: "Relational DB" },
            { src: "https://cdn4.iconfinder.com/data/icons/redis-2/1451/Untitled-2-512.png", name: "Redis" },
            { src: "https://cdn.iconscout.com/icon/free/png-512/free-git-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225996.png?f=webp&w=256", name: "Git" },
            { src: "https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/github-64.png", name: "GitHub" },
            { src: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_docker-64.png", name: "Docker" },
            { src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png", name: "Gemini AI" },
            { src: "groq.png", name: "Groq AI" },
            { src: "https://cdn.prod.website-files.com/66cf2bfc3ed15b02da0ca770/66d07240057721394308addd_Logo%20(1).svg", name: "Crew AI" },
            { src: "https://www.gstatic.com/devrel-devsite/prod/vdf5af65c45d9e2fdd493c581ff01cb1d11a21b4420a9fcc957400a26863da9d2/firebase/images/lockup.svg", name: "Firebase" },
          ].map((skill, index) => (
            <div key={index} className="relative p-2 bg-gray-800 rounded-lg shadow-sm flex items-center justify-center transition-transform transform hover:scale-105 duration-300">
              <img
                src={skill.src}
                alt={skill.name}
                className="w-16 h-16" // Smaller size for a cuter look
                onMouseEnter={() => handleMouseEnter(skill.name)}
                onMouseLeave={handleMouseLeave}
              />
              {tooltip === skill.name && (
                <div className="absolute bottom-full mb-2 w-max p-1 text-xs text-white bg-gray-900 rounded-md">
                  {skill.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
