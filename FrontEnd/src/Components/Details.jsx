import React, { createContext, useEffect, useState } from 'react'

export const store = createContext()

const Details = (props) => {
    const [details, setDetails] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/')
        .then((res)=>(res.json()))
        .then((res)=>setDetails(res))
        
    }, [])
    console.log(details)
    return (
        <div>
            <store.Provider value={[details, setDetails]}>

                {props.children
                
                }


            </store.Provider>
        </div>
    )
}

export default Details;