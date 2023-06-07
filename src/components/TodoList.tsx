import { MyContext, ContextType } from "../context/context";
import { useContext } from "react";

export default function TodoList() {
  const {todos} = useContext<ContextType>(MyContext);

  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo}</li>
      ))}

    </ul>
  )
}