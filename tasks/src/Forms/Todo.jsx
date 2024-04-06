import React, { useState } from 'react';
import './css/forms.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons';

const Todo = () => {
    const [items, setItems] = useState([
        // { id: 1, name: "todo1", completed: false, isEdit: false },
        // { id: 2, name: "todo2", completed: false, isEdit: false },
        // { id: 3, name: "todo3", completed: false, isEdit: false }
    ]);
    const [inputValue, setInputValue] = useState('');
    
    const handleAddItem = () => {
        const newItem = {
            id: items,
            name: inputValue,
            completed: false,
            isEdit: false
        };
        // console.log(newItem);
        if(inputValue!==""){
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
            item.id === id ? { ...item, isEdit: true } : item
        ));
    };
    
    const handleSaveEdit = (id, newName) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, name: newName, isEdit: false } : item
        ));
    };

    return (
    <>
        <center><h1>TODO LIST</h1></center>
        <div className='TodoBox'>
            <input
                type="text"
                placeholder='Enter Item'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className='AddItem'
            />
            <button onClick={handleAddItem} id='addBtn'>Add</button>
            {items.map((item) => (
                <div key={item.id} style={{display:"flex",alignItems:"center",gap:"22px",marginTop:"8px", color:"black"}} id='TodoItemList'>
                    <input 
                        type="checkbox" 
                        checked={item.completed} 
                        onChange={() => toggleCompleted(item.id)}

                    />
                    <span id="addElemets "style={{ textDecoration: item.completed==true ? 'line-through' : 'none' }}>
                        {item.isEdit ? (
                            <input 
                                type="text" 
                                defaultValue={item.name} 
                                onBlur={(e) => handleSaveEdit(item.id, e.target.value)}
                                style={{padding:"5px", marginTop:"5px"}}
                            />
                        ) : (
                            item.name
                        )}
                    </span>
                    <div className="todoBtns">
                        <button onClick={() => handleDeleteItem(item.id)} id='deleteBtn' style={{backgroundColor:"red"}}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                        {item.isEdit ? (
                        <button onClick={() => handleSaveEdit(item.id, item.name)} id='updateBtn' style={{backgroundColor:"yellow"}}><FontAwesomeIcon icon={faSave} /></button>
                        ) : (
                        <button onClick={() => handleEdit(item.id)} id='editBtn' style={{backgroundColor:"skyblue"}}><FontAwesomeIcon icon={faEdit} /></button>
                        )}   
                    </div>
                    
                </div>
            ))}
        </div>
    </>
    );
};

export default Todo;
