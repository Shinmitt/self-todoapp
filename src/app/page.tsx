import Image from 'next/image';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';

export default function Home() {
  return (
   <main　className="flex flex-qol items-center justify-center min-h-screen">
    <h1>Nextjs 13 Todo App</h1>
    <div>
      <div>
        <AddTask />
        <TodoList />
      </div>
    </div>
   </main>
  );
}
