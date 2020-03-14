import React from 'react';
import './UI.css';
import SoundButton from './SoundButton';

const getOkPhrase = () => {
   const phrases = ['Ok', 'Got it', 'Check', 'Roger that', 'Understood', 'Very good', 'Fine', 'Alrighty', 'Gotcha', 'Right on', 'Very well', 'Noted', 'Fine' ]
   return phrases[Math.floor(Math.random() * phrases.length)];
}

const evalState = (s) => {
   if(s.every(s => s !== 'good')) {
   return <span>It will be <span className="UI__answer--strong">poo</span>.</span>;
   } else if(s.every(s => s !== 'fast')) {
      return <span>It will <span className="UI__answer--strong">take a while</span>.</span>;
   } else if(s.every(s => s !== 'cheap')) {
      return <span>It will be <span className="UI__answer--strong">expensive</span>.</span>
   }
}

export default ({toggleSound, allowSound, selections}) => {
   console.log("RENDERRRRRRRR");
   
   
   const [ okPhrase, setOkPhrase ] = React.useState(getOkPhrase());
   const [ show, setShow ] = React.useState(false);

   console.log('wtf', show);
   
   let delay;
   React.useEffect(() => {
      setShow(false);
      delay = window.setTimeout(() => {
         console.log("show")
         setShow(true);
         setOkPhrase(getOkPhrase());
      }, 600)

      return () => {
         setShow(false);
         window.clearTimeout(delay);
         console.log("CLEAN")
      }

   }, [selections]);
   
   return (
      <div className="UI">
         <SoundButton allowSound={allowSound} toggleSound={toggleSound}/>
         <h1 className="UI__question">How would you like your project completed?</h1>
         <p style={show ? {opacity:'1'} : {opacity:'0'}} className="UI__answer">{okPhrase}.</p>
         <p style={show ? {opacity:'1'} : {opacity:'0'}} className="UI__answer">{evalState(selections)}</p>
      </div>
   )
}