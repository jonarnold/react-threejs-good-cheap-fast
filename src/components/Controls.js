import React from 'react';
import './Controls.css';

export default ({setSelection}) => {
   return (
      <div className="Controls">
         <button onClick={() => setSelection('goodFast')}>goodFast</button>
         <button onClick={() => setSelection('fastCheap')}>fastCheap</button>
         <button onClick={() => setSelection('cheapGood')}>cheapGood</button>
      </div>
   )
}