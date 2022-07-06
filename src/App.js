import './App.css';
import React, { useState, useEffect } from 'react';
import Sidebar from './Components/Sidebar';
import Routers from './Components/Routers';
import ReservedDaysProvider from './Contexts/ReservedDays';
function App() {


  return (
    <ReservedDaysProvider>
      <div className="App">
        <div style={{ width: '100%', display: 'flex' }}>
          <div style={{ width: '20%', height: '100vh' }}>
            <Sidebar></Sidebar>
          </div>
          <div style={{ width: '80%', marginLeft: '20px' }}>
              <Routers></Routers>
          </div>
        </div>
      </div>
    </ReservedDaysProvider>
  );
}

export default App;
