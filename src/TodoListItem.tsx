import React from 'react';
import {createUseStyles} from 'react-jss';


interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}
const useStyle = createUseStyles({
    myh5: {
        // color:'blueviolet',
        // margin: {
        //     top: 5,
        //     right: 0,
        //     bottom: 0,
        //     left: '1rem'
        //   },
        //   '& span': {
        //     fontWeight: 'bold'
        //   }
    }
})

export const TodoListItem: React.FC<Props> =({ todo,toggleTodo }) =>{
    const classes = useStyle();
    return (
        <li>
            <label style={{ textDecoration: todo.complete ? 'line-through' : undefined}}>
                    <input type="checkbox" checked={todo.complete} onClick={()=>{toggleTodo(todo);}} />{' '} <h5 >{todo.text}</h5>
                </label> 
        </li>
    )
}