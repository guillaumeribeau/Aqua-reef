import Home from "./pages/Home";
import "./styles/index.scss";
import { Routes, Route } from "react-router-dom";
import SetupRegister from "./components/Setup/SetupRegister";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AnalyseWater from "./pages/AnalyseWater";
import DashboardDefault from "./pages/DashboardDefault";
import Private from "./components/users/Privates";
import NewProjectAqua from "./components/NewProjectAqua";
import Setup from "./components/Setup/Setup";
import Population from "./population/Population";


function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />{" "}
            </>
          }
        />

        <Route path="/private" element={<Private />}>
          <Route
            path="/private/dashboard"
            index
            element={<DashboardDefault />}
          />

          <Route
            path="/private/setupRegister"
            element={<DashboardDefault childrenCards={<Setup />} />}
          />
          <Route
            path="/private/createSetup"
            element={<DashboardDefault childrenCards={<NewProjectAqua />} />}
          />
          <Route
            path="/private/analyse"
            element={<DashboardDefault childrenCards={<AnalyseWater />} />}
          />
          <Route path="/private/population" element={<DashboardDefault childrenCards={<Population/>} />} />
          <Route path="/private/reproduction" element={<DashboardDefault />} />
          <Route path="/private/blog" element={<Blog />} />
          <Route path="/private/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
