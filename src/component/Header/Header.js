import React from "react";
import "./Header.scss"
import Category from "../Category/Category";
const Header = ({headerOnlyCategory, myfunctionHeader}) => {
    return( 
            <header className="header-container">
                <h1>The Robots</h1>
                <Category CategoryData={headerOnlyCategory} myFunction={myfunctionHeader} />
            </header>
            )
}

export default Header