import React from 'react';
import { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const InitialTodos: Todo[] = [
  {
    text: 'walk the dog',
    complete: false,
  },
  {
    text: 'write app',
    complete: true,
  }
];

function App() {
  const [todos,setTodos] = useState(InitialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if(todo===selectedTodo) {
        return{
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const addTodo: AddTodo = (text:string) => {
    const newTodo = {text,complete:false};
    setTodos([...todos,newTodo])
  }

  return(
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  )
}

export default App;
