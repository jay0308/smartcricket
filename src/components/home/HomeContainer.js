import { connect } from 'react-redux';
import actions  from '../../store/actions';
import Home from "./Home";

const mapStateToProps = (state) => {
    return {
        loaderReducer: state.loaderReducer,
        successReducer:state.successReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        loaderAction: (val) => dispatch(actions.loaderAction(val)),
        createPost: (val) => dispatch(actions.createPost(val))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);