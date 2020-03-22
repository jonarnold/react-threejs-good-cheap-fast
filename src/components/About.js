import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import jonImg from '../images/jon.jpg';
import './About.scss';

export default ({modalOpen, setModalOpen}) => {
   const classes = useStyles();
   return (
      <Modal
         aria-labelledby="transition-modal-title"
         aria-describedby="transition-modal-description"
         className={classes.modal} //required for close-clicking on bg
         open={modalOpen}
         onClose={() => setModalOpen(false)}
         closeAfterTransition
         BackdropComponent={Backdrop}
         BackdropProps={{
            timeout: 500,
            classes: {
               root: classes.background
             }
         }}
         >
         <Fade in={modalOpen}>
            <div className="About">
               <button onClick={() => setModalOpen(false)} className="close">&times;</button>
               <img className="About__icon About__animation" src={jonImg} alt="Jon Arnold"/>
               <h1 className="About__title About__animation">An experiment in...</h1>
               <div className="About__body About__animation">
                  <ul>
                     <li>3D modeling with <a href="https://www.blender.org/" target="_blank" rel="noreferrer noopener">Blender</a></li>
                     <li>3D in the browser using <a href="https://threejs.org/" target="_blank" rel="noreferrer noopener">ThreeJS</a>, <a href="https://github.com/react-spring/react-three-fiber" target="_blank" rel="noreferrer noopener">react-three-fiber</a></li>
                     <li>A responsive React front end</li>
                     <li>React transtions and animation using <a href="https://www.react-spring.io/" target="_blank" rel="noreferrer noopener">React Spring</a></li>
                  </ul>
               </div>
            </div>
         </Fade>
      </Modal>
   )
}

const useStyles = makeStyles(theme => ({
   modal: {
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
   },
   background: {
      backgroundColor: 'rgba(255, 255, 255, .6)',
      backdropFilter: 'blur(5px)'  
    },
 }));