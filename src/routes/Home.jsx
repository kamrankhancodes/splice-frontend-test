import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='text-xl mx-auto w-full text-center p-5'>

      <Link to="/dashboard">
        CLick here to view dashboard
      </Link>
    </div>
  )
}

export default Home