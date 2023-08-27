import React from 'react'
import { Link } from 'react-router-dom'
import img from './Styles/logo.png'


export default function Navbar() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg " style={{ color:"white"}}>
    <div  className="container-fluid">
    <Link className="navbar-brand" to="/" style={{ textDecoration: "none"}}>
    <img src={img} alt="Logo" style={{width: "85%"}} />
</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" >
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to ="/" style={{ textDecoration: "none", fontSize: "20px",fontWeight:"bold", color:'white' }}
             onMouseEnter={(e) => {
              e.target.style.textDecoration = "underline";
              e.target.style.textDecorationThickness = "2px";
              e.target.style.textDecorationColor = "white";
            }}
              onMouseLeave={(e) => e.target.style.textDecoration = "none" }>Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/about" style={{ textDecoration: "none", fontSize: "20px" ,fontWeight:"bold", color:'white'}}
           onMouseEnter={(e) => {
            e.target.style.textDecoration = "underline";
            e.target.style.textDecorationThickness = "2px";
            e.target.style.textDecorationColor = "black";
          }}
            onMouseLeave={(e) => e.target.style.textDecoration = "none" }>
           About
          </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/skinCareRoutine"style={{ textDecoration: "none", fontSize: "20px",fontWeight:"bold" , color:'white'}} 
             onMouseEnter={(e) => {
              e.target.style.textDecoration = "underline";
              e.target.style.textDecorationThickness = "2px";
              e.target.style.textDecorationColor = "white";
            }}
             onMouseLeave={(e) => e.target.style.textDecoration = "none" }
            >SkinCare Routine</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/"></Link>
          </li>
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ textDecoration: "none", fontSize: "20px" ,fontWeight:"bold", color:'white'}}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = "underline";
            e.target.style.textDecorationThickness = "2px";
            e.target.style.textDecorationColor = "white";
          }}
           onMouseLeave={(e) => e.target.style.textDecoration = "none" }>
            Skin Concerns
          </Link>
          <ul className="dropdown-menu ">
           
            <li><Link className="dropdown-item" to="/IngredientChecker" style={{ textDecoration: "none", fontSize: "20px",fontWeight:"bold" }}>Ingredient Checker</Link></li>
            <li><Link className="dropdown-item" to="/chatwithdermatologist" style={{ textDecoration: "none", fontSize: "20px" ,fontWeight:"bold"}}>Chat with dermatologist</Link></li>
          </ul>
          </li>
          </ul>
      </div>
    </div>
  </nav>
  


</>





  )
}
