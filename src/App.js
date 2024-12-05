import React, { useState } from 'react';

const App = () => {

  const data = [
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Carrot", category: "Vegetable" },
    { id: 3, name: "Banana", category: "Fruit" },
    { id: 4, name: "Cucumber", category: "Vegetable" },
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredData = data.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = filter === "All" || item.category === filter;
    return matchSearch && matchCategory;
  });

  return (
    <div>
      <h1>Search and Filter</h1>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Fruit">Fruit</option>
        <option value="Vegetable">Vegetable</option>
      </select>
      <ul>
        {filteredData.map((item) => {
          return (
          <li key={item.id}>
            {item.name} {item.category}
            </li>
          )
        })}
      </ul>
    </div>
    
  );
}

export default App;
