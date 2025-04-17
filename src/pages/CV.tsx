import { RefObject } from "react";
import CVSection from "../components/CVSection";

const CVData = {
  Experiences: [
    {
      title: "mar 2025 - now",
      subtitle: "fullstack engineer",
      organisation: "Tokunize",
      content: `
          senior role at pre-seed startup,
          working closely with cto to work on product design as well as typical 
          fullstack stuff, implementing third-party 
          integrations such as yoti and docusign
        `,
    },
    {
      title: "sep 2024 - mar 2025",
      subtitle: "fullstack engineer",
      organisation: "PortF",
      content: `
          worked on an ai powered portfolio management solution built for
          esg investors, implementing features across the stack 
          (next.js, apollo graphql, nexus graphql, prisma orm, ts, python)
          delivered key features such as a transaction summary table, 
          an user management system as well as llm pipelines using python langchain
        `,
    },
    {
      title: "jul 2023 - sep 2023",
      subtitle: "software engineer intern",
      organisation: "Ocado Technology",
      content: `
          built a 3d simulation tool using unity, integrating the existing c# 
          backend, achieved much better visuals compared to the pre-existing tool 
        `,
    },
    {
      title: "jul 2022 - sep 2022",
      subtitle: "software engineer intern",
      organisation: "software engineer intern",
      content: `
          built ml pipelines for linear regression, xgboost and fully connected nn
          compatible with homomorphic encryption, using concrete ml (based on sklearn
          and pytorch)
        `,
    },
  ],
  Education: [
    {
      title: "2020 - 2024",
      subtitle: "information and computer engineering",
      organisation: "University of Cambridge",
      content: `
          covered a wide range of modules heavy on maths and computer science theory
          including data structure and algorithms to computer vision
        `,
    },
  ],
  Skills: [
    {
      title: "TS/JS",
      content: "react, nexus graphql, prisma",
    },
    {
      title: "Python",
      content: "pyqt6, sklearn, pytorch, pandas, django",
    },
    {
      title: "C#",
      content: "-",
    },
    {
      title: "C++",
      content: "arduino",
    },
    {
      title: "HTML/CSS",
      content: "hence this website:)",
    },
  ],
};

interface Props {
  ref: RefObject<HTMLDivElement | null> | null;
}

const CV = ({ ref }: Props) => {
  return (
    <div className="flex flex-col gap-8 pb-24 grow" ref={ref}>
      <CVSection heading="EXPERIENCE" entries={CVData.Experiences} />
      <CVSection heading="EDUCATION" entries={CVData.Education} />
      <CVSection heading="SKILLS" entries={CVData.Skills} />
    </div>
  );
};

export default CV;
