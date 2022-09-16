import React, { useState } from "react";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState({
    text: "", completed: false,
  });

  const [todos, setTodos] = useState([]);

  const line = {textDecoration:"line-through"};
  const noLine = {textDecoration:"none"};


  const handleNewTodoSubmit = (e) => {
    e.preventDefault();

    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (delIdx) => {
    console.log(delIdx);
    const filteredTodo = todos.filter ((todo, idx) => idx !== delIdx);

    setTodos(filteredTodo);
    };

    const handleComplete = (e, todo) => {
      todo.completed = !todo.completed
      // console.log(todo);
      setTodos([...todos]); 
    }

    const changeHandler = (e) => {
      setNewTodo({...newTodo, [e.target.name]: e.target.value});
      console.log(newTodo);
    }
      
  return (
    <fieldset style={{ textAlign: "center" }}>
      <legend>Todo List</legend>
      <div>
        <form
          onSubmit={
            handleNewTodoSubmit
          }
        >
          <input name ="text"
            onChange={changeHandler }
            type="text"
            // value={newTodo.text}
          />
          <div>
            <button>Add to List</button>
          </div>
        </form>

        <hr />

        {todos.map((todo, idx) => {
          return (
            <div key={idx}>
              <p 
              style = {todo.completed ? line : noLine}
              > {todo.text}
              </p>
              <input 
              onClick={(e) => {
                handleComplete(e,todo);
              }} 
              checked={todo.completed} 
              type="checkbox" 
              />
              
              <button 
              onClick={(e) => {
                handleDeleteTodo(idx)
                }}>
                Delete
                </button>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}



export default App;