import React, { useState } from 'react';
import AddTodo from '../../son_components/AddTodo/AddTodo';

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id:'111', text:'공부하기',state:'active'},
        {id:'222', text:'쇼핑하기',state:'active'},
    ]);
    const handleAdd = (todo) => setTodos([...todos, todo]);
    return (
        <div>
            <h1>TodoList</h1>
            <ul>
            {todos.map((item)=>(
                <li key={item.id}>{item.text}</li>
            ))}
            </ul>
            <AddTodo handleAdd={handleAdd}/>
        </div>
    );
}

