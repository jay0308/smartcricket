export function loaderReducer(state = false, action) {
    switch (action.type) {
        case 'LOADER':
            return action.payload;
        default:
            return state;
    }
}

export function genericPopupReducer(state = null, action) {
    switch (action.type) {
        case 'GENERIC_POPUP':
            return action.payload;
        default:
            return state;
    }
}

export function  successReducer(state = null, action) {
    switch (action.type) {
        case 'SUCCESS':
            return action.payload;
        default:
            return state;
    }
}

let userData = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
export function  userDataReducer(state = userData, action) {
    switch (action.type) {
        case 'USER_DATA':
            return action.payload;
        default:
            return state;
    }
}

