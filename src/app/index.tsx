import React, { useState } from 'react';
import { AppUI } from './AppUI';

import logo from './logo.svg';
import './App.css';

const defaultTodos = [
  { text: 'Instalar', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Maquetear', completed: true },
  { text: 'Routing', completed: false },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  // El estado de nuestra búsqueda
  const [searchValue, setSearchValue] = useState('');
  // El estado de lo completado
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
  let searchedTodos = [];

  // Lógica para filtrar
  if (searchValue.length >= 1) {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  } else {
    searchedTodos = todos;
  }

  // Completar
  const completeTodo = (text: string) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    //newTodos[todoIndex].completed = true;
    newTodos[todoIndex] = {
      text:       newTodos[todoIndex].text,
      completed:  !newTodos[todoIndex].completed
    }
    setTodos(newTodos);
  };
  // Eliminar
  const deleteTodo = (text: string) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <AppUI
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  );
}

export default App;
