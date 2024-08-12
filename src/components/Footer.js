import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-200 p-4 mt-auto text-lg">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-8 mb-4">
          <a href="https://x.com/pkpotter03">
            <FaXTwitter />
          </a>
          <a href="https://www.linkedin.com/in/pkpotter03/">
            <FaLinkedinIn />
          </a>
          <a href="https://leetcode.com/u/pkpotter03/">
            <SiLeetcode />
          </a>
          <a href="https://www.instagram.com/pkpotter03/">
            <FaInstagram />
          </a>
        </div>
        <p>&copy; 2024 Pratik Kumbhar. All rights reserved.</p>
      </div>
    </footer>
  );
}
