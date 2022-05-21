import React, { useState } from 'react';

function App(props) {

    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    let timerId;
    const hadleClick = () => {
        setLoading(true)
        timerId = setInterval(() => {
            setCount(count + 1)
        }, 1000)
        return timerId
    }

    const decrClick = () => {
        setLoading(false)
        clearInterval(timerId)
    }

    const resetClick = () => {
        clearInterval(timerId)
        setLoading(false)
        setCount(0)
    }



    return (
        <div className="App">
            <p>{count}</p>

            {/* 
            <button onClick={() => setCount(count + 1)} className="start">Incr</button>
            <button onClick={() => setCount(count - 1)} className="stop">Decr</button> */}

            {loading ? <button onClick={decrClick} className="stop">Stop</button> : <button onClick={hadleClick} className="start">Start</button>}

            <button onClick={resetClick} className="reset">Reset</button>
        </div>
    );
}

export default App;