import React from "react";


const Footer = ()=>{

    let d = new Date()
    const date = d.getFullYear();

    return(
        <>
        <footer>
            <h2>Copyright, Google Keep Ⓒ, {date}</h2>
        </footer>
        </>
    );
};


export default Footer;