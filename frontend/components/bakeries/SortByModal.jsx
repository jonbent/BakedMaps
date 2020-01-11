import React from 'react'

const SortByModal = ({ handleSortBy }) => {
  return (
    <div className="sort-by-modal">
      <div onClick={() => handleSortBy("sort_by=position&sort_order=asc")}>Featured</div>
      <div onClick={() => handleSortBy("sort_by=rating&sort_order=desc")}>Highest Rated</div>
      <div onClick={() => handleSortBy("sort_by=reviews_count&sort_order=desc")}>Most Reviewed</div>
      <div onClick={() => handleSortBy("sort_by=name&sort_order=asc")}>Name A-Z</div>
      <div onClick={() => handleSortBy("sort_by=name&sort_order=desc")}>Name Z-A</div>
      <div onClick={() => handleSortBy("sort_by=menu_items_count&sort_order=desc")}>Largest Menu</div>
    </div>
  );
};

export default SortByModal
