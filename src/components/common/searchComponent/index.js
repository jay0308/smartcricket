import React, { Component } from "react";
import s from "./search.module.scss";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearch: "",
            searchResult: []
        }
    }
    componentDidMount() {
        this.refs.searchInp.focus();
        setTimeout(() => {
            this.setState({ showSearch: s["open"] })
        }, 150)
    }
    closeMenu = () => {
        this.setState({
            showSearch: ""
        })
        const { closeSearch } = this.props;
        setTimeout(() => {
            closeSearch()
        }, 150)
    }
    render() {
        const { showSearch, searchResult } = this.state;
        const { userDataReducer } = this.props;
        return (
            <div className={s.searchCont}>
                <div className={s.backBtn} onClick={this.closeMenu}><KeyboardBackspaceIcon/></div>
                {
                    <div className={`${s.searchLayer} ${showSearch}`}>
                        <input ref="searchInp" type="text" placeholder="Search player"/>
                     </div>
                }
            </div>
        )
    }
}

export default SearchComponent;