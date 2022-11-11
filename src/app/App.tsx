import React, { useState } from 'react';
import { TodoCounter } from "../components/todocounter";
import { TodoSearch } from "../components/todosearch";
import { TodoList } from "../components/todolist";
import { TodoItem } from "../components/todoitem";
import { CreateTodoButtom } from "../components/createtodobuttom";
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
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text: string) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };


  return (
    <React.Fragment>
      <div className="container">
        <TodoCounter total={totalTodos} completed={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {searchedTodos.map((value, key) => (
            <TodoItem key={key} text={value.text} completed={value.completed} onComplete={() => completeTodo(value.text)}
              onDelete={() => deleteTodo(value.text)} />
          ))
          }
        </TodoList>
        <CreateTodoButtom />
      </div>
    </React.Fragment>
  );
}

export default App;
