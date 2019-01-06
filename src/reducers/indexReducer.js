import { actionTypes } from '../actions/indexAction';

const defaultState = {
  time: 30,
  serie: 3,
  rest: 40,
  loop: 3,
  running: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.toggle_run:
      return {
        ...state,
        running: !state.running,
      };
    case actionTypes.update_value:
      return {
        ...state,
        [action.label]: action.new_value,
      };
    case actionTypes.reset:
      return defaultState;
    default:
      return state;
  }
};
