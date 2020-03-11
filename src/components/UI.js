import React from 'react';
import './UI.css';

export default ({toggleSound, allowSound, selections}) => {

   const evalState = () => {
      if(selections.every(s => s !== 'good')) {
      return <span>It will be <span className="UI__answer--strong">poo</span>.</span>;
      } else if(selections.every(s => s !== 'fast')) {
         return <span>It will <span className="UI__answer--strong">take a while</span>.</span>;
      } else if(selections.every(s => s !== 'cheap')) {
         return <span>It will be <span className="UI__answer--strong">expensive</span>.</span>
      }
   }

   const getOkPhrase = () => {
      const phrases = ['Ok', 'Got it', 'Check', 'Roger that', 'Understood', 'Very good', 'Fine', 'Alrighty', 'Gotcha', 'Right on', 'Very well', 'Noted', 'Fine' ]
      return phrases[Math.floor(Math.random() * phrases.length)];
   }
   
   return (
      <div className="UI">
         {/* <button style={allowSound ? {backgroundColor:'red'} : {backgroundColor:'white'}} onClick={toggleSound}>sound on/off</button> */}
         
            {/* You chose: {selections}
            you get: {evalState()} */}
            {/* <h1>Good, Fast, or Cheap -- Pick any two.</h1> */}
            <h1 className="UI__question">How would you like your project completed?</h1>
            <h2 className="UI__answer">{getOkPhrase()}. {evalState()}</h2>
         
      </div>
   )
}