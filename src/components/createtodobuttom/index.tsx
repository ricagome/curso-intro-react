import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import './CreateTodoButtom.css';

function CreateTodoButtom(props: any) {
  const onClickButton = (msg: string) => {
    alert(msg);
  };

  return (
    <>
      {/* ✅ */}
      <button
        className="CreateTodoButton"
        onClick={() => onClickButton('Aquí se debería abrir el modal')}
      >
        +
      </button>
      {/* ❌ */}
      <button
        className="CreateTodoButton"
        onClick={() => onClickButton('Aquí se debería abrir el modal')}
      >
        +
      </button>
    </>
  );
}

export { CreateTodoButtom };