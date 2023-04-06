import React, { useState } from 'react';
import AddTodo from '../../son_components/AddTodo/AddTodo';
import Todo from '../../son_components/Todo/Todo';

export default function TodoList({filter}) {
    const [todos, setTodos] = useState([
        {id:'111', text:'공부하기',status:'active'},
        {id:'222', text:'쇼핑하기',status:'active'},
    ]);
    const handleAdd = (todo) => setTodos([...todos, todo]);
    const handleUpdate = (updated) => 
        setTodos(todos.map((t) => t.id === updated.id ? updated : t));
    const handleDelete = (deleted) =>
        setTodos(todos.filter((t) => t.id !== deleted.id));

    const filtered = getFilteredItems(todos, filter);
    return (
        <div style={{margin: '1rem'}}>
            <h3>Son_TodoList</h3>
            <ul>
            {filtered.map((item)=>(
                <Todo key={item.id} 
                        todo={item}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}/>
            ))}
            </ul>
            <AddTodo onAdd={handleAdd}/>
        </div>
    );
}

function getFilteredItems(todos, filter){
    if (filter === 'all') {
        return todos;
    }
    return todos.filter(todo => todo.status === filter);
}