import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);
    const limit = 10;
    const islimit = count === limit;
    const limitMessage = "You've reached the limit";

    function increase(){
      !islimit && setCount(count + 1)
    }
  
    function decrease(){
        count < 1 ? count : setCount(count - 1)
    }
  
    return (
      <div className='container'>
        <h1>{count}</h1>
        <p >{islimit && limitMessage}</p>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    )
}

export default Counter