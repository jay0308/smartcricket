import { connect } from 'react-redux';
import actions  from '../../../store/actions';
import Header from "./index";

const mapStateToProps = (state) => {
    return {
        userDataReducer: state.userDataReducer || null,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        loaderAction: (val) => dispatch(actions.loaderAction(val))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);