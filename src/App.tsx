import Topbar from "./components/Topbar";
import { useEffect, useRef, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import CV from "./pages/CV";
import Portfolio from "./pages/Portfolio";

function App() {
  const [active, setActive] = useState("cv");

  const contentRef = useRef<HTMLDivElement | null>(null);
  const [lines, setLines] = useState<number[]>([]);
  const calculateLines = () => {
    if (!contentRef.current) return;
    const lineHeight = 28;
    const contentHeight = contentRef.current.scrollHeight;
    const numberOfLines = Math.ceil(contentHeight / lineHeight) - 5;
    console.log({ numberOfLines });
    setLines(Array.from({ length: numberOfLines }, (_, i) => i + 1));
  };

  useEffect(() => {
    window.addEventListener("resize", calculateLines);
    return () => {
      window.removeEventListener("resize", calculateLines);
    };
  }, [active]);

  useEffect(() => {
    const timeout = setTimeout(() => calculateLines(), 250);
    return () => clearTimeout(timeout);
  }, [active]);

  return (
    <div className="min-w-fit">
      <div className="bg-[#1e1e1e] h-max min-h-screen">
        <Topbar
          activeTab={active}
          setActiveTab={(tabName: string) => setActive(tabName)}
        />
        <div className="flex font-mono pr-7">
          <aside className="hidden md:flex h-full w-6 text-lg flex-col text-[#858585] p-4">
            {lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </aside>
          {active === "cv" ? <CV ref={contentRef} /> : <Portfolio ref={contentRef} />}
        </div>
      </div>
      <div className="fixed bottom-6 h-16 w-full bg-[#2a2d2e] flex justify-center items-center">
        <a href="https://www.linkedin.com/in/peter-l-707085226/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={24} color="gray" />
        </a>
      </div>
      <footer className="fixed w-full bottom-0">
        <div className="h-6 w-full bg-[#3794ff] text-center text-white leading-6 text-sm">
          COPYRIGHT &copy; 2026 PETER LI
        </div>
      </footer>
    </div>
  );
}

export default App;
