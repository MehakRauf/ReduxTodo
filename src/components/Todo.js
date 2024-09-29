import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todoSlice';
import './Todo.css'; // Make sure to import the CSS

const Todo = () => {
    const [text, setText] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [currId, setCurId] = useState(null);
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const enableUpdate = (todo) => {
        setIsEditing(true);
        setCurId(todo.id);
        setText(todo.text);
    };

    const doUpdate = () => {
        if (currId) {
            dispatch(updateTodo({ id: currId, text }));
            setIsEditing(false);
            setText("");
            setCurId(null);
        }
    };

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        {isEditing && currId === todo.id ? (
                            <div>
                                <input
                                    type="text"
                                    className="todo-input"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                />
                                <button className="update-button" onClick={doUpdate}>
                                    Save
                                </button>
                            </div>
                        ) : (
                            <>
                                <p>{todo.text}</p>
                                <div className="button-group">
                                    <button className="todo-button" onClick={() => dispatch(removeTodo(todo.id))}>
                                        Remove
                                    </button>
                                    <button className="update-button" onClick={() => enableUpdate(todo)}>
                                        Update
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
