import React from 'react';
import "../Components/MenuBar.css";
import MenuOptions from "../Components/MenuOptions";


const MenuBar = () => {
    return (
        <div className="menuBar">
            <div className="menuBar__center">
                <MenuOptions title="Home" />                
                <MenuOptions title="About us" />
                <MenuOptions title="Categories" />
                <MenuOptions title="Resources" />
                <MenuOptions title="Programs" />
                <MenuOptions title="The Team" />
                <MenuOptions title="Submit" />
                <MenuOptions title="Join Us" />
                <MenuOptions title="Contribute" />
                <MenuOptions title="Contact" />
            </div>

        </div>
    )
}

export default MenuBar
