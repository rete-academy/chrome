import ACTION from './actions';

const defaultState = {
  path: ''
};

const pathReducer = (state = defaultState, action) => {
    console.log('state is: ', state);
    console.log('action is: ', action);

    switch (action.type) {
        case ACTION.Types.SET_PATH: {
            const newState = {
                ...state,
                path: action.payload,
            };
            return newState;
        }

        default:
            return state;
  }
};

export default pathReducer;
