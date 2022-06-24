import React from 'react'
import { Routes, Route } from 'react-router-dom';
import One from './Rooms/One';
import Three from './Rooms/Three';
import Two from './Rooms/Two';
const Routers = () => {
  return (
        <Routes>
          <Route exact path="/" element={<One/>} />
          <Route exact path="/Oda1" element={<One />} />
          <Route exact path="/Oda2" element={<Two />} />
          <Route exact path="/Oda3" element={<Three />} />
        </Routes>
  )
}

export default Routers