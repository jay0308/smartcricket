import React, { Component } from "react";
import s from "./home.module.scss";
import PostCard from "../common/postCard";
import Draggable from 'react-draggable';
import AddPost from "../common/addPost";

export default class Home extends Component {
    state = {
        defaultPosition: { x: 0, y: 0 },
        openAddPost: false
    }
    handleStart = (e) => {
        console.log("Handlestart", e)
    }
    handleDrag = (e, ui) => {
        const { x, y } = this.state.defaultPosition;
        this.setState({
            defaultPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    };

    handleStop = (e) => {
        console.log("handleStop", e)
    }

    openPostCreator = () => {
        this.setState({
            openAddPost: true
        })
    }
    closePostCreator = () => {
        this.setState({
            openAddPost: false
        })
    }
    render() {
        console.log("FF", this.props)
        return (
            <div className={s.mainCont}>
                <div className={s.mainContInner}>
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
                <div className={s.dragBox}>
                    <Draggable
                        defaultPosition={this.state.defaultPosition}
                        onStart={this.handleStart}
                        onDrag={this.handleDrag}
                        onStop={this.handleStop}>
                        <button className={s.addPostBtn} onClick={this.openPostCreator}>+</button>
                    </Draggable>

                </div>
                {
                    this.state.openAddPost &&
                    <AddPost
                        closeHandler={this.closePostCreator}
                        {...this.props}
                    />
                }
            </div>
        )
    }
}
