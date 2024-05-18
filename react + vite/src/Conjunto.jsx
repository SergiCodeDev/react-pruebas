import { useState } from 'react';

export default function Conjunto() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>En conjunto</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    );
}

function MyButton({ count, onClick }) {
    return (
      <button onClick={onClick}>
        Hiciste clic {count} veces
      </button>
    );
  }