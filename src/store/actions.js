// types of action
import {
    SET_AUTH,
    SET_PATH,
    // LOGIN,
} from './types';

// actions
export const setPath = path => ({
  type: SET_PATH,
  payload: path
});

export const setAuth = (loggedIn, user) => ({
    type: SET_AUTH,
    payload: {
        loggedIn,
        user,
    }
});
