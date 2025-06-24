import { useState } from "react";

function Counter (){
    //const count = 0; //static attribute
 
    const [count,setCount] = useState(0)

    return (
    <div>
    <p>Count: {count}</p>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
    )

}

export default Counter;

//output: Count: 1

//REact hook - useState - Manage the state - here state is count and i am going
//to dynamically change the value of count during runtime