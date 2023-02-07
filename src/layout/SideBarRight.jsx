import React from 'react'
import Notifications from '../components/Notifications.component'
import Activities from '../components/Activities.component'
import Contacts from '../components/Contacts.component'

const SideBarRight = () => {
    return (
        <aside className="font-medium text-sm w-full flex-wrap md:w-3/12 bg-white border-r border-r-gray-200 md:h-screen overflow-y-auto">
        <div className="m-6">
           < Notifications/>
           < Activities />
           < Contacts />

       </div>










        </aside>
    )
}

export default SideBarRight