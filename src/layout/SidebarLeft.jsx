import { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { FaGreaterThan } from "react-icons/fa";
import { GrPieChart } from "react-icons/gr";
import { FiShoppingBag } from "react-icons/fi";
import { BsFolder } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import { IoIdCardOutline } from "react-icons/io5";
import { RxIdCard } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { TbNews } from "react-icons/tb";
import { RiWechatLine } from "react-icons/ri";

const SidebarLeft = () => {
  const [selectedLink, setSelectedLink] = useState("");
  const [displayAccordion, setDisplayAccordion] = useState(false);

  const showAccordion = (value) => {
    if (displayAccordion === false) {
      setDisplayAccordion(!displayAccordion);
      setSelectedLink(value);
    } else setDisplayAccordion(!displayAccordion);
  };

  return (
    <aside className="justify-star font-semibold w-full flex-wrap md:w-1/4 bg-white overflow-hidden border border-r-gray-200 rounded-l-2xl">
      <div className="m-6">
        <span className="flex ">
          <img
            className="w-10 h-10 rounded-full"
            src={
              process.env.PUBLIC_URL + "/assets/images/profile-picture-5.jpg"
            }
            alt="Rounded avatar"
          />
          <p className="text-lg font-semibold  my-auto pl-2">ByeWind</p>
        </span>
        <div className="pb-4">
          <span className="flex text-center justify-evenly py-4">
            <p className="font-lg text-gray-400 width-full">Favorites</p>
            <p className="font-lg text-gray-400 width-full">Recently</p>
          </span>
          <ul>
            <li className="flex">
              <GoPrimitiveDot
                className="my-auto text-gray-400 mr-2"
                size={13}
              />
              Overview
            </li>
            <li className="flex">
              <GoPrimitiveDot
                className="my-auto text-gray-400 mr-2"
                size={13}
              />
              Projects
            </li>
          </ul>
        </div>
        <div className="my-4">
          <p className="font-lg text-gray-400 width-full mb-3">Dashboards</p>
          <ul className="pb-3">
            <li>
              <div
                className="flex mb-2 cursor-pointer"
                onClick={() => showAccordion("Default")}
              >
                <FaGreaterThan
                  className="text-gray-400 my-auto mr-2"
                  size={10}
                />
                <span className="flex">
                  <GrPieChart className="my-auto mr-1" />
                  Default
                </span>
              </div>
            </li>
            <li>
              <div
                className="flex mb-2 cursor-pointer"
                onClick={() => showAccordion("eCommerce")}
              >
                <FaGreaterThan
                  className="text-gray-400 my-auto mr-2 "
                  size={10}
                />
                <span className="flex">
                  <FiShoppingBag className="my-auto mr-1" />
                  eCommerce
                </span>
              </div>
            </li>
            <li>
              <div
                className="flex mb-2 cursor-pointer"
                onClick={() => showAccordion("Projects")}
              >
                <FaGreaterThan
                  className="text-gray-400 my-auto mr-2"
                  size={10}
                />
                <span className="flex">
                  <BsFolder className="my-auto mr-1" />
                  Projects
                </span>
              </div>
            </li>
            <li>
            <div
                className="flex mb-2 cursor-pointer"
                onClick={() => showAccordion("Online Courses")}
              >
                <FaGreaterThan
                  className="text-gray-400 my-auto mr-2"
                  size={10}
                />
                <span className="flex">
                  <SlBookOpen className="my-auto mr-1" />
                  Online Courses
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="my-4">
          <p className="font-lg text-gray-400 width-full mb-3">Pages</p>
          <ul>
            <li className="flex flex-wrap mb-2">
              <span
                className="flex"
                onClick={() => showAccordion("User Profile")}
              >
                <FaGreaterThan
                  className="text-gray-400 my-auto mr-2"
                  size={10}
                />
                <IoIdCardOutline className="my-auto mr-1 cursor-pointer" />
                User Profile
              </span>
              {selectedLink === "User Profile" && displayAccordion === true && (
                <ul className=" w-full mx-auto">
                  <li className="pl-9 my-1 hover:bg-gray-200 rounded hover:border-2 hover:border-l-black cursor-pointer">
                    Overview
                  </li>
                  <li className="pl-9 my-1 hover:bg-gray-200 rounded hover:border-2 hover:border-l-black cursor-pointer">
                    Projects
                  </li>
                  <li className="pl-9 my-1 hover:bg-gray-200 rounded hover:border-2 hover:border-l-black cursor-pointer">
                    Campaigns
                  </li>
                  <li className="pl-9 my-1 hover:bg-gray-200 rounded hover:border-2 hover:border-l-black cursor-pointer">
                    Documents
                  </li>
                  <li className="pl-9 my-1 hover:bg-gray-200 rounded hover:border-2 hover:border-l-black cursor-pointer">
                    Followers
                  </li>
                </ul>
              )}
            </li>
            <li>
            <div
                className="flex mb-2 cursor-pointer"
                onClick={() => showAccordion("Account")}
              >
                <FaGreaterThan
                  className="text-gray-400 my-auto mr-2"
                  size={10}
                />
                <RxIdCard className="my-auto mr-1" />
                Account
              </div>
            </li>
            <li>
            <div
                className="flex mb-2 cursor-pointer"
                onClick={() => showAccordion("Corporate")}
              >
                <FaGreaterThan
                  className="text-gray-400 my-auto mr-2"
                  size={10}
                />
                <IoIosPeople className="my-auto mr-1" />
                Corporate
              </div>
            </li>
            <li>
            <div
                className="flex mb-2 cursor-pointer"
                onClick={() => showAccordion("Blog")}
              >
                <FaGreaterThan
                  className="text-gray-400 my-auto mr-2"
                  size={10}
                />
                <TbNews className="my-auto mr-1" />
                Blog
              </div>
            </li>
            <li>
            <div
                className="flex mb-2 cursor-pointer"
                onClick={() => showAccordion("Social")}
              >
                <FaGreaterThan
                  className="text-gray-400 my-auto mr-2"
                  size={10}
                />
                <RiWechatLine className="my-auto mr-1" />
                Social
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SidebarLeft;
