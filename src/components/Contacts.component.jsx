import React from 'react'
import { contacts } from '../sampleData';

const Contacts= () => {
  return (
    <div className="notification-col">
    <h5 className='py-2'>Contacts</h5>
  {contacts.map((activity, index) => {
    return (
      <div key={index} className="notification">
        <div className="icon mr-3">
          <img
            className=" rounded-full"
            src={activity.avatar}
            alt="Rounded avatar"
          />
        </div>
        <div className="notification-inf">
          <p>{activity.name}</p>
        </div>
      </div>
    );
  })}
</div>
  )
}

export default Contacts