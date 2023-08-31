import React, { useState } from 'react'
// import { product } from "./Listing.json"

export const Clock = (props) => {
    const [now, setNow] = useState(new Date())
    setInterval(()=>setNow(new Date()), 1000)
    return  <div>{now.toLocaleTimeString()}</div>
}


export const Jet = (props, children) => {
    const product = [
        {"id": 1, "category": "fruits",     "name": "apple",  "cost": "$1.59"},
        {"id": 2, "category": "vegetables", "name": "celery", "cost": "$0.89"},
        {"id": 3, "category": "vegetables", "name": "carrot", "cost": "$0.67"},
        {"id": 4, "category": "fruits",     "name": "ananas", "cost": "$1.79"},
        {"id": 5, "category": "meats",      "name": "rabbit", "cost": "$79.99"},
        {"id": 6, "category": "meats",      "name": "chicken", "cost": "$34.99"}
    ]
    const [reach, setReach] = useState({nom: ''})
    let target = product.map(
        (item) => <li key={item.id}>
            <p>{ item.name } { item.category } <i>{ item.cost }</i></p>
            <button type="button" onClick={()=>{alert('Bought!')}}>Buy</button>
        </li>
    )

    function handleFind(e){
        setReach({nom: e.target.value})
        for (let i of product){
            if (reach in i.name){
                console.log(i.name)
            } else {
                console.log('nothing any more')
            }
        }
    }

    function handleFilter(){
        console.log('How many: ' + 3)
    }

    return <div>
        <label htmlFor="pointing">Search</label>
        <br />
        <input type="search" name="pointing" id="find" 
             placeholder="Find your goods" value={reach.nom} onChange={handleFind}/>
        <select name="categorifying" id="choose" value={"Categories"} onChange={handleFilter}>
            <option value="meats">meats</option>
            <option value="fruits">fruits</option>
            <option value="vegetables">vegetables</option>
        </select>
        <ul>
            {target}
        </ul>
    </div>
}