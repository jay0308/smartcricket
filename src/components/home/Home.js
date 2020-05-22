import React, { Component, PureComponent } from "react";
import s from "./home.module.scss";
import PostCard from "../common/postCard";
import Draggable from 'react-draggable';
import AddPost from "../common/addPost";
import isEqual from "lodash/isEqual";

export default class Home extends Component {
    state = {
        defaultPosition: { x: 0, y: 0 },
        openAddPost: false
    }
    componentDidMount(){
        this.props.getPost();
    }
    shouldComponentUpdate(nextProps, nextState){
        if(!isEqual(nextProps.successReducer,this.props.successReducer)){

            return true;
        }
        if(nextState.openAddPost !== this.state.openAddPost){
            return true;
        }
        return false;
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
        this.props.clearPostCreated();
        this.props.getPost();
    }
    render() {
        let {successReducer,likePost,userDataReducer} = this.props;
        return (
            <div className={s.mainCont}>
                <div className={s.mainContInner}>
                    {
                        successReducer &&
                        successReducer.getPosts &&
                        successReducer.getPosts.map((ele,i)=>{
                            return(
                                <PostCard
                                    key={new Date().getTime()+i}
                                    postId = {ele._id}
                                    name={ele.userDetails && ele.userDetails[0] && ele.userDetails[0].name || ""}
                                    date={ele.updateDate}
                                    content={ele.postComment}
                                    likers={ele.likers}
                                    likes="0"
                                    images={ele.images}
                                    likePost = {likePost}
                                    userDataReducer={userDataReducer}
                                />                                
                            )
                        })
                    }
                    {
                        successReducer &&
                        successReducer.getPosts &&
                        successReducer.getPosts.length === 0 &&
                        <div className={s.noPost}>
                            No one has posted yet,<br/>
                            Be the first to post something,<br/>
                            click on to Add button
                        </div>
                    }
                    {/* <PostCard
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
                    /> */}
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
