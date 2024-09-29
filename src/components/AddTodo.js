import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';
import './AddTodo.css'; 

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }

    return (
        <div className="add-todo-container">
            <form className="add-todo-form" onSubmit={addTodoHandler}>
                <input
                    type="text"
                    value={input} 
                    onChange={e => setInput(e.target.value)}
                    className="add-todo-input"
                />
                <button type="submit" className="add-todo-button">Add</button>
            </form>
        </div>
    );
}

export default AddTodo;
