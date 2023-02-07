import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import CoffeeDetail from "../components/CoffeeDetail.component";
import Header from "../components/Header.component";
import ProjectSpending from "../components/ProjectSpending.component";

const MainBody = () => {
  return (
    <div className="w-full md:w-7/12 md:h-screen overflow-y-scroll">
      <Header />
      <div className="p-6">
        <div className="dashboard_tab flex items-center justify-between">
          <div className="tab_list">
            <ul className="flex items-center">
              <li>
                <a href="/" className="active">
                  Overview
                </a>
              </li>
              <li>
                <a href="/">Targets</a>
              </li>
              <li>
                <a href="/">Budget</a>
              </li>
              <li>
                <a href="/">Users</a>
              </li>
              <li>
                <a href="/">Files</a>
              </li>
              <li>
                <a href="/">Activity</a>
              </li>
              <li>
                <a href="/">Settings</a>
              </li>
            </ul>
          </div>
          <div className="tab_button">
            <ul className="flex items-center">
              <li>
                <a href="/" className="flex items-center">
                 < BsPlusLg />
                  Add User
                </a>
              </li>
              <li>
                <a href="/">Add Target</a>
              </li>
              <li>
                <a href="/">
                  <BiDotsHorizontalRounded />
                </a>
              </li>
            </ul>
          </div>
        </div>
      < CoffeeDetail />
      < ProjectSpending />
      </div>
    </div>
  );
};

export default MainBody;
