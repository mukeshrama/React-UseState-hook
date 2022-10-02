import { useState } from "react";
import "./styles.css";

export default function App() {
  const[data,setData]=useState("");
  const[val,setValue]=useState("");

  function update(){
      setData(data+val);
      setValue("");
  }
  return (
    <div className="App">
      <input type="text" id="#input" value={val} onChange={(e)=>{setValue(e.target.value)}}/>
      <h3>Concated String</h3>
      <p id="#text">{data}</p>
      <button onClick={update} id="#button">Click me</button> 
    </div>
  );
}
