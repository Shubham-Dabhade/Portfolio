import React from 'react';
import "./circularProgressBar.css";

const CircularProgressBar = ({value}) => {
    const offset = 345.4*((100-value)/100);
    const style={
      strokeDashoffset:offset
    }

  return (
    <>
    <div className='outerCircle'>
        <div className="innerText">
            {value}%
        </div>
    </div>

    <svg className="svg-pi svg-indicator">
        <circle className="svg-indicator-track" />
        <circle className="svg-indicator-indication" style={style}/>
    </svg>
    <svg className='extra'  xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e1e" />
               <stop offset="100%" stopColor="#e9a21e" />
            </linearGradient>
         </defs>
    </svg>
    </>
  )
}

export default CircularProgressBar;