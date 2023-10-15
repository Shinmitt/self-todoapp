import Image from 'next/image';
import AddTsk from './components/AddTask';
import TodoList from './components/TodoList';

export default function Home() {
  return (
   <main>
    <h1>Nextjs 13 Todo App</h1>
    <div>
      <div>
        <AddTask />
        <TodoList />
      </div>
    </div>
   </main>
  )
}
