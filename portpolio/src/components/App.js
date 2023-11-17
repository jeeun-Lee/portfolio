import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useMediaQuery} from "react-responsive";

import Header from "./header"; 

import IndexPage from "../pages/Indexpage/IndexPage";
import SkillPage from "../pages/SkillPage/skillPage";
import ProjectPage from "../pages/ProjectPage/projectPage";
import InfoPage from "../pages/InfoPage/infoPage";

function App() {
  const Pc = useMediaQuery({
    query : "(min-width:1024px)"
  });
  const Tablet = useMediaQuery({
    query : "(min-width:768px) and (max-width:1023px)"
  });
  const Mobile = useMediaQuery({
    query : "(max-width:767px)"
  });

  return (
    <div className="App">
       {/* <div>
          {Pc && <p>HI PC</p>}
          {Tablet && <p>HI Tablet</p>}
          {Mobile && <p>HI Mobile</p>}
        </div>
       <BrowserRouter basename={process.env.PUBLIC_URL}>
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
       */}
    </div>
  );
}

export default App;
