import React, {useState} from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('Jonatan');

    function showMessage(text){
        alert(`Mesagge recived : ${text}`)
    }
    function updateName(newName){
        setName(newName)
    }

    return (
        <div style={{background:'tomato', padding:'10px'}}>
            <Child name={name} update={updateName} send={showMessage}></Child>
        </div>
    );
}

export default Father;
