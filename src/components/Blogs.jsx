export const Blogs = () => {
    const blogData = [
      {
        title: "SQL Cheat Sheet",
        description: "A comprehensive overview of SQL.",
        image: "b1.jpg", // Replace with your actual image URL or path
        link: "https://mdvenukumar.notion.site/SQL-Cheat-Sheet-d7e0433d25a8494884347756a5bb918e?pvs=4", // Replace with your blog post link
      },
      {
        title: "Python with SQL Cheat Sheet",
        description: "Exploring the connection between SQL and Python",
        image: "b2.jpg", // Replace with your actual image URL or path
        link: "https://mdvenukumar.notion.site/Python-MySQL-Cheat-Sheet-4a904b4f75664dd0afa48519d2564178?pvs=4", // Replace with your blog post link
      },
      // Add more blog posts here...
    ];
  
    return (
      <section id="blogs" className="bg-gray-900 py-16">
        <div className="max-w-screen-xl px-6 mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">CheatSheets ✅</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {blogData.map((blog, index) => (
              <div 
                key={index} 
                className="relative rounded-lg overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-[450px] object-cover" // Adjust height as needed
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-md p-4 rounded-t-lg">
                  <h3 className="text-xl font-semibold text-white mb-2">{blog.title}</h3>
                  <p className="text-gray-300">{blog.description}</p>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-center font-semibold text-sm text-white bg-[#e049c7e4] bg-opacity-60 backdrop-blur-md rounded-lg py-2 px-4 hover:bg-[#9b2a7d] transition-colors duration-300"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  