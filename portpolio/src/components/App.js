import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./header"; 

import IndexPage from "../pages/Indexpage/IndexPage";
import SkillPage from "../pages/SkillPage/skillPage";
import ProjectPage from "../pages/ProjectPage/projectPage";
import InfoPage from "../pages/InfoPage/infoPage";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" element={<IndexPage />}>
          </Route>
          <Route path="/skill" element={<SkillPage />}>
          </Route>
          <Route path="/project" element={<ProjectPage />}>
          </Route>
          <Route path="/info" element={<InfoPage />}>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
