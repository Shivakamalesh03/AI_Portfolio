import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import slowlaxImage from "../assets/slowlax.png"; // Profile image

const Experience = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-[#fef3c7] to-[#fde68a] dark:from-[#1f1f1f] dark:to-[#292929] py-12 px-4">
      <div className="bg-white dark:bg-gray-900 shadow-2xl dark:shadow-lg dark:shadow-gray-800 rounded-2xl p-10 max-w-5xl w-full min-h-[600px] flex flex-col">
      
      <h2 className="text-left w-full text-4xl font-bold italic text-gray-800 dark:text-gray-200 mb-8" style={{ fontFamily: 'cursive' }}>
          Experience
        </h2>
        {/* Timeline */}
        <VerticalTimeline lineColor="#6b7280">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Present"
            icon={<img src={slowlaxImage} alt="Puma Internship" className="w-full rounded-full border-2 border-black" />}
            contentStyle={{ background: '#292929', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #292929' }}
          >
            <img src={slowlaxImage}  alt="Puma Internship" className="w-full rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">Puma Intern - Planning (B2B Ecom)</h3>
            <p>Working on data-driven planning and analytics for Puma's e-commerce division.</p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023 - Present"
            icon={<img src={slowlaxImage} alt="GCC Rust" className="w-full rounded-full border-2 border-black" />}
            contentStyle={{ background: '#fde68a', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #fde68a' }}
          >
            <img src={slowlaxImage}  alt="GCC Rust" className="w-full rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">GCC Rust Contributor</h3>
            <p>Contributing to the GCC Rust project, focusing on parsing and compiler improvements.</p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2022 - Present"
            icon={<img src={slowlaxImage} alt="IIT Roorkee" className="w-full rounded-full border-2 border-black" />}
            contentStyle={{ background: '#292929', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #292929' }}
          >
            <img src={slowlaxImage} alt="IIT Roorkee" className="w-full rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">IIT Roorkee - Electrical Engineering</h3>
            <p>Pursuing a Bachelor's degree in Electrical Engineering.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;