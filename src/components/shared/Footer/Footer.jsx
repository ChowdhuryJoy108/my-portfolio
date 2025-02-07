import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-[150px]">
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by JOY CHOWDHURY
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <Link to="https://github.com/ChowdhuryJoy108">
              <FaGithub className="text-3xl hover:text-green-500 transition" />
            </Link>
            <Link  to="https://www.linkedin.com/in/%20joy-chowdhury-5072661b0">
            <FaLinkedin className="text-3xl hover:text-green-500 transition" />
            </Link>
            <Link to="https://www.facebook.com/share/1BkA741HaF/">
            <FaFacebook className="text-3xl hover:text-green-500 transition" />
            </Link>
          </div>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
