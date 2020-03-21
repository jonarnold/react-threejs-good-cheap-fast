import React from 'react'
import SoundButton from './SoundButton';
import arrowImg from '../images/arrow-sm.png';
import About from './About';
import './UISecondary.scss';


export default ({ toggleSound, allowSound }) => {
   const [modalOpen, setModalOpen] = React.useState(false);
   return (
      <div className="UISecondary">
         <SoundButton allowSound={allowSound} toggleSound={toggleSound}/>
         <button onClick={() => setModalOpen(true)} className="UISecondary__about-link">About</button>
         <div className="UISecondary__dragText">Drag to orbit</div>
         <img className="UISecondary__dragArrow" src={arrowImg} alt=""/>
         <About modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </div>
   )
}