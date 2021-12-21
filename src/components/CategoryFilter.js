import React from "react";

function CategoryFilter({categories, selectedCategory, updateCat}) {

  function handleCategoryChange(event) {
    updateCat(event.target.value);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((cat) => (
        <button key={cat} value={cat} onClick={(event)=>handleCategoryChange(event)} 
        className={(selectedCategory === cat) ? "selected" : null}
        > {cat} </button>))}
    </div>
  );
}

export default CategoryFilter;