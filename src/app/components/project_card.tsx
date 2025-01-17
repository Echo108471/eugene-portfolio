import React from "react";

interface ProjectCardProps {
  date: string;
  name: string;
  description: string;
  techStack: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ date, name, description, techStack, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md p-6 border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100 dark:hover:bg-accent-dark dark:bg-innerbox-dark dark:border-accent-dark"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-subtext-dark">{date}</span>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-foreground-dark">{name}</h3>
      </div>
      <p className="mt-2 text-gray-700 dark:text-innertext-dark">{description}</p>
      <div className="mt-4">
        <h4 className="text-sm font-semibold text-gray-600 dark:text-techstack-dark">Tech Stack:</h4>
        <ul className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech, index) => (
            <li
              key={index}
              className="px-2 py-1 text-xs font-medium text-gray-800 bg-gray-100 rounded dark:bg-tinybox-dark dark:text-foreground-dark"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ProjectCard;
