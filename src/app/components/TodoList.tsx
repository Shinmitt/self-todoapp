import {Todo} from "@/types";
import React,{useEffect}from 'react'

interface TodoListProps{
    todos: Todo[];
}

const TodoList = ({todos}: TodoListProps) => {
  return (
    <ul className="space-y-3">
        {todos.map((todo)=> (
            <li
            key={todo.id}
            className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
            >
                <span>{todo.text}</span>
                <div>
                    <botton className="text-green-500 mr-3">edit</botton>
                    <botton className="text-red-500">Delete</botton>
                </div>
            </li>
        ))}
    </ul>
  )
}

export default TodoList