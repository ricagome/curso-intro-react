import React from 'react';
import { TodoCounter } from "../components/todocounter";
import { TodoSearch } from "../components/todosearch";
import { TodoList } from "../components/todolist";
import { TodoItem } from "../components/todoitem";
import { CreateTodoButton } from "../components/createtodobutton";

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}: any) {
    return (
        <React.Fragment>
            <div className="container">
                <TodoCounter total={totalTodos} completed={completedTodos} />
                <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
                <TodoList>
                    {error && <p>Error en la carga, error de servidor!!!</p>}
                    {loading && <p>Estamos cargando los datos, espera!!!</p>}
                    {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!!!</p>}
                    {searchedTodos.map((todo: { text: any; completed: boolean; }) => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList>
                <CreateTodoButton />
            </div>
        </React.Fragment>
    );
}

export { AppUI };