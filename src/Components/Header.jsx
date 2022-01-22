import React from "react";
import icon from "../icon.svg.png"


const Header = ()=>{
    return(
        <>
        <header>
            <img src={icon} alt="Google Keep" />
            <h2>Google Keep Clone</h2>
        </header>
        </>
    );
};


export default Header;