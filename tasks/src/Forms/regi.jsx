import React, { useState } from 'react';

const Todo = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    
    const handleAddItem = () => {
        const newItem = {
            id: Date.now(), 
            name: inputValue,
            completed: false,
            isEdit: false
        };
        if(inputValue !== "") {
            setItems([...items, newItem]);
            setInputValue('');
        }
    };
    
    const handleDeleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };
    
    const toggleCompleted = (id) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, completed: !item.completed } : item
        ));
    };
    
    const handleEdit = (id) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, isEdit: !item.isEdit } : item
        ));
    };
    
    const handleSaveEdit = (id, newName) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, name: newName, isEdit: false } : item
        ));
    };

    return (
        <div>
            <input
                type="text"
                placeholder='Enter Item'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAddItem}>Add</button>
            {items.map((item) => (
                <div key={item.id}>
                    <input 
                        type="checkbox" 
                        checked={item.completed} 
                        onChange={() => toggleCompleted(item.id)}
                    />
                    <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                        {item.isEdit ? (
                            <input 
                                type="text" 
                                defaultValue={item.name} 
                                onBlur={(e) => handleSaveEdit(item.id, e.target.value)}
                            />
                        ) : (
                            item.name
                        )}
                    </span>
                    <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                    {item.isEdit ? (
                        <button onClick={() => handleSaveEdit(item.id, item.name)}>Update</button>
                    ) : (
                        <button onClick={() => handleEdit(item.id)}>Edit</button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Todo;
