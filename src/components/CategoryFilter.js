import React from "react";

function CategoryFilter({categories}) {
  console.log(categories)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((cat) => (
        <button>{cat}</button>))}
    </div>
  );
}

export default CategoryFilter;
