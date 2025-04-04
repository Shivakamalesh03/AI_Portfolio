// import GitHubIcon from "../assets/GithubIcon.svg"
// import LinkedinIcon from "../assets/LinkedinIcon.svg"
// // import EmailIcon from "../assets/EmailIcon.png"
// import ResumeIcon from "../assets/ResumeIcon1.png"

// import { Link } from "react-router-dom";
// function TopNavbar() {
//         const handleGitHubClick = () => {
//         window.open('https://github.com/Shivakamalesh03', '_blank');
//         };

//         const handleLinkedInClick = () => {
//         window.open('https://www.linkedin.com/in/shivakamalesh', '_blank');
//         };
//         const handleResumeClick = () => {
//           window.open('https://blush-zita-32.tiiny.site', '_blank');
//         };
        
        
// return (
//     <>
//         <nav className="fixed top-0 left-0 w-full flex flex-row border-gray-200 p-2 bg-transparent shadow-none transition-all duration-300 z-50">
//             <div className="w-[500px] flex flex-wrap items-center justify-center bg-white dark:bg-gray-900 border border-black-100 rounded-3xl mx-auto p-4 hover:shadow-2xl">
//                 <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//                 <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <Link
//                 to="/"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/aboutme"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 About Me
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/experience"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Experience
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Contact
//               </Link>
//             </li>
            
//           </ul>
//                 </div>
//             </div>
//           <button onClick={handleGitHubClick}>
//           <img src={GitHubIcon} alt="GitHub" className="w-6 h-6" />
//           </button>
//           <button onClick={handleLinkedInClick}>
//           <img src={LinkedinIcon} alt="LinkedIn" className="w-6 h-6" />
//           </button>
//           <button onClick={handleResumeClick}>
//           <img src={ResumeIcon} alt="Resume" className="w-6 h-6" />
//           </button>
//           {/* <Link 
//                 to="/contact"
//                 // className="no-underline"

//                 //  className="block py-20 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//   <button>
//     <img src={EmailIcon} alt="Email" className="w-6 h-6" />
//   </button>
//   </Link> */}




//         </nav>


//     </>
// )
// }

// export default TopNavbar;
import GitHubIcon from "../assets/GithubIcon.svg";
import LinkedinIcon from "../assets/LinkedinIcon.svg";
import ResumeIcon from "../assets/ResumeIcon1.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleGitHubClick = () => {
    window.open("https://github.com/Shivakamalesh03", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/shivakamalesh", "_blank");
  };

  const handleResumeClick = () => {
    window.open("https://blush-zita-32.tiiny.site", "_blank");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-2 bg-transparent">
        {/* Desktop navbar container */}
        <div className="hidden md:flex w-[500px] items-center justify-center bg-white dark:bg-gray-900 border border-black-100 rounded-3xl mx-auto p-4 shadow-md dark:shadow-gray-800">
          <ul className="font-medium flex flex-row space-x-8">
            <li>
              <Link to="/" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            </li>
            <li>
              <Link to="/aboutme" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">About Me</Link>
            </li>
            <li>
              <Link to="/experience" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Experience</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon (mobile only) */}
        <div className="md:hidden flex justify-between w-full px-4">
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Social Icons still visible on mobile */}
          <div className="flex space-x-4">
            <button onClick={handleGitHubClick}>
              <img src={GitHubIcon} alt="GitHub" className="w-6 h-6" />
            </button>
            <button onClick={handleLinkedInClick}>
              <img src={LinkedinIcon} alt="LinkedIn" className="w-6 h-6" />
            </button>
            <button onClick={handleResumeClick}>
              <img src={ResumeIcon} alt="Resume" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Social Icons (always visible on desktop) */}
        <div className="hidden md:flex space-x-4">
          <button onClick={handleGitHubClick}>
            <img src={GitHubIcon} alt="GitHub" className="w-6 h-6" />
          </button>
          <button onClick={handleLinkedInClick}>
            <img src={LinkedinIcon} alt="LinkedIn" className="w-6 h-6" />
          </button>
          <button onClick={handleResumeClick}>
            <img src={ResumeIcon} alt="Resume" className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Dropdown menu on mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[70px] left-0 w-full bg-white dark:bg-gray-900 p-4 shadow-md z-40">
          <ul className="flex flex-col space-y-4">
            <li><Link to="/" onClick={toggleMenu} className="text-gray-900 dark:text-white">Home</Link></li>
            <li><Link to="/aboutme" onClick={toggleMenu} className="text-gray-900 dark:text-white">About Me</Link></li>
            <li><Link to="/experience" onClick={toggleMenu} className="text-gray-900 dark:text-white">Experience</Link></li>
            <li><Link to="/contact" onClick={toggleMenu} className="text-gray-900 dark:text-white">Contact</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default TopNavbar;

