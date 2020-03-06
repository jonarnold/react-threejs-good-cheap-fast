import React from 'react';
import './UI.css';

export default ({toggleSound, allowSound, selections}) => {

   const evalState = () => {
      if(selections.every(s => s !== 'good')) {
         return 'shit';
      } else if(selections.every(s => s !== 'fast')) {
         return 'slow';
      } else if(selections.every(s => s !== 'cheap')) {
         return 'expensive';
      }
   }
   
   return (
      <div className="UI">
         <button style={allowSound ? {backgroundColor:'red'} : {backgroundColor:'white'}} onClick={toggleSound}>sound on/off</button>
         <div>
            You chose: {selections}
            you get: {evalState()}
         </div>
      </div>
   )
}