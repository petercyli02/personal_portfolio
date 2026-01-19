import { ProjectType } from "../types";
import Carousel from "./Carousel";

interface Props {
  project: ProjectType;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="max-w-[80%] mb-32">
      <div className="text-center">
        <a className="text-xl text-[#4fc1ff]" href={project?.link}>
          {project.name}
        </a>
      </div>
      <p
        className="my-8 whitespace-pre-line text-[#6a9955] pl-6 leading-7"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='28'%3E%3Ctext x='0' y='20' fill='%236a9955' font-family='monospace' font-size='18'%3E%23%3C/text%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat-y',
          backgroundPosition: 'left top',
        }}
      >
        {project.description}
      </p>
      <Carousel images={project.images} />
    </div>
  );
};

export default ProjectCard;
