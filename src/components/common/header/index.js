import React, { Component } from "react";
import s from "./header.module.scss";

class Header extends Component{
    render(){
        return(
            <header className={s.headerSec}>
                SmartCricket
            </header>
        )
    }
}

export default Header;