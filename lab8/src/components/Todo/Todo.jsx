import React, { useState } from "react";
import TrashButton from "../TrashButton/TrashButton";
import "./Todo.css";

const Todo = (props) => {
    const [newTodo, setNewTodo] = useState(props.todo);
    const classesChecker = ["checker"];
    const classesTodo = ["todoText"];
    if (props.complete) {
        classesChecker.push("done");
        classesTodo.push("done");
    }
    const editTodo = (e) => {
        setNewTodo(e.target.value);
    };

    return (
        <div className="todo">
            <div className={classesChecker.join(" ")} onClick={() => props.changeComplete(props.id)}></div>
            <input className={classesTodo.join(" ")} type="text" value={newTodo} onChange={(e) => editTodo(e)} />
            <button className="deleteButton" onClick={() => props.deleteTodo(props.id)}>
                <TrashButton />
            </button>
        </div>
    );
};

export default Todo;
