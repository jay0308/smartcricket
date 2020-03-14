import {loaderAction,genericPopupAction, successAction} from "./commonActions";
import * as request from "../../utils/requests";
import constants from "../../utils/constants";

export const createPost = (formData) => {
    return ((dispatch,getState) => {
        dispatch(loaderAction(true))
        request.postRequestWithToken(constants.APIS.createPost,formData,{ 'Content-Type': 'multipart/form-data' })
        .then((res)=>{
            res = res.data;
            dispatch(loaderAction(false))
            if(!res.results.exception){
                dispatch(successAction({"postCreated":res.results.body}));
            }else{
                dispatch(genericPopupAction(res.message));
            }
            console.log("Res",res)

        })
        .catch((error)=>{
            dispatch(loaderAction(false))
            dispatch(genericPopupAction(error.toString()));
            console.log("Error",error)
        })
    });
}

