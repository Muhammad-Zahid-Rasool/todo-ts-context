import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { MyContext } from "./context/context";

function App() {
 const [todo,setTodo] = useState<string>("zahid");
 //const [todos,setTodos] = useState<string[]>([""]); // Now it is OK. setTodos(["zahid"]);
 const [todos,setTodos] = useState<string[]>([]);
 const addTodo = ()=>{
  setTodos([...todos,todo]);
  setTodo('');
}

  return (
    <div>
      <MyContext.Provider value={{ todo, todos , setTodo , addTodo }}>
        <TodoInput/>
        <TodoList/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
