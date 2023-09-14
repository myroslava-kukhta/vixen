import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
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
                dialogs={props.state.dialogs}
                messages={props.state.messages}
              />}
            />

            <Route path='/profile'
              element={<Profile 
                posts={props.state.posts} 
              />}
            />

            <Route path='/music'
              element={<Music />}
            />

            <Route path='/settings'
              element={<Settings />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
