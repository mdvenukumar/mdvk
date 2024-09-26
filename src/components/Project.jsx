
export const Project = () => {
  const projectData = [
    {
      title: "Veddy AI",
      description: "An innovative solution that helps students optimize their resumes and ace their interviews.",
      image: "veddyai.jpg", // Add your actual image URL or path here
      link: "https://veddyai.vercel.app/", // Replace with your project link
    },
    {
      title: "DotLink",
      description: "A comprehensive RESTful API designed to handle user Recharges, Payments and History.",
      image: "recharge.jpg",
      link: "https://github.com/mdvenukumar/recharge",
    },
    {
      title: "Black Rabbit AI",
      description: "Strangled by research? BLACK RABBIT hacks the web, feeding your creativity with AI-powered insight.",
      image: "re.jpg",
      link: "https://blackrabbit.streamlit.app",
    },
    {
        title: "Connect X",
        description: "An automated Gen AI Twitter bot that posts tweets automatically based on the given topic.",
        image: "x.jpg",
        link: "https://connectxbyvk.onrender.com/",
      },
      {
        title: "Leo AI - Voice Assistant",
        description: "An interactive voice assistant that can chat with you and respond to your queries.",
        image: "leo.jpg",
        link: "https://myleo-ai.onrender.com/",
      },
      {
        title: "FarmFlow AI",
        description: "Helps farmers determine the most suitable plants for their fields by analyzing soil parameters.",
        image: "farm.jpg",
        link: "https://farmflow-ai.onrender.com"
      }
    // Add more projects here...
  ];

  return (
    <section id="projects" className="bg-gray-900 py-16 px-6">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <div 
              key={index} 
              className="relative rounded-lg overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-[450px] object-cover" // Increased height for larger images
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-md p-4 rounded-t-lg">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-center font-semibold text-sm text-white bg-[#e049c7e4] bg-opacity-60 backdrop-blur-md rounded-lg py-2 px-4 hover:bg-[#9b2a7d] transition-colors duration-300"
                >
                  Demo Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};