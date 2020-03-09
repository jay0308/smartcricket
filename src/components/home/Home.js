import React, { Component } from "react";
import s from "./home.module.scss";
import PostCard from "../common/postCard";

export default class Home extends Component{
    render(){
        console.log("FF",this.props)
        return(
            <div className={s.mainCont}>
                <PostCard
                    name="Jay"
                    date={new Date()}
                    content="Hello Yee"
                    likes="102"
                    src="https://drive.google.com/uc?export=view&amp;id=162m9C-PIyPS7zh9Uy9G4xaxD7fbpOotf"
                />
                <PostCard
                    name="Jay"
                    date={new Date()}
                    content="Hello Yee asd  adasd  sad as d sa d asd a sd asd a sd asd asd asd sa"
                    likes="109"
                />
            </div>
        )
    }
}
