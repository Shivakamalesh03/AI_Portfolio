import GitHubIcon from "../assets/GithubIcon.svg"
import LinkedinIcon from "../assets/LinkedinIcon.svg"
import { Link } from "react-router-dom";
function TopNavbar() {
        const handleGitHubClick = () => {
        window.open('https://github.com/Shivakamalesh03', '_blank');
        };

        const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/shivakamalesh', '_blank');
        };
        const handleResumeClick = () => {
          window.open('https://blush-zita-32.tiiny.site', '_blank');
        };
        
        const handleGmailClick = () => {
          window.location.href = 'mailto:varthyakamalesh@gmail.com';
        };
return (
    <>
        <nav className="fixed top-0 left-0 w-full flex flex-row border-gray-200 p-2 bg-transparent shadow-none transition-all duration-300 z-50">
            <div className="w-[500px] flex flex-wrap items-center justify-center bg-white dark:bg-gray-900 border border-black-100 rounded-3xl mx-auto p-4 hover:shadow-2xl">
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutme"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
            
          </ul>
                </div>
            </div>
            <button onClick={handleGitHubClick}>
                <img src={GitHubIcon} alt="GitHub" />
            </button>
            <button onClick={handleLinkedInClick}>
                <img src={LinkedinIcon} alt="LinkedIn" />
            </button>
            <button onClick={handleResumeClick}>
  <img src={GitHubIcon} alt="Resume" />
</button>
<button onClick={handleGmailClick}>
  <img src={GitHubIcon} alt="Gmail" />
</button>

        </nav>


    </>
)
}

export default TopNavbar;