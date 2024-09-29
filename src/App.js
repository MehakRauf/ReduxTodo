import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <h1>Todo App Using Redux</h1>
      <AddTodo />
      <Todo />
    </div>
  );
}

export default App;
