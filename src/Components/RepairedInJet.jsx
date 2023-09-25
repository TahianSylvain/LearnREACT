import React, { useState } from 'react'
import product from './Course.json'


export const Clock = (props) => {
    const [now, setNow] = useState(new Date())
    setInterval(()=>setNow(new Date()), 1000)
    return  <div>{now.toLocaleTimeString()}</div>
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
            type="search"
            name="pointing"
            id="find"
            placeholder="Search for course"
            value={reach.nom}
            onChange={handleFind}
        />
    </div>
}

    // const [cat, setCat] = useState({mark: ''})
    // function handleFilter(e){
    //         const selectedCategory = e.target.value;
    //         setCat({ mark: selectedCategory });
    //         const filteredProducts = product.filter(
    //             item => item.category === selectedCategory || selectedCategory === "*" // specified or default 
    //         );
    //         const items = filteredProducts.map(item => (
    //             <li key={item.id}>{item.id}
    //                 <p>
    //                     {item.name} {item.category} <i>{item.cost}</i>
    //                 </p>
    //                 <button type="button" onClick={() => alert('Bought!')}>
    //                     Buy
    //                 </button>
    //             </li>
    //         ));
    //         setTarget(items);
    // }
    /*
            <select name="categorifying" id="choose" value={cat.mark} onChange={handleFilter}>
                <option value="*">Default</option>
                <option value="meats">meats</option>
                <option value="fruits">fruits</option>
                <option value="vegetables">vegetables</option>
            </select> 
            <ul>{target}</ul>
    */