import React, { Component } from "react";
import s from "./footer.module.scss";

class Footer extends Component{
    render(){
        return(
            <div className={s.footerSec}>
                Copyright © 2020, SmartCricket
            </div>
        )
    }
}

export default Footer;