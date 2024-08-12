export default function BioSection() {
  return (
    <section className="py-12 flex flex-row">
      <div className="w-1/2">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-80 h-80 rounded-full mx-auto shadow-xl shadow-zinc-800/50"
        />
      </div>
      <div className="w-1/2 pt-10 ">
        <h1 className="text-6xl font-bold leading-snug">
          Hi, It's <span className="text-blue-400">Pratik</span>
        </h1>
        <h3 className="text-4xl font-bold mt-1 typing-text">
          I'm a <span className="text-blue-400"></span>
        </h3>
        <p className=" text-lg mt-4">
          Currently in my Final year of Computer Science & Engineering at
          D.K.T.E. Society's Textile and Engineering Institute, Ichalkaranji, I
          possess strong skills in Java, C/C++, Frontend development and MySQL. My
          passion for software development drives me to master programming
          languages, delve into Data Structures and Algorithms, and excel in
          both theory and practice. Actively seeking projects and internships, I
          aim to apply my expertise and contribute meaningfully to the tech
          industry. Let’s connect and explore exciting opportunities in software
          development!.
        </p>
      </div>
    </section>
  );
}
