import { ProjectType } from "../types";
import Carousel from "./Carousel";

interface Props {
  project: ProjectType;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="max-w-[80%]">
      <div className="text-center">
        <a className="text-xl text-[#4fc1ff]" href={project.link}>
          {project.name}
        </a>
      </div>
      <p className="my-8 whitespace-pre-line text-[#6a9955]">
        {project.description
          .split("\n")
          .map((line) => `# ${line}`)
          .join("\n")}
      </p>
      <Carousel images={project.images} />
    </div>
  );
};

export default ProjectCard;
