import React, { Component } from "react";
import s from "./header.module.scss";
import MenuIcon from '@material-ui/icons/Menu';
import SidebarMenu from "../sidebarMenu";
import SearchIcon from '@material-ui/icons/Search';
import SearchComponent from "../searchComponent";

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
    }
    render() {
        const { userDataReducer } = this.props;
        return (
            <React.Fragment>
                <header className={s.headerSec}>
                    {userDataReducer && <span className={s.hamburger} onClick={this.openSidebarMenu}><MenuIcon /></span>}<span>SmartCricket</span>
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
                        userDataReducer = {userDataReducer}
                    />
                }
            </React.Fragment>
        )
    }
}

export default Header;