import React from 'react'

const TodoList = () => {
  return (
    <ul className="space-y-3">
        <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
            <span>散歩</span>
            <div>
                <botton className="text-green-500 mr-3">edit</botton>
                <botton className="text-red-500">Delete</botton>
            </div>
        </li>
        <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
            <span>散歩</span>
            <div>
                <botton className="text-green-500 mr-3">edit</botton>
                <botton className="text-red-500">Delete</botton>
            </div>
        </li><li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
            <span>散歩</span>
            <div>
                <botton className="text-green-500 mr-3">edit</botton>
                <botton className="text-red-500">Delete</botton>
            </div>
        </li>
    </ul>
  )
}

export default TodoList