import React, { useState } from 'react'
import product from './Listing.json'
//     const product = [
//         {id: 1, category: "fruits",     name: "apple",   cost: "$1.59"},
//         {id: 2, category: "vegetables", name: "celery",  cost: "$0.89"},
//         {id: 3, category: "vegetables", name: "carrot",  cost: "$0.67"},
//         {id: 4, category: "fruits",     name: "ananas",  cost: "$1.79"},
//         {id: 5, category: "meats",      name: "rabbit",  cost: "$79.99"},
//         {id: 6, category: "meats",      name: "chicken", cost: "$34.99"}
//     ]


export const Clock = (props) => {
    const [now, setNow] = useState(new Date())
    setInterval(()=>setNow(new Date()), 1000)
    return  <div>{now.toLocaleTimeString()}</div>
}


export const Jet = (child) => {
    // console.log(child)
    const [reach, setReach] = useState({nom: ''})
    const [cat, setCat] = useState({mark: ''})

    const [target, setTarget] = useState(product.map(
        (item) => <li key={item.id}>{item.id}
            <p>{ item.name } { item.category } <i>{ item.cost }</i></p>
            <button type="button" onClick={()=>{alert('Bought!')}}>Buy</button>
        </li>
    ))

    function handleFind(e){
        const selectedName = e.target.value
        setReach({nom: e.target.value})
        const filteredProducts = product.filter(
            item => selectedName === item.name.slice(0, selectedName.length)
        )
        const items = filteredProducts.map(item=>(
                    <li key={item.id}>{item.id}
                        <p>
                            { item.name } {item.category } <i>{ item.cost }</i>
                        </p>
                         <button type="button" onClick={()=>{alert('Bought!')}}>
                            Buy
                         </button>
                     </li>
        ))
        setTarget(items)
    }

    function handleFilter(e){
            const selectedCategory = e.target.value;
            setCat({ mark: selectedCategory });
            const filteredProducts = product.filter(
                item => item.category === selectedCategory || selectedCategory === "*" // specified or default 
            );
            const items = filteredProducts.map(item => (
                <li key={item.id}>{item.id}
                    <p>
                        {item.name} {item.category} <i>{item.cost}</i>
                    </p>
                    <button type="button" onClick={() => alert('Bought!')}>
                        Buy
                    </button>
                </li>
            ));
            setTarget(items);
            console.log(target)
    }

    return <div> <h3>"AlasoraGrosFound"</h3>
        <label htmlFor="pointing">Search</label>
        <input
            type="search"
            name="pointing"
            id="find"
            placeholder="Find your item followed by 's'"
            value={reach.nom}
            onChange={handleFind}
        />
        <select name="categorifying" id="choose" value={cat.mark} onChange={handleFilter}>
            <option value="*">Default</option>
            <option value="meats">meats</option>
            <option value="fruits">fruits</option>
            <option value="vegetables">vegetables</option>
        </select>
        <ul>{target}</ul>
    </div>
}