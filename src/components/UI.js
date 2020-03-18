import React, { useRef } from 'react';
import { useTransition, animated } from 'react-spring';
import './UI.css';
import SoundButton from './SoundButton';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

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
   const classes = useStyles();
   
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
         <SoundButton allowSound={allowSound} toggleSound={toggleSound}/>
         <h1 className="UI__question">How would you like your project completed?</h1>

         {transitions.map(({ item, props, key }) =>
            <animated.div className="UI__answer" key={key} style={props}>{item}</animated.div>
         )}

         <button onClick={() => setModalOpen(true)} className="Website__about-link">About</button>

         <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal} //required for close-clicking on bg
            open={false}
            onClose={() => setModalOpen(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
               timeout: 500,
            }}
            >
            <Fade in={true}>
               <div className="About">
                  <div onClick={() => setModalOpen(false)} className="About__card">
                     <button onClick={() => setModalOpen(false)} className="close">&times;</button>
                     <div className="About__outline">
                        {/* <img className="About__icon About__animation" src={jonImg2} alt="Jon Arnold"/> */}
                        <h1 className="About__title About__animation">About this website</h1>
                        <p className="About__body About__animation">
                        AsdAs dAsd asd asd asd asd asd asd asd asd asd .

                        </p>
                        
                     </div>
                  </div>
               </div>
            </Fade>
         </Modal>


      </div>
   )
}

const useStyles = makeStyles(theme => ({
   modal: {
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
   }
 }));