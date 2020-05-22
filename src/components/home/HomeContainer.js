import { connect } from 'react-redux';
import actions  from '../../store/actions';
import Home from "./Home";

const mapStateToProps = (state) => {
    return {
        loaderReducer: state.loaderReducer,
        successReducer:state.successReducer,
        userDataReducer:state.userDataReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        loaderAction: (val) => dispatch(actions.loaderAction(val)),
        createPost: (val) => dispatch(actions.createPost(val)),
        getPost:() => dispatch(actions.getPost()),
        clearPostCreated : () => dispatch(actions.clearPostCreated()),
        likePost:(postId) => dispatch(actions.likePost(postId)) 
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);