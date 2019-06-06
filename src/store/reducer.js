import {
    SET_PATH,
    LOGIN,
} from './types';

export default (state, action) => {
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
