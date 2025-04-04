// const Contact = () => {
//     return (
//      <>
//      <div className="min-h-screen flex items-start justify-center bg-gradient-to-b from-[#fef3c7] to-[#fde68a] dark:from-[#1f1f1f] dark:to-[#292929] py-12 px-4">
//      {/* Centered Card */}
//      <div className="bg-white dark:bg-gray-900 shadow-2xl dark:shadow-lg dark:shadow-gray-800 rounded-2xl p-10 max-w-4xl w-full mx-auto min-h-[600px] flex flex-col">
       
//        {/* Heading */}
//        <h2 className="text-left w-full text-4xl font-bold italic text-gray-800 dark:text-gray-200 mb-8" style={{ fontFamily: 'cursive' }}>
//          Contact Me
//        </h2>
       
//        {/* Contact Form */}
//        <form className="flex flex-col gap-4 max-w-lg mx-auto w-full">
//          <input type="text" placeholder="Your Name" className="p-3 border border-gray-500 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white" />
//          <input type="email" placeholder="Your Email" className="p-3 border border-gray-500 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white" />
//          <textarea placeholder="Your Message" rows={5} className="p-3 border border-gray-500 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white"></textarea>
//          <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition">Send Message</button>
//        </form>
       
//        {/* Contact Details */}
//        <div className="mt-8 max-w-lg mx-auto w-full text-center">
//          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Get in Touch</h3>
//          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//            Feel free to reach out to me via email or LinkedIn. I'm always open to discussing new projects and collaborations.
//          </p>
//        </div>
//      </div>
//    </div>
//      </>
//     );
// }

// export default Contact;
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!form.current) return; // ensures it's not null
  
    emailjs
      .sendForm(
        'service_ur0qx0o',         // replace with actual ID
        'template_vesbl3c',        // replace with actual ID
        form.current,              // safe to use now
        '5c5ypRNt5ZmmG0S0o'             // replace with actual public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong.");
        }
      );
  };
  

  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-b from-[#fef3c7] to-[#fde68a] dark:from-[#1f1f1f] dark:to-[#292929] py-12 px-4">
      <div className="bg-white dark:bg-gray-900 shadow-2xl dark:shadow-lg dark:shadow-gray-800 rounded-2xl p-10 max-w-4xl w-full mx-auto min-h-[600px] flex flex-col">
        <h2 className="text-left w-full text-4xl font-bold italic text-gray-800 dark:text-gray-200 mb-8" style={{ fontFamily: 'cursive' }}>
          Contact Me
        </h2>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-lg mx-auto w-full">
          <input type="text" name="name" placeholder="Your Name" required className="p-3 border border-gray-500 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white" />
          <input type="email" name="email" placeholder="Your Email" required className="p-3 border border-gray-500 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white" />
          <textarea name="message" placeholder="Your Message" rows={5} required className="p-3 border border-gray-500 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white"></textarea>
          <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition">Send Message</button>
        </form>
        <div className="mt-8 max-w-lg mx-auto w-full text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Get in Touch</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Feel free to reach out to me via email or LinkedIn. I'm always open to discussing new projects and collaborations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
