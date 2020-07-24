import React from "react";
import './Work.css'
import Compensation from './Compensation managment.jpg';
import performance from './Performance-Appraisal.png';
import talent from './talent-acquisition.jpg';
import training from './Training and benefits.jpg';
import Navbar from "../navbar/Navbar";


const Work = () => {
  return (
    <div>
    <div className="cards">
      <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img
            className="row___picture"
            src= {Compensation}
            alt= 'Compensation managment'
          ></img>
        </div>
        <div className="card-back">
          
          <h1>Compensation managment</h1>
          <ul>
            <li>
              <strong>Description:</strong>
              <p>review salary for employee for the work they do . Some types of compensation include salary, 
              bonuses, and benefit packages. </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img
            className="row___picture"
            src= {performance}
            alt= 'Performance Appraisal'
          ></img>
        </div>
        <div className="card-back">
          
          <h1>Performance Appraisal</h1>
          <ul>
            <li>
              <strong>Description:</strong>
              <p>Manage individual performance of coworkers. 
                An overall performance summary is
               prepared after the evaluations are done </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img
            className="row___picture"
            src= {talent}
            alt= 'Talent acquisition'
          ></img>
        </div>
        <div className="card-back">
          
          <h1>Talent acquisition</h1>
          <ul>
            <li>
              <strong>Description:</strong>
              <p>Identifying and recruiting skilled workers to meet the organizational needs</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
     
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img
            className="row___picture"
            src= {training}
            alt= 'Training and development'
          ></img>
        </div>
        <div className="card-back">
         <h1>Training and development</h1>
          <ul>
            <li>
              <strong>Description:</strong>
              <p>develop short term programs designed to 
              help improve processes and performance of each coworker</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  
   </div>
    </div>
    )}

    export default Work;