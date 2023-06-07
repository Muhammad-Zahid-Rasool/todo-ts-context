import { createContext } from 'react';

export type ContextType = {
    todo: string;
    todos: string[];
    setTodo: Function;
    addTodo: Function;
  }

  const iState: ContextType ={
    todo: "",
    todos: [],
    setTodo: ()=>{},
    addTodo: ()=>{}
} 

export const MyContext = createContext(iState);
