import React, { useState } from 'react'
import product from './Course.json'


export const Clock = (props) => {
    const [now, setNow] = useState(new Date())
    setInterval(()=>setNow(new Date()), 1000)
    
    return  <div id='tim'>{now.toLocaleTimeString()}</div>
}


export const InteractiveSearch = () => {
    const [reach, setReach] = useState({nom: ''})

    function handleFind ( e ) {
        const selectedName = e.target.value
        setReach({nom: e.target.value})
        const filteredProducts = product.filter( item =>
            selectedName === item.title.slice(0, selectedName.length)
        );
        console.log(filteredProducts)
    }

    return <div>
        <input
            id="find"
            type="search"
            name="pointing"
            color=''
            placeholder="Search for course"
            value={reach.nom}
            onChange={handleFind}
        />
    </div>
}
