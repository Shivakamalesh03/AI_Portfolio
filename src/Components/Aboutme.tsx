import slowlaxImage from "../assets/slowlax.png"; // Profile image

const Aboutme = () => {
    return (
     <>
     <div className="min-h-screen flex items-start justify-center bg-gradient-to-b from-[#fef3c7] to-[#fde68a] dark:from-[#1f1f1f] dark:to-[#292929] py-12 px-4">
     {/* Centered Card */}
     <div className="bg-white dark:bg-gray-900 shadow-2xl dark:shadow-lg dark:shadow-gray-800 rounded-2xl p-10 max-w-5xl w-full mx-auto min-h-[600px] flex flex-col">
       
       {/* Heading */}
       <h2 className="text-left w-full text-4xl font-bold italic text-gray-800 dark:text-gray-200 mb-8" style={{ fontFamily: 'cursive' }}>
         About Me
       </h2>
       
       {/* Profile Section */}
       <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
         <img src={slowlaxImage} alt="Varthya shivakamalesh" className="w-40 h-40 rounded-full border-4 border-gray-700 dark:border-gray-600" />
         <div>
           <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-200">Vathya shivakamalesh</h3>
           <p className="text-lg italic text-gray-700 dark:text-gray-400 mt-2">"I like to build things and break limits"</p>
         </div>
       </div>
       
       {/* Description */}
       <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed mt-6">
         I am an Electrical Engineering undergraduate at IIT Roorkee, passionate about building software solutions. I enjoy working with Data, Analysis, and powerbi. Currently, When I'm not coding, you'll find me organizing events, playing music, or exploring new tech trends.
       </p>
       
       {/* Skills Section */}
       <div className="mt-8">
         <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Skills</h3>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           {["Data Analyst", "C++", "React", "Powerbi", "python", "R"].map((skill) => (
             <span key={skill} className="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-200 px-4 py-2 rounded-lg font-medium">
               {skill}
             </span>
           ))}
         </div>
       </div>
       
       {/* Hobbies & Interests */}
       <div className="mt-8">
         <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Hobbies & Interests</h3>
         <p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
           I love organizing events, listening to music, and exploring Data. Always excited to collaborate on innovative projects!
         </p>
       </div>
     </div>
   </div>
     </>
    );
}

export default Aboutme;
