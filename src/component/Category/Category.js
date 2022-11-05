import React from "react";
import "./Category.scss";

const Category = ({CategoryData, myFunction}) => {
    return (
        <nav className="categery-container">
            {
                CategoryData.map( (item) => {
                   return <button className="category-btn" onClick={() => myFunction(item)}>{item}</button>
                } )
            }
        </nav>
    )
}

export default Category;