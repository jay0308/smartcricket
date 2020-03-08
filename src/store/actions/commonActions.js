export function loaderAction(val) {
    return {
        type: 'LOADER',
        payload: val
    };
}

export function successAction(val) {
    return {
        type: 'SUCCESS',
        payload: val
    };
}

export function genericPopupAction(val) {
    return {
        type: 'GENERIC_POPUP',
        payload: val
    };
}

export function userDataAction(val) {
    return {
        type: 'USER_DATA',
        payload: val
    };
}