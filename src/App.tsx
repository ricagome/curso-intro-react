import React, { useState } from 'react';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButtom } from "./CreateTodoButtom";
import logo from './logo.svg';
import './App.css';


const defaultTodos = [
  { text: 'Instalar', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Maquetear', completed: false },
  { text: 'Routing', completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  // El estado de nuestra búsqueda
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
  let searchedTodos = [];

  // Lógica para filtrar
  if (searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <React.Fragment>
      <div className="container">

        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {searchedTodos.map((value, key) => (
            <TodoItem key={key} text={value.text} completed={value.completed} />
          ))
          }
        </TodoList>
        <CreateTodoButtom />

      </div>
    </React.Fragment>
  );
}

export default App;
