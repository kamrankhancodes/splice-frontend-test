import React from 'react'
import MainBody from '../layout/MainBody'
import SidebarLeft from '../layout/SidebarLeft'
import SideBarRight from '../layout/SideBarRight'

const Dashboard = () => {
  return (
    <div className='w-full flex flex-wrap'>
      <SidebarLeft />
      <MainBody />
      <SideBarRight />
    </div>
  )
}

export default Dashboard