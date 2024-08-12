export default function ProjectCard({ project }) {
    return (
      <div className="bg-zinc-800 shadow-md rounded-lg overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="mt-2">{project.description}</p>
          <a href={project.link} className="text-blue-400 hover:text-blue-600 mt-4 inline-block">
            View Project
          </a>
        </div>
      </div>
    );
  }
  