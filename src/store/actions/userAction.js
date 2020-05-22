import {loaderAction,genericPopupAction, successAction,userDataAction} from "./commonActions";
import * as request from "../../utils/requests";
import constants from "../../utils/constants";

export const loginSubmit = (email) => {
    return ((dispatch,getState) => {
        dispatch(loaderAction(true))
        let reqObj = {
            "contactNo":email
        }
        request.postRequest(constants.APIS.sendOtp,reqObj)
        .then((res)=>{
            res = res.data;
            dispatch(loaderAction(false))
            if(!res.results.exception){
                dispatch(successAction({...getState().successReducer,"sendOtp":res.results.body}));
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

export const otpSubmit = (otp,email,userAction) => {
    return ((dispatch,getState) => {
        dispatch(loaderAction(true))
        let reqObj = {
            "contactNo":email,
            "otp":otp,
            "reqType":userAction
        }
        request.postRequest(constants.APIS.verifyOtp,reqObj)
        .then((res)=>{
            res = res.data;
            dispatch(loaderAction(false))
            if(!res.results.exception){
                dispatch(successAction({...getState().successReducer,"UserInfo":res.results.body}));
                dispatch(userDataAction(res.results.body))
                localStorage.setItem("userInfo", JSON.stringify(res.results.body))
                window.location.href = "/"
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

export const createUser = (name,email) => {
    return ((dispatch,getState) => {
        dispatch(loaderAction(true))
        let reqObj = {
            "contactNo":email,
            "name":name
        }
        request.postRequest(constants.APIS.createUser,reqObj)
        .then((res)=>{
            res = res.data;
            dispatch(loaderAction(false))
            if(!res.results.exception){
                dispatch(successAction({...getState().successReducer,"sendOtp":res.results.body}));
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

export const getUser = (query) => {
    return ((dispatch,getState) => {
        dispatch(loaderAction(true))
        request.getRequest(`${constants.APIS.getUser}${query ? "?name="+query : ""}`)
        .then((res)=>{
            res = res.data;
            dispatch(loaderAction(false))
            if(!res.results.exception){
                dispatch(successAction({...getState().successReducer,"getUserList":res.results.body}));
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

