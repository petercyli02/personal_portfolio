import { FaPython, FaReact } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

interface Props {
  activeTab: string;
  setActiveTab: (tabName: string) => void;
}

const Topbar = ({ activeTab, setActiveTab }: Props) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mousePos, setMousePos] = useState<number | null>(null);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, tab: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos(e.clientX - rect.left);
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredTab(tab);
    }, 400);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
    setMousePos(null);
  };

  return (
    <div
      className={`sticky text-lg top-0 z-1 ${hasScrolled ? "shadow-b-md" : ""}`}
    >
      <div className="[@media(max-width:840px)_and_(orientation:landscape)]:hidden h-12 w-full text-center bg-[#323232] text-[#7f7f7f] flex justify-center items-center">
        peter_li - personal_portfolio_0
      </div>
      <div className="flex h-12 bg-[#252526]">
        <div
          className={
            "relative flex gap-4 w-fit min-w-48 items-center content-center px-4 cursor-pointer" +
            (activeTab === "cv" ? " bg-[#1e1e1e]" : " bg-[#2d2d2d]")
          }
          onClick={() => handleTabClick("cv")}
          onMouseEnter={(e) => handleMouseEnter(e, "cv")}
          onMouseLeave={handleMouseLeave}
        >
          <FaReact color="#3e819f" />
          <p className={activeTab === "cv" ? "text-white" : "text-[#7f7f7f]"}>
            CV.tsx
          </p>
          {hoveredTab === "cv" && mousePos !== null && (
            <span className="absolute -bottom-12 border border-[#272c36] rounded-xs p-1 px-2 bg-[#20242c] z-1 text-md text-[#7b88a1] text-nowrap shadow-lg" style={{ left: mousePos }}>CV Overview</span>
          )}
        </div>
        <div
          className={
            "relative flex gap-4 w-fit min-w-48 items-center px-4 cursor-pointer group" +
            (activeTab === "portfolio" ? " bg-[#1e1e1e]" : " bg-[#2d2d2d]")
          }
          onClick={() => handleTabClick("portfolio")}
          onMouseEnter={(e) => handleMouseEnter(e, "portfolio")}
          onMouseLeave={handleMouseLeave}
        >
          <FaPython color="#3e819f" />
          <p
            className={
              activeTab === "portfolio" ? "text-white" : "text-[#7f7f7f]"
            }
          >
            portfolio.py
          </p>
          {hoveredTab === "portfolio" && mousePos !== null && (
            <span className="absolute -bottom-12 border border-[#272c36] rounded-xs p-1 px-2 bg-[#20242c] z-1 text-md text-[#7b88a1] text-nowrap shadow-lg" style={{ left: mousePos }}>Project Portfolio</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
