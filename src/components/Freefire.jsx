export const Freefire = () => {
    return (
      <section className="bg-gray-900 py-12 px-4 sm:py-16 sm:px-6 lg:py-24 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl w-full">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          I do Beyond Coding 😜
        </h2>
          <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
            <div className="flex flex-col"> 
              {/* Content Section */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <h1 className="text-4xl sm:text-5xl font-bold text-gray-400 mb-2">
                    <span className="text-[#f4f4f4e4]">My Style of Resting</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-300 mb-4">
                  When keyboards rest, my battles begin. Dive into my world of strategy and action in Free Fire.
                  </p>
  
                  {/* Icon stack: column on smaller screens, row on larger screens */}
                  <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12 mb-8 justify-between">
                    <div className="flex-col items-center hidden lg:flex">
                      <span className="text-4xl text-gray-400">40000+</span>
                      <span className="text-lg sm:text-xl font-bold text-gray-600 mt-2 justify-start">Games played</span>
                    </div>

                    <div className="flex-col items-center hidden lg:flex">
                      <span className="text-4xl text-gray-400">10000+</span>
                      <span className="text-lg sm:text-xl font-bold text-gray-600 mt-2">Help Ups</span>
                    </div>

                    <div className="flex-col items-center hidden lg:flex">
                      <span className="text-4xl text-gray-400">5 Years</span>
                      <span className="text-lg sm:text-xl font-bold text-gray-600 mt-2">Experience</span>
                    </div>

                    <div className="flex-col items-center hidden lg:flex">
                      <span className="text-4xl text-gray-400">38.06%</span>
                      <span className="text-lg sm:text-xl font-bold text-gray-600 mt-2">HeadShot Rate</span>
                    </div>

                    <div className="flex-col items-center hidden lg:flex">
                      <span className="text-4xl text-gray-400">FreeStyle</span>
                      <span className="text-lg sm:text-xl font-bold text-gray-600 mt-2">Play Type</span>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Image Section (placed below the content) */}
              <div className="flex items-center justify-center p-2 lg:p-4">
                <img 
                  src="f.jpg" // Replace with your actual Free Fire image
                  alt="Free Fire Battlefield" 
                  className="w-full h-auto max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  