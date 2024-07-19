import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalInformation from './Components/Personal_Information';
import WorkExperience from './Components/Work_Experience';
import Education from './Components/Education';
import KeySkill from './Components/KeySkill';
import Header from './Pages/Home/Header/header';
import Template from './Pages/Home/Template';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<PersonalInformation />} />
          <Route path='/workExperience' element={<WorkExperience />} />
          <Route path='/education' element={<Education />} />
          <Route path='/keySkill' element={<KeySkill />} />
          <Route path='/template' element={<Template />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
