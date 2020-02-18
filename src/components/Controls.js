import React from 'react';
import './Controls.css';

export default ({setSelection}) => {
   const [selectedButtons, setSelectedButtons] = React.useState(['good', 'cheap'])

   const isSelected = (id) => {
      return selectedButtons.includes(id);
   }

   const handleClick = (id) => {
      //keep last button, make it first
      let updatedButtons = selectedButtons.slice(1, 2);

      //add new last button
      setSelectedButtons(updatedButtons.concat([id]));
   }

   const getResult = () => {
      if(selectedButtons.every(s => s !== 'good')) {
         setSelection('fastCheap');
         return 'shit!'
      } else if(selectedButtons.every(s => s !== 'fast')) {
         setSelection('cheapGood');
         return 'slow!'
      } else if(selectedButtons.every(s => s !== 'cheap')) {
         setSelection('goodFast');
         return '$$ af!'
      }
   }

   return (
      <div className="Controls">
         <p>Pick any two...</p>
         {/* <button onClick={() => setSelection('goodFast')}>goodFast</button>
         <button onClick={() => setSelection('fastCheap')}>fastCheap</button>
         <button onClick={() => setSelection('cheapGood')}>cheapGood</button> */}
         <button onClick={() => handleClick('good')} className={isSelected('good') ? 'selected' : null} id='good'>Good</button>
         <button onClick={() => handleClick('fast')} className={isSelected('fast') ? 'selected' : null} id='fast'>Fast</button>
         <button onClick={() => handleClick('cheap')} className={isSelected('cheap') ? 'selected' : null} id='cheap'>Cheap</button>
         <p>So it'll be: {getResult()}</p>
      </div>
   )
}