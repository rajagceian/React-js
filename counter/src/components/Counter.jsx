import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [num,setNum] = useState(0);

    function counting(){
        setNum(num+1);
    }
  return (
    <div className='counter'>
      <h1>{num}</h1>
      <button onClick={counting}>count</button>
    </div>
  )
}

export default Counter
