import React from 'react';
import './UI.css';
import SoundButton from './SoundButton';

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

   const [ okPhrase, setOkPhrase ] = React.useState(getOkPhrase());

   React.useEffect(() => {
      setOkPhrase(getOkPhrase());
   }, [selections]);
   
   return (
      <div className="UI">
         <SoundButton allowSound={allowSound} toggleSound={toggleSound}/>
         <h1 className="UI__question">How would you like your project completed?</h1>
         <p className="UI__answer">{okPhrase}.</p>
         <p className="UI__answer">{evalState()}</p>
      </div>
   )
}