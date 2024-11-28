import React, { useEffect, useState }  from "react";

const Counter =({target}) =>{

    const [count,setCount]=useState(0);

    useEffect(()=>{
        
        if(count >= target){
            return
        }
        const interval = setInterval(() => {
            setCount( prevCount => prevCount + 1 )            
        }, 40);

        return () => clearInterval(interval)
    },[count])

    
    
    // console.log("heyy"+count)

    return (
    <>
        {count}
    </>)
}
export default Counter