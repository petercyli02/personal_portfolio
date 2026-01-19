import { CVEntryType } from "../types";

interface Props {
  heading: string;
  entries: CVEntryType[];
}

const CVSection = ({ heading, entries }: Props) => {
  return (
    <div className="text-white text-lg w-full">
      <h1 className="text-center pl-10 md:pl-0 my-10 text-[#6a9955]">// {heading}</h1>
      <div className="relative flex flex-col w-full">
        {/* Line: left on mobile, centered on md+ */}
        <div className="absolute bg-[#c586c0] w-1 top-0 bottom-0 left-8 md:left-1/2 md:translate-x-1/2" />
        {entries.map((entry) => (
          <div className="relative flex flex-col md:flex-row w-full py-4 pl-20 md:pl-0">
            {/* Organisation first on mobile */}
            {entry?.organisation && (
              <p className="my-2 text-[#4ec9b0] md:hidden">{entry.organisation}</p>
            )}
            <div className="md:w-1/2 text-left md:text-right md:pr-6">
              <p className="my-2 text-[#569cd6]">{entry.title}</p>
              {entry?.subtitle && (
                <p className="my-2 text-[#dcdcaa]">{entry.subtitle}</p>
              )}
            </div>
            <div className="md:w-1/2 text-left max-w-96 md:pl-6">
              {entry?.organisation && (
                <p className="my-2 text-[#4ec9b0] hidden md:block">{entry.organisation}</p>
              )}
              <p className="my-2 text-[#9cdcfe]">{entry.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CVSection;

// Ex
