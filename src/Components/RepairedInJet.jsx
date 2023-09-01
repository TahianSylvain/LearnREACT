// function handleFilter(e) {
//     const selectedCategory = e.target.value;
//     setCat({ mark: selectedCategory });

//     const filteredProducts = product.filter(item => item.category === selectedCategory);

//     const items = filteredProducts.map(item => (
//         <li key={item.id}>
//             <p>
//                 {item.name} {item.category} <i>{item.cost}</i>
//             </p>
//             <button type="button" onClick={() => alert('Bought!')}>
//                 Buy
//             </button>
//         </li>
//     ));

//     setTarget(items);
// }

// // ...

// return (
//     <div>
//         <label htmlFor="pointing">Search</label>
//         <input
//             type="search"
//             name="pointing"
//             id="find"
//             placeholder="Find your item followed by 's'"
//             value={reach.nom}
//             onChange={handleFind}
//         />
//         <select name="categorifying" id="choose" value={cat.mark} onChange={handleFilter}>
//             <option value="meats">meats</option>
//             <option value="fruits">fruits</option>
//             <option value="vegetables">vegetables</option>
//         </select>
//         <ul>{target}</ul>
//     </div>
// );
