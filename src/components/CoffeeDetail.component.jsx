import React from 'react'

const CoffeeDetail = () => {
  return (
    <>
    <div className="dashboard_content pt-11 px-4 bg-gray-100 rounded-lg p-6 mt-4">
    <div className="flex items-center pb-4 justify-between">
      <h3 className="text-lg font-semibold text-[#1C1C1C]">
        Coffee detail page
      </h3>
      <img src={process.env.PUBLIC_URL + "/assets/images/m-logo.png"} alt='m-logo'/>
    </div>
    <div
      className="dashboard_content_list flex justify-between items-end"
    >
      <ul className="flex items-center">
        <li>
          <div
            className="w-full bg-gray-200 rounded-full dark:bg-gray-700 relative h-[28px] w-[168px]"
          >
            <span
              className="absolute left-[10px] top-[2px] text-lg font-medium text-[#1C1C1C]"
              >In Progress / 51%</span
            >
            <div
              className="bg-[#C6C7F8] text-center p-0.5 leading-none rounded-full h-full pl-2 flex items-center"
              style={{width: "45%"}}
            ></div>
          </div>
        </li>
        <li>
          <p>Total Tasks</p>
          <h4>15 / 48</h4>
        </li>
        <li>
          <p>Due Date</p>
          <h4>29 Jan, 2022</h4>
        </li>
        <li>
          <p>Budget Spent</p>
          <h4>$15,000</h4>
        </li>
      </ul>
      <div className="user_images">
        <img src={process.env.PUBLIC_URL + "/assets/images/Avatar-Group.png"} alt='avatar'/>
      </div>
    </div>
  </div>
  </>
  )
}

export default CoffeeDetail