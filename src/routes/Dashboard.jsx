import React from 'react'
import MainBody from '../layout/MainBody'
import SidebarLeft from '../layout/SidebarLeft'
import SideBarRight from '../layout/SideBarRight'

const Dashboard = () => {
  return (
    <div className=' flex flex-wrap bg-gray-200'>
      <div className='w-full p-4 m-6 rounded-2xl'>

      <SidebarLeft />
      <MainBody />
      <SideBarRight />
      </div>
    </div>
  )
}

export default Dashboard