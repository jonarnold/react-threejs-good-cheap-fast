import React from 'react';
import './UI.css';

export default ({toggleSound, allowSound, selections}) => {

   const evalState = () => {
      if(selections.every(s => s !== 'good')) {
         return 'poo';
      } else if(selections.every(s => s !== 'fast')) {
         return 'slow';
      } else if(selections.every(s => s !== 'cheap')) {
         return 'expensive';
      }
   }

   const getOkPhrase = () => {
      const phrases = ['Ok', 'Got it', 'Check', 'Roger that', 'Understood', 'Very good', 'Fine', 'Alrighty', 'Gotcha', 'Right on', 'Very well', 'Done', 'Noted', 'Fine' ]
      return phrases[Math.floor(Math.random() * phrases.length)];
   }
   
   return (
      <div className="UI">
         {/* <button style={allowSound ? {backgroundColor:'red'} : {backgroundColor:'white'}} onClick={toggleSound}>sound on/off</button> */}
         
            {/* You chose: {selections}
            you get: {evalState()} */}
            {/* <h1>Good, Fast, or Cheap -- Pick any two.</h1> */}
            <h1 className="UI__question">How would you like your project completed?</h1>
            <h2 className="UI__answer">{getOkPhrase()}. It will be {evalState()}.</h2>
         
      </div>
   )
}