import React, { Component } from "react";
import s from "./home.module.scss";

export default class Home extends Component{
    render(){
        let {loaderReducer} = this.props; 
        console.log("FF",this.props)
        return(
            <div className={s.mainCont}>
                Home - {loaderReducer ? "On" : "Off"}
            </div>
        )
    }
}
