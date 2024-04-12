import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Paper from "./pages/mediaModule/Paper";
import Electronic from "./pages/mediaModule/Electronic";
import VotersVerification from "./pages/votersModule/VotersVerification";
import VotersLIst from "./pages/votersModule/VotersList"
import VotersDatabase from "./pages/votersModule/VoterDatabase"
import RallyPermission from "./pages/GeoPoliticalStrategy/RallyPermission";
import PolicyIniatives from "./pages/GeoPoliticalStrategy/PolicyIniatives";
import PopulationInsights from "./pages/GeoPoliticalStrategy/PopulationInsights";
import PastElectionResults from "./pages/GeoPoliticalStrategy/PastElectionResults";
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/media/paper-media" element={<Paper />} />
        <Route path="/media/electronic-media" element={<Electronic />} />
        <Route path="/voters/voter-list" element={<VotersLIst />} />
        <Route path="/voters/voter-verification" element={<VotersVerification />} />
        <Route path="/voters/voter-database" element={<VotersDatabase />} />
        <Route path="/geological/rally-permission" element={<RallyPermission/>} />
        <Route path="/geological/policy-intiatives" element={<PolicyIniatives/>} />
        <Route path="/geological/past-election-results" element={<PastElectionResults/>} />
        <Route path="/geological/population-insights" element={<PopulationInsights/>} />
      </Routes>
    </div>
  );
}

export default App;