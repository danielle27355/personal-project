// initialState object
const initialState = {
    user: {},
    character: {}
};

// action types
const SET_USER = "SET_USER";
const SET_CHARACTER = "SET_CHARACTER";

// reducer function
// function taking in state and an action as arguments
export default function userReducer(state = initialState, action){
    switch(action.type){
        case SET_USER:
            return {...state, user: action.payload}
        // default case - required
        case SET_CHARACTER:
            return {...state, character: action.payload}
        default:
            return {...state}
    }
};

// action creators
export function setUser(user){
    // returns an action - object with a type and an optional payload
    return {
        type: SET_USER, /* type is required */
        payload: user
    }
}

export function setCharacter(character){
    return {
        type: SET_CHARACTER,
        payload: character[0]
    }
}