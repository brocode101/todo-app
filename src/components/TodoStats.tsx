import React from 'react';
import { CheckCircle, Circle, ListTodo } from 'lucide-react';
import { Todo } from '../types/Todo';

interface TodoStatsProps {
  todos: Todo[];
}

const TodoStats: React.FC<TodoStatsProps> = ({ todos }) => {
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-900/50 rounded-lg">
            <ListTodo className="text-blue-400" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-400">Total</p>
            <p className="text-2xl font-bold text-white">{totalTodos}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-900/50 rounded-lg">
            <CheckCircle className="text-green-400" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-400">Completed</p>
            <p className="text-2xl font-bold text-white">{completedTodos}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-900/50 rounded-lg">
            <Circle className="text-orange-400" size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-400">Pending</p>
            <p className="text-2xl font-bold text-white">{pendingTodos}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoStats;
