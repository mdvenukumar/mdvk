export const Freefire = () => {
  return (
    <section className="bg-gray-900 dark:bg-white flex items-center justify-center min-h-screen pt-0 pb-0">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl font-bold text-gray-200 dark:text-gray-900 mb-4">
          I do Beyond Coding 😜
        </h2>
        <div className="bg-gray-800 dark:bg-gray-100 rounded-lg shadow-2xl overflow-hidden">
          <div className="flex flex-col"> 
            {/* Content Section */}
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#f4f4f4] dark:text-gray-900 mb-2 shadow-md">
                  My Style of Resting
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-700 mb-4">
                  When keyboards rest, my battles begin. Dive into my world of strategy and action in Free Fire.
                </p>

                {/* Icon stack */}
                <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12 mb-8 justify-between">
                  <div className="flex-col items-center hidden lg:flex">
                    <span className="text-4xl text-gray-200 dark:text-gray-800">40000+</span>
                    <span className="text-lg sm:text-xl font-bold text-gray-400 dark:text-gray-600 mt-2">Games played</span>
                  </div>
                  <div className="flex-col items-center hidden lg:flex">
                    <span className="text-4xl text-gray-200 dark:text-gray-800">10000+</span>
                    <span className="text-lg sm:text-xl font-bold text-gray-400 dark:text-gray-600 mt-2">Help Ups</span>
                  </div>
                  <div className="flex-col items-center hidden lg:flex">
                    <span className="text-4xl text-gray-200 dark:text-gray-800">5 Years</span>
                    <span className="text-lg sm:text-xl font-bold text-gray-400 dark:text-gray-600 mt-2">Experience</span>
                  </div>
                  <div className="flex-col items-center hidden lg:flex">
                    <span className="text-4xl text-gray-200 dark:text-gray-800">38.06%</span>
                    <span className="text-lg sm:text-xl font-bold text-gray-400 dark:text-gray-600 mt-2">HeadShot Rate</span>
                  </div>
                  <div className="flex-col items-center hidden lg:flex">
                    <span className="text-4xl text-gray-200 dark:text-gray-800">FreeStyle</span>
                    <span className="text-lg sm:text-xl font-bold text-gray-400 dark:text-gray-600 mt-2">Play Type</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
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
