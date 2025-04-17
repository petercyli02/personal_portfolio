import { RefObject } from "react";
import { ProjectType } from "../types";
import ProjectCard from "../components/ProjectCard";

const projects: ProjectType[] = [
  {
    name: "video-assisted data annotation gui",
    tech: "pyqt6, python",
    images: [
      {
        path: "/vagusGUI/Main Screen.png",
        caption: `
          main screen. top half is the video, bottom half is the neural data, which is also
          split into the top - a plot of the whole dataset, and the bottom - a plot of the
          current section you are zooming into
        `,
      },
      {
        path: "/vagusGUI/glucose.png",
        caption: `
          what the gui looks like after 2 hours of video + neural data had been annotated.
          the bottom can be used to show the glucose trend of the trend 
          (simulated data in this instance)
        `,
      },
      {
        path: "/vagusGUI/category selection.png",
        caption: `
          quickfire way for the user to select which category each time window belongs to
        `,
      },
      {
        path: "/vagusGUI/Main Screen.png",
        caption: `
          the video and the recording are not perfectly in sync. with some data annotated,
          you would be able to adjust for the offset
        `,
      },
    ],
    description: `
        a research gui built in collaboration with the cambridge bioelectronics 
        lab, meant for speeding up manual data annotation of the activity of 
        the lab rat based on video recordings. 
        the annotated data consisted a csv that matches time windows with 
        the activty of the rat.
        in order to prove that the research is of use, i did some ml using the
        collected data, vagus nerve recordings that cover the duration of the 
        video. we were able to infer the physical activity of the rat just 
        from its neural data with a random forest classifier at 98%+ accuracy
        the rat (e.g. eating, stationary, moving around etc). 
    `,
    link: "https://github.com/petercyli02/Analysis-of-vagus-nerve-recording",
  },
  {
    name: "finapp",
    tech: "next.js, nexus graphql, apollo graphql, prisma",
    images: [
      {
        path: "/FinApp/register.png",
        caption: `
          register a new account
        `,
      },
      {
        path: "/FinApp/blank_account.png",
        caption: `
          home page for a fresh new account
        `,
      },
      {
        path: "/FinApp/plaid.png",
        caption: `
          connecting transactions via plaid 
        `,
      },
      {
        path: "/FinApp/category_definition.png",
        caption: `
          defining custom spending categories
        `,
      },
      {
        path: "/FinApp/categorised.png",
        caption: `
          home page after connecting account, defining categories and using 
          ai to auto-categorise transactions
        `,
      },
      {
        path: "/FinApp/file_upload.png",
        caption: `
          file upload portal
        `,
      },
    ],
    description: `
      a collab project with @BAronHW (github) - personal finance web app 
      optimising for simplicity. it empowers the user by supporting manual 
      definition of spending categories, and assists the user
      with ai-powered autocategorisation. uses a full fledged firebase auth. 
      has piechart for spending visualisation.
      also supports document upload and storage through aws s3. 
      more powerful graphical visualisations currently in progress!
    `,
    link: "https://github.com/BAronHW/Finance-App",
  },
];

interface Props {
  ref: RefObject<HTMLDivElement | null> | null;
}

const Portfolio = ({ ref }: Props) => {
  return (
    <div ref={ref} className="flex flex-col items-center text-lg">
      <h1 className="my-10 text-white text-4xl">Project Collection</h1>
      <div className="text-[#ce9178] max-w-256">
        <p>"""</p>
        <p className="ml-8">
          a list of past and current projects i have been working on. it is a
          dynamic collection that is constantly getting updated.
          <br />
          very small scale projects (like most takehome tasks) are not included.
          we all have to start somewhere right:)
          <br />
          <br />
          click left and right on the images to browse screenshots, zoom in for
          more resolution;)
        </p>
        <p>"""</p>
      </div>
      <div className="grid grid-cols-2 text-lg w-full my-12 justify-around justify-items-center text-white">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <p className="my-8 text-xl text-[#4ec9b0]">more projects soon come...</p>
    </div>
  );
};

export default Portfolio;
