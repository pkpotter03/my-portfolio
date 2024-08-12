import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-zinc-900 text-gray-200 p-6 px-24 shadow-xl shadow-zinc-800/50">
      <div className="container mx-auto flex justify-between item-center">
        <Link href="/" legacyBehavior>
          <a className="text-5xl font-bold">
            <span className="text-blue-400">.</span>pk
          </a>
        </Link>
        <nav className="text-xl flex space-x-10 items-center">
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
          <Link href="/projects" legacyBehavior>
            <a>Projects</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a>Contact</a>
          </Link>
        </nav>
        <button legacyBehavior>
          <a href="https://github.com/pkpotter03">
            <FaGithub className="text-5xl" />
          </a>
        </button>
      </div>
    </header>
  );
}
