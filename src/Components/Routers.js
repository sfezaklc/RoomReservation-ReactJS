import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import One from '../Rooms/One';
import Three from '../Rooms/Three';
import Two from '../Rooms/Two';
import Four from '../Rooms/Four'
import Five from '../Rooms/Five'
const Routers = () => {
  return (
      <Routes>
        <Route exact path="/" element={<One />} />
        <Route exact path="/Oda1" element={<One />} />
        <Route exact path="/Oda2" element={<Two />} />
        <Route exact path="/Oda3" element={<Three />} />
        <Route exact path="/Oda4" element={<Four />} />
        <Route exact path="/Oda5" element={<Five />} />
      </Routes>
  )
}

export default Routers