import React from "react";
import {notificationsArray} from '../sampleData'

const Notifications = () => {
  
  return (
    <div className="notification-col">
        <h5 className="py-2">Notifications</h5>
      {notificationsArray.map((notification, index) => {
        return (
          <div key={index} className="notification w-full">
            <div className="icon mr-3 bg-red-100">
              <img
                className=" rounded-full"
                src={notification.avatar}
                alt="Rounded avatar"
              />
            </div>
            <div className="">
              <p className="w-full">{notification.message}</p>

              <span>{notification.time.getHours()}:{notification.time.getMinutes()} </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notifications;
