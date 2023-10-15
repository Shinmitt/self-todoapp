import Image from 'next/image';
import TodoList from './components/TodoList';
import AddTask from './components/AddTask';

export default function Home() {
  return (
   <main　className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
    <h1 className="text-4xl font-bold text-gray-700 -mt-32">Nextjs 13 Todo App</h1>
    <div>
      <div>
        <AddTask />
        <TodoList />
      </div>
    </div>
   </main>
  );
}
