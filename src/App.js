import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const getMode = () => {
    const initalMode = localStorage.getItem("mode")
    if (initalMode == null) {
      if (window.matchMedia("(prefers-color-scheme:dark)").matches){
        return true
      }
      else {
      return JSON.parse(localStorage.getItem("mode"))
    }
  }
}

const [dark, setMode] = useState(getMode())

useEffect(() => {
  localStorage.setItem("mode", JSON.stringify(dark))
}, [dark])

return (
  <div className={dark ? "App dark-mode" : "App"}>
    <div className="nav">
      <label className="switch">
        <input type="checkbox"
          checked={dark}
          onChange={() => setMode(!dark)} />
        <span className="slider round"></span>
      </label>
    </div>
    <div
      className="content">
      <h1> {dark ? "Dark mode is on" : "Light mode is on"}</h1>
      <p style={{ "font-size": "20" }}>mnejkg</p>
    </div>
  </div>
);
}

export default App;
