import slowlaxImage from "../assets/slowlax.png"; // Profile image

const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-b from-[#fef3c7] to-[#fde68a] dark:from-[#1f1f1f] dark:to-[#292929] py-12 px-4">
      {/* Centered Card */}
      <div className="bg-white dark:bg-gray-900 shadow-2xl dark:shadow-lg dark:shadow-gray-800 rounded-2xl p-10 max-w-5xl w-full mx-auto min-h-[300px]">
        {/* Profile Image, Name, and Quote Section */}
        <div className="flex items-center mb-6">
          {/* Profile Image */}
          <div className="w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center p-2 shadow-md dark:shadow-gray-700">
            <img
              src={slowlaxImage} 
              alt="Profile"
              className="w-28 h-28 rounded-full"
            />
          </div>
          {/* Name and Quote */}
          <div className="ml-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-200">
              Shivakamalesh
            </h1>
            <p className="text-xl italic text-gray-700 dark:text-gray-400 mt-2">
              "Free your Mind"
              Passionate about web development, data analysis, and creating meaningful digital experiences. I enjoy turning ideas into action through clean code, clear communication, and collaborative problem-solving.


            </p>
          </div>
        </div>

        {/* Intro Text Section */}
        <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed text-left">
        
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
