import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const increase = () => {
        if(count < 100){
            setCount(count + 5)
        } 
    }

    const decrease = () => {
        if(count > 0){
            setCount(count - 5)
        }
    }

    return ( 
        <>
            <div>Counter {count} </div>
            <hr />
            <input onClick={decrease} type="button" value="-" />
            <input onClick={increase} type="button" value="+" />
        </>
     );
}
 
export default Counter;