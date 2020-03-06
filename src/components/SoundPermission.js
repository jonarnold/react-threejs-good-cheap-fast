import React from 'react';
import './SoundPermission.css';

export default ({setAllowSound}) => {
   return (
      <div class="SoundPermission">
         <div class="SoundPermission__button-group">
            <p>Can I play some fucking sound??</p>
            <button onClick={() => setAllowSound(true)}>Sure</button>
            <button onClick={() => setAllowSound(false)}>Hell no</button>
         </div>
      </div>
   )
 }