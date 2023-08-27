import React, { useState } from "react";
import './Styles/CombinationProducts.css'
import { SkincareQuiz } from './Quiz';
import SkinType from './VisuallySkintype';
import Form from "./Form";
import Recommend from "./Rec";

export default function Firstpage({ showQuiz, showVisually,showConcerns}) {

  return (
    <>
      <div className="container-first-page">
        <div className="flex">
          <div>
            {showQuiz && <SkincareQuiz />}
            {showVisually && <SkinType />}
            {showConcerns && <Recommend/>}
          </div>
         
        </div>



      </div>
    </>
  );
}

