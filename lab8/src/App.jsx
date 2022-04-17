import "./App.css";
import Todo from "./components/Todo/Todo";
import AddTodo from "./components/AddTodo/AddTodo";
import { React, useState } from "react";

const App = () => {
    const [inputTodo, setInputTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleInput = (e) => {
        setInputTodo(e.target.value);
    };

    const addTodo = () => {
        if (inputTodo.length !== 0) {
            setTodoList(
                todoList.concat([
                    {
                        todo: inputTodo,
                        id: (Math.random() * Math.random()).toString(36).split("").slice(2).join(""),
                        complete: false,
                        index: todoList.length,
                    },
                ])
            );
            setInputTodo("");
        }
    };

    const deleteAll = () => {
        setTodoList([]);
    };

    const keyPress = (e) => {
        if (e.key === "Enter") addTodo();
    };

    const deleteTodo = (id) => {
        setTodoList(todoList.filter((element) => element.id !== id));
    };

    const changeComplete = (id) => {
        setTodoList([
            ...todoList.map((todo) => (todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo })),
        ]);
    };

    return (
        <div className="card">
            <h2 className="title">todo list</h2>
            <AddTodo
                handleInput={(e) => handleInput(e)}
                onKeyPress={(e) => keyPress(e)}
                addTodo={() => addTodo()}
                deleteAll={() => deleteAll()}
                value={inputTodo}
            />
            {todoList.map((element, index) => {
                return (
                    <Todo
                        key={element.id}
                        todo={element.todo}
                        index={index}
                        id={element.id}
                        complete={element.complete}
                        changeComplete={changeComplete}
                        deleteTodo={deleteTodo}
                    />
                );
            })}
        </div>
    );
};

export default App;
