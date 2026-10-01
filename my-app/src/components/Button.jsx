
import {useState, useEffect} from "react"


function Button({ onClick }) {

    const [count, setCount] = useState(0);

    
    function incrCount() { 
        setCount(count+1); 
    }

    return (
        <button onClick={incrCount}> 
        {count}
        </button> 
    )
}

export default Button 