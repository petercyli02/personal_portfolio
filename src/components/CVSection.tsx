import { CVEntryType } from "../types";

interface Props {
  heading: string;
  entries: CVEntryType[];
}

const CVSection = ({ heading, entries }: Props) => {
  return (
    <div className="text-white text-lg">
      <h1 className="text-center my-10 text-[#6a9955]">// {heading}</h1>
      <div className="relative flex flex-col w-full">
        <div className="absolute bg-[#c586c0] w-1 top-0 bottom-0 left-1/2 transform translate-x-1/2 " />
        {entries.map((entry) => (
          <div className="relative flex w-full py-4">
            <div className="w-1/2 text-right pr-6">
              <p className="my-2 text-[#569cd6]">{entry.title}</p>
              {entry?.subtitle && (
                <p className="my-2 text-[#dcdcaa]">{entry.subtitle}</p>
              )}
            </div>
            <div className="w-1/2 text-left max-w-96 pl-6">
              {entry?.organisation && (
                <p className="my-2 text-[#4ec9b0]">{entry.organisation}</p>
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
