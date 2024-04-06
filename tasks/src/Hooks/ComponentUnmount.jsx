import React, { useEffect, useState } from "react";

const ComponentUnmount=()=> {
    const [value, setValue] = useState(true);
    const [user, setUser] = useState({
        name: 'Pradeep',
        age: 21,
    });
    const userValue = () => {
        setUser({ ...user, name: 'Sunil;', age: 28 });
    };
    const removeHeader = () => {
        setValue(false);
    };
    useEffect(() => {
        return () => {
            alert("clear the header...");
        };
    }, [value]);
    return (
        <>
            {value && <Header />}
            <button style={buttonStyles.darkBlue} onClick={removeHeader}>Remove Header</button>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <button style={buttonStyles.lightGreen} onClick={userValue}>Update</button>
        </>
    );
}
function Header() {
    return (
        <h1>Data Information :</h1>
    );
}

const buttonStyles = {
    darkBlue: {
        border: 'none',
        color: 'white',
        backgroundColor: 'darkblue',
        padding: '10px',
        borderRadius: '5px',
    },
    lightGreen: {
        border: 'none',
        color: 'white',
        backgroundColor: 'lightgreen',
        padding: '20px',
        borderRadius: '5px',
    },
};

export default ComponentUnmount;
