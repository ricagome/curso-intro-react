import React, { useState } from 'react';
import { AppUI } from './AppUI';
import logo from './logo.svg';
import './App.css';

//const defaultTodos = [
//  { text: 'Instalar', completed: true },
//  { text: 'Tomar el cursso de intro a React', completed: false },
//  { text: 'Maquetear', completed: true },
//  { text: 'Routing', completed: false },
//];

function useLocalStorage(itemName: string, initialValue: string[]) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  // El estado inicial por defecto
  const [item, setItem] = useState(initialValue);

  // Envio de efectos
  React.useEffect(() => {
    setTimeout(() => {
      try {
        // Local storage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem('Todos_V1', JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }, 2000)
  })

  // Salvar datos en localStorage
  const saveItem = (newItem: any) => {
    try {
      const stringifyItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyItem);
      setItem(newItem);
    } catch (error) {
      setError(true);
    }
  }

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {
  // Llamado al hook
   const { item: todos,
    saveItem: saveTodos, loading, error} = useLocalStorage('Todos_V1',[]);
  // El estado de nuestra búsqueda
  const [searchValue, setSearchValue] = useState('');
  // El estado de lo completado { target: { ompleted: any; }; }
  const completedTodos = todos.filter(todo => !!todo[1]).length;
  const totalTodos = todos.length;
  // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
  let searchedTodos = [];

  // Lógica para filtrar
  if (searchValue.length >= 1) {
    searchedTodos = todos.filter((todo: { text: any; }) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  } else {
    searchedTodos = todos;
  }

  // Completar
  const completeTodo = (text: string) => {
    const todoIndex = todos.findIndex((todo: { text: string; }) => todo.text === text);
    const newTodos = [...todos];
    //newTodos[todoIndex].completed = true;
    newTodos[todoIndex] = {
      text: newTodos[todoIndex].text,
      completed: !newTodos[todoIndex].completed
    }
    saveTodos(newTodos);
  };

  // Eliminar
  const deleteTodo = (text: string) => {
    const todoIndex = todos.findIndex((todo: { text: string; }) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };


  return (
    <AppUI
      loading={loading}
      error={error}
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
