import { FaJava } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
export default function SkillsSection() {
    return (
      <section className="py-8">
        <h2 className="text-2xl font-bold text-center">Skills</h2>
        <div className="flex space-x-8 justify-center mt-6 text-5xl">
        <FaJava />
        <TbBrandCpp />
        <SiMysql />
        <FaHtml5 />
        <FaCss3Alt />
        <RiJavascriptFill />
        <SiTailwindcss />
        <FaReact />
        <FaNodeJs />
        </div>
      </section>
    );
  }
  