import { ChangeEvent } from "react";

type Props = {
    todo: string;
    setTodo: Function;
    addTodo: ()=> void;
  }



export default function TodoInput({todo,setTodo,addTodo}: Props) {

  return (
    <>   
    <input onChange={(e:ChangeEvent<HTMLInputElement>)=> setTodo(e.target.value)}  value={todo}></input>
    <button onClick={addTodo}> Add Task </button>
    </>
 
  )
}