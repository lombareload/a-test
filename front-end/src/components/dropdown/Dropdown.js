import React, { useState } from 'react';
import './Dropdown.scss';

function Dropdown({items = [], value, setValue, multiColumn = false}) {
  let [open, setOpen] = useState(false);
  return (
    <div className="dropdown">
      <button onClick={() => setOpen(!open)} className="open" >{value.text || value}</button>
      {open && (<div className={`values ${multiColumn && 'multi-column'}`}>
        {items.map(i =>
          (<button key={i.value || i} onClick={() => {setValue(i); setOpen(false);}}>{i.text || i}</button>)
        )}
      </div>)}
    </div>
  );
}

export default Dropdown;