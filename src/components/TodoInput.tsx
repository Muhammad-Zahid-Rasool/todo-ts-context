import { ChangeEvent,MouseEvent,useContext } from "react";
import { MyContext, ContextType } from "../context/context";


export default function TodoInput() {

  const {todo,setTodo, addTodo} = useContext<ContextType>(MyContext);
  return (
    <>   
    <input onChange={(e:ChangeEvent<HTMLInputElement>)=> setTodo(e.target.value)}  value={todo}></input>
    <button onClick={(event: MouseEvent<HTMLButtonElement>): void => addTodo()}> Add Task </button>
    </>
 
  )
}