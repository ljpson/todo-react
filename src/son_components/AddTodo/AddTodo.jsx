import { Button, Input } from 'antd';
import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export default function AddTodo({onAdd}) {
    const [text, setText] = useState('');
    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length === 0) {
            return;
        }
        onAdd({id:uuidv4(), text ,status:'active'});
        setText('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input style={{width:'200px'}}
                    type='text'
                    placeholder='할일을 적어주세요'
                    value={text} 
                    onChange={handleChange} />
            <Button htmlType='submit'>추가</Button>
        </form>
    );
}


