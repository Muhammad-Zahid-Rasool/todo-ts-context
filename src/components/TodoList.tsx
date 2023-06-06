import React from 'react'

type Props = {todos: string[]}

export default function TodoList({todos}: Props) {
  return (

    <ul>
    {todos.map((todo) => (
        <li>{todo}</li>
    ))}

</ul>
  )
}