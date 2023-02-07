import React from 'react'
import { activities } from '../sampleData'

const Activities= () => {
  return (
    <div className="notification-col w-full">
        <h5 className='py-2'>Activities</h5>
      {activities.map((activity, index) => {
        return (
          <div key={index} className="notification">
            <div className="icon mr-3">
              <img
                className=" rounded-full"
                src={activity.avatar}
                alt="Rounded avatar"
              />
            </div>
            <div className="notification-inf w-full">
              <p>{activity.message}</p>

              <span>{activity.time.getHours()}:{activity.time.getMinutes()} </span>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Activities