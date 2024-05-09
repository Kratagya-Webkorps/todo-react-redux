import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoActions";

export const App = () => {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;
  const handleSubmit = (e) => {

    document.getElementById("myInput").value = ""
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };
  const removeHAndler = (t) => {
    dispatch(RemoveTodoAction(t));
  };


  return (
    <>
      <div className="App">
        <header className="App-header">
          <h2>To-Do List App </h2>
          <form onSubmit={handleSubmit}>
            <input id="myInput"
              placeholder="Enter a todo"
              style={{
                width: 350,
                padding: 10,
                borderRadius: 20,
                border: "none",
                fontSize: 20,
              }}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              type="submit"
              style={{
                padding: 12,
                borderRadius: 25,
                fontSize: 15,
                marginLeft: 20,
              }}
            >
              Go
            </button>
          </form>
          <ul className="allTodos">
            {todos &&
              todos.map((t) => (
                <li key = {t.id} className="singleTodo">
                  <span className="todoText"> {t.todo} </span>
                  <button
                    style={{
                      padding: 10,
                      borderRadius: 25,
                      color: "white",
                      border: "1px solid white",
                      backgroundColor: "orangered",
                    }}
                    onClick={()=>removeHAndler(t)}
                  >
                    {" "}
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        </header>
      </div>
    </>
  );
};

export default App;
