import {
    SET_PATH,
    LOGIN,
} from './types';

const defaultState = {
    path: '/',
    loggedIn: false,
    user: null,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case SET_PATH: 
            return {
                ...state,
                path: action.payload,
            };
        case LOGIN: 
            return {
                ...state,
                loggedIn: action.payload.loggedIn,
                user: action.payload.user,
            };

        default:
            return state;
    }
};
