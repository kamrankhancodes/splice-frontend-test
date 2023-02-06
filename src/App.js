import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import NotFound from "./components/404.component"
import Header from './structure/Header.component'
import Footer from './structure/Footer.component'
import Dashboard from './routes/Dashboard'


const App = () => {
  return (
    <>
< Header />
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
< Footer />
</>
  )
}

export default App