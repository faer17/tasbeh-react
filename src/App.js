import React ,{useState}from "react";
import './App.css'

export default function App() {
    const [count,setCount]=useState(0)
    return(
    <>
      <section>
        <div className="tasbeh">
        <span></span>
        <h1>{count}</h1>
        <button className="count" onClick={() => setCount(count === 100 ? count === 0 :  count + 1)}>count</button>
        <button className="reset" onClick={() => setCount(count === 0)}>reset</button>
        </div>

      </section>
    </>
    )
}