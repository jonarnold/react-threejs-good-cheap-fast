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
               <div onClick={() => setModalOpen(false)} className="About__card">
                  <button onClick={() => setModalOpen(false)} className="close">&times;</button>
                  <div className="About__outline">
                     <img className="About__icon About__animation" src={jonImg} alt="Jon Arnold"/>
                     <h1 className="About__title About__animation">An experiment in:</h1>
                     <p className="About__body About__animation">
                        <ul>
                           <li>3D modeling and texturing in Blender</li>
                           <li>3D animation in mobile and desktop browsers</li>
                           <li>React front-end</li>
                           <li>Responsive CSS</li>
                        </ul>
                     </p>
                     
                  </div>
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