import React from 'react';
import './TodoCounter.css';

function TodoCounter(props:{total: number, completed: number}) {
  return (
    <h1 className="TodoCounter">Has completado {props.completed} de {props.total} TODOs</h1>
  );
}

export { TodoCounter };