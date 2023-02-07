import { BsArrowCounterclockwise, BsCommand, BsLayoutSidebar, BsSearch, BsSun } from "react-icons/bs"
import { AiOutlineStar } from "react-icons/ai"
import { GrNotification } from "react-icons/gr"


const Header = ()=>{
    return(
        <header className=" text-sm header flex flex-wrap items-center px-8 py-6 justify-between w-full">

            <div className="nav-bar-left flex items-center">
              <ul className="flex items-center">
                <li>
                  < BsLayoutSidebar />
                </li>
                <li>
                  < AiOutlineStar />
                </li>
                <li><a href="/">Dashboards</a></li>
                <li>/</li>
                <li><a href="/">Default</a></li>
              </ul>
            </div>
            <div className="nav-bar-right flex items-center">
              <ul className="flex items-center">
                <li className="flex items-center relative search-bar">
                  <span className="absolute left-[5px]">
                    <BsSearch />
                  </span>
                  <input type="search" placeholder="Search" />
                  <span className="absolute right-[25px] flex my-auto">
                    <BsCommand />
                  </span>
                </li>
                <li>
                 < BsSun />
                </li>
                <li>
                 < BsArrowCounterclockwise/>
                </li>
                <li>
                < GrNotification />
                </li>
                <li>
                < BsLayoutSidebar />
                </li>
              </ul>
            </div>
          
        </header>
    )
}

export default Header