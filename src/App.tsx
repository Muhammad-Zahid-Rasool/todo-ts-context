import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
 const [todo,setTodo] = useState<string>("");
 //const [todos,setTodos] = useState<string[]>([""]); // Now it is OK. setTodos(["zahid"]);
 const [todos,setTodos] = useState<string[]>([]);
 const addTodo = ()=>{
  setTodos([...todos,todo]);
  setTodo('');
}

  return (
    <div>
      <TodoInput todo={todo}  setTodo= {setTodo} addTodo = {addTodo}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
