import React, { useRef } from "react";

const Child = ({ name, send, update }) => {

  const messageRef = useRef('');
  const nameRef = useRef('')

  function pressButton() {
    const text = messageRef.current.value;
    alert(`Text in input: ${text}`);
  }

  function pressButtonParams(text) {
    alert(`Text: ${text}`);
  }

  function submitName(e){
    e.preventDefault();
    update(nameRef.current.value);
  }

  return (
    <div style={{background:'cyan', padding:'10px'}}>
      <p onMouseOver={() => console.log("On mouse over")}>Hello, {name}</p>
      <button onClick={() => console.log("Boton 1 presionado")}>
        Button 1
      </button>
      <button onClick={pressButton}>Button 2</button>
      <button onClick={() => pressButtonParams(`Hello`)}>Button Params</button>

      <input        
        placeholder="send a text"
        onBlur={() => console.log("onBlur")}
        onFocus={() => console.log("focus")}
        onChange={(e) => console.log("evento de on changeF", e.target.value)}
        onCopy={() => console.log(" has copied")}
        ref={messageRef}
      />
      <button onClick={() => send(messageRef.current.value)}>Send Message</button>

      <div style={{marginTop: '20px'}}>
        <form onSubmit={submitName}>
            <input ref={nameRef} placeholder="New Name" />
            <button type="submit">Update name</button>
        </form>
      </div>
    </div>
  );
};

export default Child;
