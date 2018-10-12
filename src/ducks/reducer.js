const initialState={
    username:'',
    password:'',
    picture:''
}

const UPDATE_USERNAME="UPDATE_USERNAME";
const UPDATE_PASSWORD="UPDATE_PASSWORD";
const UPDATE_PICTURE="UPDATE_PICTURE";

function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_USERNAME:
        return Object.assign({},state,{username:action.payload})
        case UPDATE_PASSWORD:
        return Object.assign({},state,{password:action.payload})
        case UPDATE_PICTURE:
        return Object.assign({},state,{picture:action.payload})
        default: 
        return state;
    }
}

/////Action Builders/Creators/////
export function updateUsername(username){
    return{
        type: UPDATE_USERNAME,
        payload: username
    }
}
export function updatePassword(password){
    return{
        type: UPDATE_PASSWORD,
        payload: password
    }
}
export function updatePicture(picture){
    return{
        type: UPDATE_PICTURE,
        payload: picture
    }
}

export default reducer;