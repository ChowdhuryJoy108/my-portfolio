import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    emailjs.init("qsiikvhva6akOQzR-");
  }, []);

  const handleChange = (e) => {
    if (!e.target.name) return;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_3760gfy",
        "template_yp0r4zd",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "qsiikvhva6akOQzR-"
      )
      .then(
        (response) => {
          console.log("Email successfully sent!", response);
          setStatusMessage("Message sent successfully! ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          setStatusMessage("Failed to send message. ❌");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="grid grid-cols-1 gap-2 items-center md:grid-cols-2">
      <div className="max-w-2xl  bg-white shadow-lg rounded-lg p-8">
        <div className="flex items-center gap-4 my-10">
          <div className="w-16 h-1 bg-green-400"></div>
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className="text-green-400">#</span>Contact
            <span className="text-green-400">_</span>Me
          </h1>
        </div>
        <p className="text-center text-gray-600 mb-6">
          Feel free to reach out!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {statusMessage && (
            <p className="text-center text-gray-800 mt-3">{statusMessage}</p>
          )}
        </form>
      </div>

      <div>
      <div className="flex items-center gap-4 my-10">
          <div className="w-16 h-1 bg-green-400"></div>
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className="text-green-400">#</span>Find
            <span className="text-green-400">_</span>Me
            <span className="text-green-400">_</span>on
          </h1>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.facebook.com/share/1BkA741HaF/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            <FaFacebook size={24} />
            <span>Facebook</span>
          </a>

          <a
            href="https://www.linkedin.com/in/%20joy-chowdhury-5072661b0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-blue-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-900 transition"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/ChowdhuryJoy108"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-900 transition"
          >
            <FaGithub size={24} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
