import React, { useState } from 'react'
// import { product } from "./Listing.json"

export const Clock = (props) => {
    const [now, setNow] = useState(new Date())
    setInterval(()=>setNow(new Date()), 1000)
    return  <div>{now.toLocaleTimeString()}</div>
}


export const Jet = (props, children) => {
    const product = [
        {id: 1, category: "fruits",     name: "apple",   cost: "$1.59"},
        {id: 2, category: "vegetables", name: "celery",  cost: "$0.89"},
        {id: 3, category: "vegetables", name: "carrot",  cost: "$0.67"},
        {id: 4, category: "fruits",     name: "ananas",  cost: "$1.79"},
        {id: 5, category: "meats",      name: "rabbit",  cost: "$79.99"},
        {id: 6, category: "meats",      name: "chicken", cost: "$34.99"}
    ]
    const [reach, setReach] = useState({nom: ''})
    const [cat, setCat] = useState({mark: ''})

    const [target, setTarget] = useState(product.map(
        (item) => <li key={item.id}>
            <p>{ item.name } { item.category } <i>{ item.cost }</i></p>
            <button type="button" onClick={()=>{alert('Bought!')}}>Buy</button>
        </li>
    ))

    function handleFind(e){
        setReach({nom: e.target.value})
        // INTERESTING BUG
        for(let i=0; i<product.length; i++){  
            if (reach.nom === product[i].name) {
                setTarget(
                    <li key={product[i].id}>
                        <p>{ product[i].name } {product[i].category } <i>{ product[i].cost }</i></p>
                        <button type="button" onClick={()=>{alert('Bought!')}}>Buy</button>
                    </li>
                )
            }
        }
    }

    function handleFilter(e){
        console.log(cat.mark)
        for(let i=0; i<product.length; i++){
            if (cat.mark === product[i].category) {
                console.log(product[i])
                setTarget(
                    <li key={product[i].id}>
                        <p>{ product[i].name } {product[i].category } <i>{ product[i].cost }</i></p>
                        <button type="button" onClick={()=>{alert('Bought!')}}>Buy</button>
                    </li>
                )
            }
        }
        setCat({mark: e.target.value})
    }

    return <div>
        <label htmlFor="pointing">Search</label>
        <input type="search" name="pointing" id="find" 
             placeholder="Find your item followed by 's' " value={reach.nom} onChange={handleFind}/>
        <select name="categorifying" id="choose" value={cat.mark} onChange={handleFilter}>
            <option value="meats">meats</option>
            <option value="fruits">fruits</option>
            <option value="vegetables">vegetables</option>
        </select>
        <ul>
            {target}
        </ul>
    </div>
}