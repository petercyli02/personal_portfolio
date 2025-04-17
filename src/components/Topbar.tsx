import { NavLink } from "react-router-dom";
import { FaPython, FaReact } from "react-icons/fa6";
import { useEffect, useState } from "react";

interface Props {
  activeTab: string;
  setActiveTab: (tabName: string) => void;
}

const Topbar = ({ activeTab, setActiveTab }: Props) => {
  const [hasScrolled, setHasScrolled] = useState(false);

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

  return (
    <div
      className={`sticky text-lg top-0 z-1 ${hasScrolled ? "shadow-b-md" : ""}`}
    >
      <div className="h-12 w-full text-center bg-[#323232] text-[#7f7f7f] flex justify-center items-center">
        peter_li - personal_portfolio_0
      </div>
      <div className="flex h-12 bg-[#252526]">
        <NavLink
          className={
            "flex gap-4 w-fit min-w-48 items-center content-center px-4" +
            (activeTab === "cv" ? " bg-[#1e1e1e]" : " bg-[#2d2d2d]")
          }
          onClick={() => handleTabClick("cv")}
          to="/"
        >
          <FaReact color="#3e819f" />
          <p className={activeTab === "cv" ? "text-white" : "text-[#7f7f7f]"}>
            CV.tsx
          </p>
        </NavLink>
        <NavLink
          className={
            "flex gap-4 w-fit min-w-48 items-center px-4" +
            (activeTab === "portfolio" ? " bg-[#1e1e1e]" : " bg-[#2d2d2d]")
          }
          onClick={() => handleTabClick("portfolio")}
          to="/portfolio"
        >
          <FaPython color="#3e819f" />
          <p
            className={
              activeTab === "portfolio" ? "text-white" : "text-[#7f7f7f]"
            }
          >
            portfolio.py
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Topbar;
