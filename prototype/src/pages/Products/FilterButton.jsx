import React from "react";

const FilterButton = ({ label, categoryValue, setCategory }) => {
  return (
    <button className="filter-btn" onClick={() => setCategory(categoryValue)}>
      {label}
    </button>
  );
};

export default FilterButton;
