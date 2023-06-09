import React ,{useState}from "react";
import './App.css'

export default function App() {
    const [count,setCount]=useState(0)
    if (count > 101) {
      setCount  (100)
    }
    return(
    <>
      <section>
        <div className="tasbeh">
        <span></span>
        <h1>{count}</h1>
        <button className="count" onClick={() => setCount(count === 100 ? count - count :  count + 1)}>count</button>
        <button className="reset" onClick={() => setCount(count - count )}>reset</button>
        </div>
      </section>
    </>
    )
}

