import React, {useState} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0);
    let color = (count > 0) ? "green" : (count < 0) ? "red" : "black";
    // if (count > 0) {
    //     color = "green"}
    // if (count < 0) {
    //     color = "red"}
    // if (count === 0) {
    //     color = "black"
    // };


    const increment = () => setCount(count+1);
    const reset = () => setCount(0);
    const decrement = () => setCount(count-1);

    return (
        <div>
            <div className="container">
                <h1>Counter</h1>
                <span style={{color}} id="value">{count}</span>
                <div className="btn-group">
                    <button onClick={decrement} id="decrease" className="btn">DECREASE</button>
                    <button onClick={reset} id="reset" className="btn">RESET</button>
                    <button onClick={increment} id="increase" className="btn">INCREASE</button>
                </div>
            </div>
        </div>
        )
}

export default App