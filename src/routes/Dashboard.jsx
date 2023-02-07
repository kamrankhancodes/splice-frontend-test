import React from 'react'
import MainBody from '../layout/MainBody'
import SidebarLeft from '../layout/SidebarLeft'
import SideBarRight from '../layout/SideBarRight'

const Dashboard = () => {
  return (
      <div className='flex flex-wrap w-full md:h-screen'>

      <SidebarLeft />
      <MainBody />
      <SideBarRight />
      </div>
  )
}

export default Dashboard