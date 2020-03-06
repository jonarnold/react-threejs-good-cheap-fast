import React from 'react';
import './UI.css';

export default ({toggleSound}) => {
   return (
      <div className="UI">
         <button onClick={toggleSound}>sound on/off</button>
      </div>
   )
}