import {loginSubmit,otpSubmit, createUser,getUser} from "./userAction";
import {genericPopupAction,clearPostCreated,successAction, scoringAction, getPlayerStyles} from "./commonActions";
import {createPost,getPost,likePost} from "./postActions";

const actions = {
    loginSubmit,
    otpSubmit,
    genericPopupAction,
    createUser,
    createPost,
    getPost,
    clearPostCreated,
    likePost,
    getUser,
    successAction,
    scoringAction,
    getPlayerStyles
}
export default actions;