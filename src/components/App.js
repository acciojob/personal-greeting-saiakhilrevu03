
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] = useState("");

  const updateName = (e)=>{
      setName(e.target.value);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      {/* Greeting (only if name is not empty) */}
      {name && <h1 style={{ marginTop: "20px" }}>Hello, {name}!</h1>}
    </div>
    </div>
  )
}

export default App
