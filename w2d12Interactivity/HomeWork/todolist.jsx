import React, { useState } from 'react';

// Dumb Component - Presentational Component
const TodoItem = ({ todo, onDelete, onEdit }) => {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => onEdit(todo.id)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

// Smart Component - Container Component
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null);

  const handleAddTodo = () => {
    if (!inputValue) return;
    const newTodo = { id: Date.now(), text: inputValue };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setInputValue(todoToEdit.text);
    setEditId(id);
  };

  const handleSaveEdit = () => {
    if (editId === null) return;
    const updatedTodos = todos.map((todo) =>
      todo.id === editId ? { ...todo, text: inputValue } : todo
    );
    setTodos(updatedTodos);
    setInputValue('');
    setEditId(null);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={editId ? handleSaveEdit : handleAddTodo}>
        {editId ? 'Save' : 'Add'}
      </button>
      <TodoList todos={todos} onDelete={handleDeleteTodo} onEdit={handleEditTodo} />
    </div>
  );
};

export default TodoApp;
