import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Loading.scss';

export default (props) => {
   
   const tween = useSpring({opacity: props.modelLoaded ? 0 : 1})
   return (
     <animated.div style={tween} className="Loading">
         <div className="Loading__spinner">

         </div>
         <div className="Loading__text">
            Loading
         </div>
     </animated.div>
   )
 }