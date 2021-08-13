import React from 'react';
import { useState } from 'react';
import Button from './components/Button'

interface Props {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({addTodo}) => {

    const [text,setText] = useState('');

  return (
      <form>
          <input type="text" value={text} onChange={e=>{setText(e.target.value)}} />
          <Button type="submit" onClick={(e: { preventDefault: () => void; })=>{
              e.preventDefault();
              addTodo(text);
              setText('');
          }}
          >
              Add Todo
          </Button>
      </form>
  )
};