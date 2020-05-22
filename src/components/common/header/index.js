import React, { Component } from "react";
import s from "./header.module.scss";
import MenuIcon from '@material-ui/icons/Menu';
import SidebarMenu from "../sidebarMenu";
import SearchIcon from '@material-ui/icons/Search';
import SearchComponent from "../searchComponent";
import {Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSidebarMenu: false,
            showSearch:false
        }
    }
    openSidebarMenu = () => {
        this.setState({
            showSidebarMenu: true
        })
    }
    closeSidebarMenu = () => {
        this.setState({
            showSidebarMenu: false
        })
    }
    openSearch = () => {
        this.setState({
            showSearch: true
        })
    }
    closeSearch = () => {
        this.setState({
            showSearch: false
        })
        let sr = {...this.props.successReducer}
        if(sr && sr.getUserList){
            sr.getUserList = null;
            this.props.successAction(sr)
        }
    }

    userClickHandler = (userId) => {
        console.log(userId)
    }

    render() {
        const { userDataReducer,getUser, userList } = this.props;
        return (
            <React.Fragment>
                <header className={s.headerSec}>
                    {userDataReducer && <span className={s.hamburger} onClick={this.openSidebarMenu}><MenuIcon /></span>}<Link to="/"><span>SmartCricket</span></Link>
                    {userDataReducer && <span className={s.SearchIcon} onClick={this.openSearch}><SearchIcon/></span>}
                </header>
                {
                    this.state.showSidebarMenu &&
                    <SidebarMenu
                        closeSidebarMenu = {this.closeSidebarMenu}
                        userDataReducer = {userDataReducer}
                    />
                }
                {
                    this.state.showSearch &&
                    <SearchComponent
                        closeSearch = {this.closeSearch}
                        userList = {userList}
                        getUser = {getUser}
                        userClickHandler = {this.userClickHandler}
                    />
                }
            </React.Fragment>
        )
    }
}

export default Header;