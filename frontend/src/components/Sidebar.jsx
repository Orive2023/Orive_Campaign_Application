import React, { useState } from "react";
import dashboard from "../assets/dashboard.png";
import post from "../assets/post.png";
import voter from "../assets/voter.png";
import video from "../assets/video-marketing.png";
import social from "../assets/social-media.png";
import target from "../assets/target-audience.png";
import chat from "../assets/chat.png";
import credit from "../assets/credit-card.png";
import data from "../assets/data.png";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Sidebar = ({ side, navClick }) => {
  const [mediaOpen, setMediaOpen] = useState(false);
  const [voterOpen, setVoterOpen] = useState(false);
  const [geoOpen, setGeOpen] = useState(false);

  const navigation = useNavigate();

  const toggleMedia = () => {
    setMediaOpen(!mediaOpen);
  };

  const toggleVoters = () => {
    setVoterOpen(!voterOpen);
  };

  const toggleGeo = () => {
    setGeOpen(!geoOpen);
  };

  return (
    <div
      className="sidebar"
      style={{
        position: "relative",
        left:
          window.innerWidth < 1200 ? (side ? "" : "-400px") : side ? "" : "",
        borderRight: navClick ? "2px solid #adb5bd" : "",
        width: navClick ? "100px" : "",
        marginLeft: navClick ? "-20px" : "",
        overflowX: navClick ? "hidden" : "",
        overflowY: navClick ? "hidden" : "",
        marginTop: navClick ? "-10px" : "",
      }}
    >
      <ul style={{ listStyle: "none" }}>
        <li className="sidebar-list" onClick={() => navigation("/dashboard")}>
          <div className="sidebar-content">
            <img
              src={dashboard}
              alt=""
              style={{
                height: navClick ? "35px" : "",
                width: navClick ? "35px" : "",
                marginLeft: navClick ? "42px" : "",
                paddingRight: navClick ? "10px" : "",
              }}
            />
            Dashboard
          </div>
        </li>
        <li className="sidebar-list" onClick={toggleMedia}>
          <div className="sidebar-content">
            <img
              src={post}
              alt=""
              style={{
                height: navClick ? "35px" : "",
                width: navClick ? "35px" : "",
                marginLeft: navClick ? "42px" : "",
                paddingRight: navClick ? "10px" : "",
              }}
            />
            Media Summary
            <span className="ms-auto text-end">
              {mediaOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
        </li>
        {mediaOpen && (
          <div className="submodule">
            <p
              className="sidebar-submodule-p"
              onClick={() => navigation("/media/paper-media")}
            >
              Paper Media Summary
            </p>
            <p
              className="sidebar-submodule-p"
              onClick={() => navigation("/media/electronic-media")}
            >
              Electronic Media Summary
            </p>
          </div>
        )}
        <li className="sidebar-list" onClick={toggleVoters}>
          <div className="sidebar-content">
            <img
              src={voter}
              alt=""
              style={{
                height: navClick ? "35px" : "",
                width: navClick ? "35px" : "",
                marginLeft: navClick ? "42px" : "",
                paddingRight: navClick ? "10px" : "",
              }}
            />
            Voter Insights
            <span className="ms-auto text-end">
              {voterOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
        </li>
        {voterOpen && (
          <div className="submodule">
            <p
              className="sidebar-submodule-p"
              onClick={() => navigation("/voters/voter-list")}
            >
              Voters List
            </p>
            <p
              className="sidebar-submodule-p"
              onClick={() => navigation("/voters/voter-verification")}
            >
              Voter's Verification
            </p>
            <p
              className="sidebar-submodule-p"
              onClick={() => navigation("/voters/voter-database")}
            >
              Voter's Database
            </p>
          </div>
        )}
        <li className="sidebar-list">
          <div className="sidebar-content">
            <img
              src={video}
              alt=""
              style={{
                height: navClick ? "35px" : "",
                width: navClick ? "35px" : "",
                marginLeft: navClick ? "42px" : "",
                paddingRight: navClick ? "10px" : "",
              }}
            />
            Press Vault
          </div>
        </li>
        <li className="sidebar-list">
          <div
            className="sidebar-content"
            onClick={() => navigation("/media/electronic-media")}
          >
            <img
              src={social}
              alt=""
              style={{
                height: navClick ? "35px" : "",
                width: navClick ? "35px" : "",
                marginLeft: navClick ? "42px" : "",
                paddingRight: navClick ? "10px" : "",
              }}
            />
            Social Media Summary
          </div>
        </li>
        <li className="sidebar-list">
          <div className="sidebar-content">
            <img
              src={target}
              alt=""
              style={{
                height: navClick ? "40px" : "",
                width: navClick ? "40px" : "",
                marginLeft: navClick ? "42px" : "",
                paddingRight: navClick ? "10px" : "",
              }}
            />
            Audience Snapshot
          </div>
        </li>
        <li className="sidebar-list">
          <div className="sidebar-content">
            <img
              src={chat}
              alt=""
              style={{
                height: navClick ? "40px" : "",
                width: navClick ? "40px" : "",
                marginLeft: navClick ? "42px" : "",
                paddingRight: navClick ? "10px" : "",
              }}
            />
            Bulk SMS Report
          </div>
        </li>
        {/* <li className="sidebar-list">
          <div className="sidebar-content">
            <img
              src={credit}
              alt=""
              style={{
                height: navClick ? "40px" : "",
                width: navClick ? "40px" : "",
                marginLeft: navClick ? "42px" : "",
                paddingRight: navClick ? "10px" : "",
              }}
            />
            Payment
          </div>
        </li> */}
        <li className="sidebar-list">
          <div className="sidebar-content" onClick={toggleGeo}>
            <img
              src={data}
              alt=""
              style={{
                height: navClick ? "40px" : "",
                width: navClick ? "40px" : "",
                marginLeft: navClick ? "42px" : "",
                paddingRight: navClick ? "10px" : "",
              }}
            />
            Geo-Political Strategy
            <span className="ms-auto text-end">
              {geoOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
        </li>
        {geoOpen && (
          <div className="submodule">
            <p
              className="sidebar-submodule-p"
              onClick={() => navigation("/geological/rally-permission")}
            >
              Rally Permission
            </p>
            <p
              className="sidebar-submodule-p"
              onClick={() => navigation("/geological/policy-intiatives")}
            >
              Policy Intiatives
            </p>
            <p
              className="sidebar-submodule-p"
              onClick={() => navigation("/geological/past-election-results")}
            >
              Past Election Result
            </p>
            <p
              className="sidebar-submodule-p"
              onClick={() => navigation("/geological/population-insights")}
            >
              Population Insights
            </p>

          </div>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
