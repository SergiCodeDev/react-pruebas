import './App.css'

import { useState } from 'react';

export default function Separado() {
  return (
    <div className='caja'>
      <div>
        <h1>Separado</h1>
        <MyButton />
        <MyButton />
      </div>
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Hiciste clic {count} veces
    </button>
  );
}

