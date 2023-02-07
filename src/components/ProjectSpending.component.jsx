import React from 'react'
import { BsCommand, BsSearch } from 'react-icons/bs'
import { BiDotsHorizontalRounded } from "react-icons/bi";
import SpendingDataTable from './SpendingDataTable.component';

const ProjectSpending = () => {
  return (
    <div class="dashboard_block pt-11 px-4 bg-gray-100 mt-8 rounded-xl">
    <div class=" flex items-center pb-4 justify-between">
        <h3 class="text-lg font-semibold text-[#1C1C1C]">Project Spendings</h3>
        <div class=" flex items-center"> 
            <li class="flex items-center relative search-bar mr-2">
                <span class="absolute left-[5px]">
                <BsSearch />
                </span>
                <input type="search" placeholder="Search" />
                <span class="absolute right-[25px]">
                <BsCommand />
                </span>
            </li>
            <BiDotsHorizontalRounded />
        </div>
        
    </div>
    <div class="project-table pt-4 ">
        <div class="relative overflow-x-auto ">
            < SpendingDataTable />
            
        </div>
    </div>
</div>
  )
}

export default ProjectSpending