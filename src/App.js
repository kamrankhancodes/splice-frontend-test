import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import NotFound from "./components/404.component"
import Dashboard from './routes/Dashboard'


const App = () => {
  return (
    <>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
</>
  )
}

export default App