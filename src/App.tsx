import React, { useState }  from 'react';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButtom } from "./CreateTodoButtom";
import logo from './logo.svg';
import './App.css';

const todos = [
  { text:'Cortar cebolla', completed:false },
  { text:'Tormar el curso de intro a react', completed:false },
  { text:'Llorar con la llorona', completed:false }
];

function App() {


  return (
    <React.Fragment>
      <header className="App-header">
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {todos.map((value, key) => (
            <TodoItem key={key} text={value.text} />
          ))
          }
        </TodoList>
        <CreateTodoButtom />
      </header>
    </React.Fragment>
  );
}

export default App;
