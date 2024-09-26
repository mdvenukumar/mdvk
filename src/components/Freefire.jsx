export const Freefire = () => {
  return (
    <section className="bg-gray-900 flex items-center justify-center min-h-screen p-4">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 text-center transition-transform transform hover:scale-105">
          I do Beyond Coding 😜
        </h2>
        <div className="bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transition-shadow hover:shadow-3xl">
          <div className="flex flex-col">
            {/* Content Section */}
            <div className="p-8 flex flex-col">
              <p className="text-lg sm:text-xl text-gray-300 mb-6 text-center">
                When keyboards rest, my battles begin. Dive into my world of strategy and action in Free Fire.
              </p>

              {/* Icon stack using grid for "4 in a row" */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
                {[
                  { value: "40000+", label: "Games played" },
                  { value: "10000+", label: "Help Ups" },
                  { value: "5 Years", label: "Experience" },
                  { value: "38.06%", label: "HeadShot Rate" },
                ].map((stat, index) => (
                  <div className="flex flex-col items-center transition-transform transform hover:scale-105" key={index}>
                    <span className="text-4xl text-gray-200">{stat.value}</span>
                    <span className="text-sm sm:text-lg font-semibold text-gray-400 mt-2">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="flex items-center justify-center p-4">
              <img 
                src="f.jpg" // Replace with your actual Free Fire image
                alt="Free Fire Battlefield" 
                className="w-full h-auto object-cover rounded-b-3xl shadow-lg transition-transform transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
