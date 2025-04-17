import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
import Topbar from "./components/Topbar";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";

function App() {
  const [active, setActive] = useState(
    window.location.pathname === "/portfolio" ? "portfolio" : "cv"
  );

  return (
    <>
      <div className="bg-[#1e1e1e] h-max min-h-screen">
        <BrowserRouter>
          <Topbar
            activeTab={active}
            setActiveTab={(tabName: string) => setActive(tabName)}
          />
          <Router activeTab={active} />
        </BrowserRouter>
      </div>
      <div className="h-16 w-full bg-[#2a2d2e] flex justify-center items-center">
        <a href="https://www.linkedin.com/in/peter-li-707085226/">
          <FaLinkedinIn size={24} color="gray" />
        </a>
      </div>
      <footer className="sticky bottom-0 ">
        <div className="h-6 w-full bg-[#3794ff] text-center text-white leading-6 text-sm">
          COPYRIGHT &copy; 2025 PETER LI
        </div>
      </footer>
    </>
  );
}

export default App;
