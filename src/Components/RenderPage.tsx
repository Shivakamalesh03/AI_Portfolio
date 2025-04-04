import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router";
import Experience from "./Experience";
import Aboutme from "./Aboutme";
import LandingPage from "./LandingPage";
import Contact from "./Contact";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const RenderPage = () => {
  const location = useLocation(); // React hook to track the current URL

  let Component;
  switch (location.pathname) {
    case "/contact":
      Component = Contact;
      break;
    case "/experience":
      Component = Experience;
      break;
    case "/aboutme":
      Component = Aboutme;
      break;
    default:
      Component = LandingPage; // Default landing page
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Component />
      </motion.div>
    </AnimatePresence>
  );
};

export default RenderPage;
