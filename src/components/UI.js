import React, { useRef } from 'react';
import { useTransition, animated } from 'react-spring';
import './UI.scss';
import SoundButton from './SoundButton';
import arrowImg from '../images/arrow-sm.png';
import About from './About';

const getOkPhrase = () => {
   const phrases = ['Ok', 'Got it', 'Check', 'Roger that', 'Understood', 'Very good', 'Fine', 'Alrighty', 'Gotcha', 'Right on', 'Very well', 'Noted', 'Fine' ]
   return phrases[Math.floor(Math.random() * phrases.length)] + '.';
}

export default ({toggleSound, allowSound, selections }) => {
   
   const ref = useRef([])
   const [ items, setItems ] = React.useState([]);
   const transitions = useTransition(items, null, {
      from: { transform: 'translate3d(0,-10px,0)', opacity: '0' },
      enter: { transform: 'translate3d(0,0px,0)', opacity: '1' },
      leave: { transform: 'translate3d(0,-10px,0)', opacity: '0' },
      });

   const [modalOpen, setModalOpen] = React.useState(false);
   
   React.useEffect(() => {
      update();
   }, [selections]);


   const update = () => {
      ref.current.map(clearTimeout)
      ref.current = []
      setItems([]);
      const ok = getOkPhrase();
      ref.current.push(setTimeout(() => setItems([ok, '']), 1000))
      ref.current.push(setTimeout(() => setItems([ok, getResultPhrase()]), 1300))
    }


   const getResultPhrase = () => {
      if(selections.every(s => s !== 'good')) {
      return <span>It will be <span className="UI__answer--strong">poo</span>.</span>;
      } else if(selections.every(s => s !== 'fast')) {
         return <span>It will <span className="UI__answer--strong">take a while</span>.</span>;
      } else if(selections.every(s => s !== 'cheap')) {
         return <span>It will be <span className="UI__answer--strong">expensive</span>.</span>
      }
   }
   
   return (
      <div className="UI">
         <h1 className="UI__question">How would you like your project completed?</h1>

         {transitions.map(({ item, props, key }) =>
            <animated.div className="UI__answer" key={key} style={props}>{item}</animated.div>
         )}

         <SoundButton allowSound={allowSound} toggleSound={toggleSound}/>
         <button onClick={() => setModalOpen(true)} className="UI__about-link">About</button>
         <div className="UI__dragText">Drag to orbit</div>
         <img className="UI__dragArrow" src={arrowImg} alt=""/>

         <About modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </div>
   )
}

