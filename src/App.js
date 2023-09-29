import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
// import Sidebar from './components/Sidebar/Sidebar';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div class='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*'
              element={<Dialogs 
                data={props.state.dialogsPage}
              />}
            />

            <Route path='/profile'
              element={<Profile 
                data={props.state.profilePage} 
                dispatch={props.dispatch}
              />}
            />

            <Route path='/music'
              element={<Music />}
            />

            <Route path='/settings'
              element={<Settings />}
            />

          <Route path='/sidebar'
              element={<Profile 
                data={props.state.sidebarPage} 
              />}
            />
            </Routes>
        </div>
        
        <Sidebar />
      </div>
    </BrowserRouter>
  );
}

export default App;
