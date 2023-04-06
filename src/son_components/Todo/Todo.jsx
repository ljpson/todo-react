import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Todo({todo, onUpdate, onDelete}) {

    const {text, status} = todo;
    const handleUpdate = (e) =>{
        const stat = e.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status:stat})
    }
    const handleDelete = (e) => onDelete(todo);
    return (
        <li>
            <input type='checkbox'
                    id='checkbox'
                    checked={status === 'completed'}
                    onChange={handleUpdate} />
            <lable htmlFor='checkbox'>{text}</lable>
            <button onClick={handleDelete}><AiFillCloseCircle /></button>
        </li>
    );
}

