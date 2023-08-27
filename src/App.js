import React,{useState, useEffect} from 'react';
import './App.css';

import NavBar from './component/NavBar';
import {
  Routes, Route,
  BrowserRouter as Router
} from 'react-router-dom';
import FileUpload from './component/upload';
import SkincareRoutine from './component/SkincareRoutine';
import IngredientChecker from './component/IngredientChecker';
import SideTag from './component/SideTag';
import ChatButton from './component/ChatButton';
import CombinationProducts from './component/CombinationProducts';
import DryProducts from './component/DryProducts';
import OilyProducts from './component/OilyProducts';
import Register from './component/Register';
import RoutineOily from './component/RoutineOily';
import RoutineDry from './component/RoutineDry';
import RoutineCombination from './component/RoutineCombination';
import Feature from './component/Features';
import Dermatologist from './component/Dermatologist';
import Navbar from './component/NavBar';

function App() {
  return (
     <>
     <Router>
     
       <Navbar/>
       <SideTag/>
     
       <ChatButton/>
         <Routes>
         <Route exact path="/" element={<FileUpload/>} />
         <Route exact path="/register" element={<Register />} />
         <Route exact path="/chatwithdermatologist" element={<Dermatologist />} />
            <Route exact path="/about" element={<Feature/>} />
            <Route exact path="/skinCareRoutine" element={<SkincareRoutine/>} />
            <Route exact path="/IngredientChecker" element = {<IngredientChecker/>} />
            <Route exact path="/combination" element={<CombinationProducts skinType="Combination" />} />
            <Route exact path="/Dry" element={<DryProducts skinType="Dry" />} />
            <Route exact path="/Oily" element={<OilyProducts skinType="Oily" />} />
            <Route exact path="/routineoily" element={<RoutineOily skinType="Oily" />} />
            <Route exact path="/routinedry" element={<RoutineDry  skinType="Dry" />} />
            <Route exact path="/routinecombination" element={<RoutineCombination skinType="Combination" />} />
         </Routes>
     </Router>
   </>
  );
}


export default App;
