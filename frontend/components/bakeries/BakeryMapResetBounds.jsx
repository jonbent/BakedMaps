import React from 'react'

const BakeryMapResetBounds = (props) => {
    return (
      <div className="redo-search-container">
        <button className="redo-search-button" onClick={props.handleSearch}>Redo search in this area</button>
      </div>
    );
}

export default BakeryMapResetBounds
