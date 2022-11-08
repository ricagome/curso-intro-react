import { useState }  from 'react';
import './styles/TodoCounter.css';

function TodoCounter() {
  const [total, completed] = useState(0);
  return (
    <h1 className="TodoCounter">Has completado 1 de 4 TODOs</h1>
  );
}

export { TodoCounter };