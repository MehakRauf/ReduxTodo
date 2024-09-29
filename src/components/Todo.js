import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todoSlice';
import './Todo.css'; // Import the CSS file

const Todo = () => {
    const todos = useSelector(state => state.todos); // Make sure to access the correct state
    const dispatch = useDispatch();

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        {todo.text} 
                        <button 
                            className="todo-button" 
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >
                            Remove
                        </button>
                        <button>Update</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
