// types of action
const Types = {
  SET_PATH: 'SET_PATH',
};
// actions
const setPath = path => ({
  type: Types.SET_PATH,
  payload: path
});

export default {
    setPath,
    Types
};
