import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import HeadDashboard from "../components/HeadDashboard";
import { useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Dashboard = () => {
  const [navClick, setNavClick] = useState(false);
  const [side, setSide] = useState(false);

  // const {state} = useLocation()
  // const details = jwtDecode(state.token.jwtToken)
  // console.log(details)
  return (
    <div>
      <HeadDashboard
        navClick={navClick}
        setNavClick={setNavClick}
        side={side}
        setSide={setSide}
      />
      <div className="dashboard-page">
        <Sidebar navClick={navClick} side={side} />
        <div className="dashboard"></div>
      </div>
    </div>
  );
};

export default Dashboard;
