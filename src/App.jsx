import Header from "./components/Header/Header";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./ui/Main";
import Content from "./ui/Content";
import Profile from "./components/Profile/Profile";
import Stats from "./components/stats/Stats";
import Team from "./components/Team/Team";
import Event from "./components/Event/Event";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toogleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`font-quicksand ${darkMode && "dark"}`}>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toogleSidebar={toogleSidebar}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Main>
        <Content>
          <Stats darkMode={darkMode} />
          <div className="flex flex-col gap-3 lg:flex-row">
            <Team/>
            <Event/>
          </div>
        </Content>

        <Profile darkMode={darkMode}/>
      </Main>
    </div>
  );
}
