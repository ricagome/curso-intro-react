import React from 'react';
import { TodoCounter } from "../components/todocounter";
import { TodoSearch } from "../components/todosearch";
import { TodoList } from "../components/todolist";
import { TodoItem } from "../components/todoitem";
import { CreateTodoButton } from "../components/createtodobutton";

function AppUI({
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
                    {searchedTodos.map((value: { text: string; completed: boolean; }, key: React.Key | null | undefined) => (
                        <TodoItem key={key} text={value.text} completed={value.completed}
                            onComplete={() => completeTodo(value.text)}
                            onDelete={() => deleteTodo(value.text)} />
                    ))
                    }
                </TodoList>
                <CreateTodoButton />
            </div>
        </React.Fragment>
    );
}

export { AppUI };