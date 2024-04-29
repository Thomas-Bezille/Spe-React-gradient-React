import {
  CHANGE_DIRECTION,
  CHANGE_FIRST_COLOR,
  CHANGE_LAST_COLOR,
} from '../actions/gradient';

const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIRST_COLOR:
      return {
        ...state,
        firstColor: action.color,
      };
    case CHANGE_LAST_COLOR:
      return {
        ...state,
        lastColor: action.color,
      };
    case CHANGE_DIRECTION:
      return {
        ...state,
        direction: action.newDirection,
      };

    default:
      return state;
  }
};

export default reducer;
