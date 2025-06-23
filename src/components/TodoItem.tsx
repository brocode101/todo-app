import React from 'react';
import { Trash2, Check } from 'lucide-react';
import { Todo } from '../types/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
          todo.completed
            ? 'bg-green-500 border-green-500 text-white'
            : 'border-gray-300 hover:border-green-500'
        }`}
      >
        {todo.completed && <Check size={16} />}
      </button>
      
      <span
        className={`flex-1 text-gray-800 transition-all duration-200 ${
          todo.completed
            ? 'line-through text-gray-500'
            : ''
        }`}
      >
        {todo.text}
      </span>
      
      <span className="text-xs text-gray-400 hidden sm:inline">
        {todo.createdAt.toLocaleDateString()}
      </span>
      
      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default TodoItem;
