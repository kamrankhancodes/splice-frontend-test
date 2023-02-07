import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { sependingData } from "../sampleData";

const SpendingDataTable = () => {
  const textColorStatus = {
    progress: "text-purple-500",
    rejected: "text-gray-500",
    completed: "text-green-500",
    approved: "text-yellow-500",
    pending: "text-blue-500",
  };
  return (
    <table class="w-full text-sm text-left text-gray-500 ">
      <thead class="text-xs text-gray-400 font-normal uppercase border-b-2 border-b-gray-300">
        <tr>
          <th scope="col" class=" py-3">
            Manager
          </th>
          <th scope="col" class=" py-3">
            Date
          </th>
          <th scope="col" class=" py-3">
            Amount
          </th>
          <th scope="col" class=" py-3">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {sependingData.map((data, index) => {
          return (
            <tr class="">
              <td
                key={index}
                class=" flex items-center py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                <img src={data.image} className="w-10 h-10 rounded-full mr-2" alt="avatar" />
                {data.name}
              </td>
              <td class=" py-4">{data.time.toLocaleDateString()}</td>
              <td class=" py-4">$942.00</td>
              <td class=" flex items-center py-4">
                <span className={`flex ${textColorStatus[data.status]}`}>
                  <GoPrimitiveDot className="my-auto mr-2" size={13} />
                  {data.status}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SpendingDataTable;
