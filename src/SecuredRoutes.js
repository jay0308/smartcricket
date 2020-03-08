import React from "react";
import {withRouter} from "react-router-dom";

class SecuredRoutes extends React.Component{
    constructor(props){
        super(props);

        if(!localStorage.getItem("userInfo"))
            this.props.history.push("/login")
      
    }
    componentDidMount(){
        
    }
    render(){
        return(
            this.props.children
        )
    }
}

export default withRouter(SecuredRoutes);