import React, { useRef } from 'react';
import { useSpring, useTransition, animated } from 'react-spring';
import './UI.scss';

export default ({ selections }) => {
   
   const ref = useRef([])
   const [ items, setItems ] = React.useState([]);
   const transitions = useTransition(items, null, {
      from: { transform: 'translate3d(0,-10px,0)', opacity: '0' },
      enter: { transform: 'translate3d(0,0px,0)', opacity: '1' },
      leave: { transform: 'translate3d(0,-10px,0)', opacity: '0' },
      config: { mass: 1, tension: 120, friction: 14 }
      });
   
   React.useEffect(() => {
      update();
   }, [selections]);


   const style = useSpring({ 
      to: {opacity: 1}, 
      from: {opacity: 0},
      config: { mass: 1, tension: 280, friction: 120 }
   })


   const update = () => {
      ref.current.map(clearTimeout)
      ref.current = []
      setItems([]);
      ref.current.push(setTimeout(() => setItems([getResultPhrase()]), 1000))
    }

   const getOkPhrase = () => {
      const phrases = [
         'Ok',
         'Oookay',  
         'Alrighty', 
         'Alright',
         'Fine',
         'Fine',
      ]
      return phrases[Math.floor(Math.random() * phrases.length)];
   }

   const getResultPhrase = () => {

      if(selections.length === 0) {
         return <span>Select any two...</span>;
      } else if (selections.length === 1) {
         return <span>Ok, select one more...</span>;
      } 

      if(selections.every(s => s !== 'good')) {
         return <span>{getOkPhrase()}, but it will be <span className="UI__answer--strong">poo</span>.</span>;
      } else if(selections.every(s => s !== 'fast')) {
         return <span>{getOkPhrase()}, but it will <span className="UI__answer--strong">take a while</span>.</span>;
      } else if(selections.every(s => s !== 'cheap')) {
         return <span>{getOkPhrase()}, but it will be <span className="UI__answer--strong">expensive</span>.</span>
      }
   }
   
   return (
      <animated.div className="UI" style={style}>
         <h1 className="UI__question">How would you like your project completed?</h1>
         {transitions.map(({ item, props, key }) =>
            <animated.div className="UI__answer" key={key} style={props}>{item}</animated.div>
         )}
      </animated.div>
   )
}

