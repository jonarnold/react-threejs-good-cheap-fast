import React from 'react';
import './SoundButton.scss';

export default ({toggleSound, allowSound}) => {
   console.log('Sound Button render wtf!!!');
   return (
      <button onClick={toggleSound} className="SoundButton">
         <div className="SoundButton__label">Sound</div>
         <div className={`SoundButton__pill ${allowSound ? 'SoundButton__pill--active' : null}`}>
            <svg className={`SoundButton__circle ${allowSound ? 'SoundButton__circle--active' : null}`} width="16" height="16">
               <circle cx="8" cy="8" r="7" />
            </svg>
         </div>
      </button>    
   )
}