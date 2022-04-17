import { React } from "react";
import AddButton from "../AddButton/AddButton";
import TrashButton from "../TrashButton/TrashButton";
import "./AddTodo.css";

const AddTodo = (props) => {
    return (
        <div className="todoForm">
            <input
                type="text"
                placeholder="input some todo..."
                className="todoInput"
                onChange={(e) => props.handleInput(e)}
                onKeyPress={(e) => props.onKeyPress(e)}
                value={props.value}
            />
            <button className="addTodo" onClick={() => props.addTodo()}>
                <AddButton />
            </button>
            <button className="deleteButton" onClick={() => props.deleteAll()}>
                <TrashButton />
            </button>
        </div>
    );
};
export default AddTodo;
