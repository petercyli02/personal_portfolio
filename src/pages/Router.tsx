import { Route, Routes } from "react-router-dom";
import CV from "./CV";
import Portfolio from "./Portfolio";
import { useEffect, useRef, useState } from "react";

interface Props {
  activeTab: string;
}

const Router = ({ activeTab }: Props) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [lines, setLines] = useState<number[]>([]);

  const calculateLines = () => {
    if (!contentRef.current) return;
    const lineHeight = 28;
    const contentHeight = contentRef.current.scrollHeight;
    const numberOfLines = Math.ceil(contentHeight / lineHeight);
    setLines(Array.from({ length: numberOfLines }, (_, i) => i + 1));
  };

  useEffect(() => {
    window.addEventListener("resize", calculateLines);
    return () => {
      window.removeEventListener("resize", calculateLines);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => calculateLines(), 250);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <div className="flex font-mono">
      <aside className="h-full w-6 text-lg flex flex-col text-[#858585] p-4">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </aside>
      <div key={activeTab} className="flex-1">
        <Routes>
          <Route
            key="CV"
            path="/"
            element={<CV ref={activeTab === "cv" ? contentRef : null} />}
          />
          <Route
            key="Portfolio"
            path="/portfolio"
            element={
              <Portfolio ref={activeTab === "portfolio" ? contentRef : null} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Router;
