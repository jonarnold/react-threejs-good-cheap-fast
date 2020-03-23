import React from 'react'
import SoundButton from './SoundButton';
import arrowImg from '../images/arrow-sm.png';
import About from './About';
import './UISecondary.scss';
import { useSpring, animated as a } from 'react-spring';


export default ({ toggleSound, allowSound }) => {
   const [modalOpen, setModalOpen] = React.useState(false);

   const style = useSpring({ 
      to: {opacity: 1}, 
      from: {opacity: 0},
      delay: 1500,
      config: { mass: 1, tension: 280, friction: 120 }
   })

   return (
      <a.div className="UISecondary" style={style}>
         <SoundButton allowSound={allowSound} toggleSound={toggleSound}/>
         <button onClick={() => setModalOpen(true)} className="UISecondary__about-link">About</button>
         <div className="UISecondary__dragText">Drag to orbit</div>
         <img className="UISecondary__dragArrow" src={arrowImg} alt=""/>
         <About modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </a.div>
   )
}