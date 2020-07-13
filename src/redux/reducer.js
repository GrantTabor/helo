const initialState = {
    username: "",
    id: "",
    profilePicture: "",
    user: {},
    posts:[{}]
}

const GET_USERNAME = "GET_USERNAME";
const GET_USERID = "GET_USERID";
const GET_PROFILE_PICTURE = "GET_PROFILE_PICTURE";

export function getUser(username){
    return{
        type: GET_USERNAME,
        payload: username
    }  
}

export function getUserId(id){
    return{
        type: GET_USERID,
        payload: id
    }
}

export function getProfilePicture(profilePicture){
    return{
        type: GET_PROFILE_PICTURE,
        payload: profilePicture
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_USERNAME:
            return {...state, username: payload}
        case GET_USERID: 
            return {...state, id: payload}
        case GET_PROFILE_PICTURE:
            return {...state, profilePicture: payload}
        default: 
            return state;
    }
}