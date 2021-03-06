import Home from "./pages/Home";
import "./styles/index.scss";
import { Routes, Route } from "react-router-dom";
import SetupRegister from "./components/Setup/SetupRegister";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AnalyseWater from "./pages/AnalyseWater";
import DashboardDefault from "./pages/DashboardDefault";
import Private from "./components/users/Privates";
import NewProjectAqua from "./components/NewProjectAqua/NewProjectAqua";
import Setup from "./components/Setup/Setup";
import Population from "./allCardFish/AllCardFish";
import AllCardFish from "./allCardFish/AllCardFish";
import MyPopulation from "./myPopulation/MyPopulation";
import AquaSettings from "./components/setting/AquaSettings";
import Dashboard from "./pages/Dashboard";


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
            element={<DashboardDefault childrenCards={<Dashboard/>} />}
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
          <Route path="/private/cardfish" element={<DashboardDefault childrenCards={<AllCardFish/>} />} />
          <Route path="/private/mypopulation" element={<DashboardDefault childrenCards={<MyPopulation/>} />} />
    
          
          <Route path="/private/aqua-settings" element={<DashboardDefault childrenCards={<AquaSettings/>} />} />


          <Route path="/private/blog" element={<Blog />} />
          <Route path="/private/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
