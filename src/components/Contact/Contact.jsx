import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Initialize EmailJS with your public key
    emailjs.init("1rSbjzSSshZ7TrQfz");

    emailjs
      .sendForm(
        "service_mafqovo", // Service ID
        "template_xhkc902", // Template ID
        form.current,
        "1rSbjzSSshZ7TrQfz" // Public Key
      )
      .then(
        (result) => {
          console.log("EmailJS Success:", result.text);
          setIsSent(true);
          setIsLoading(false);
          form.current.reset();
          toast.success("Message sent successfully! 🎉", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setIsLoading(false);
          toast.error(
            `Failed to send message: ${error.text || "Please try again"}`,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "dark",
            }
          );
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          I'd love to hear from you - reach out for any opportunities or
          questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center mb-6">
          Connect With Me
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-4">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"></textarea>

          {/* Send Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full h-12 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-md transition-all duration-200 ${
              isLoading
                ? "opacity-50 cursor-not-allowed"
                : "hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
            }`}>
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {isSent && (
          <div className="mt-4 p-3 bg-green-600/20 border border-green-500/30 rounded-md">
            <p className="text-green-400 text-sm text-center">
              ✅ Message sent successfully!
            </p>
          </div>
        )}
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
