import {
  GET_BHAJAN,
  SET_BHAJAN,
  RANDOM_BHAJAN,
  CLEAR_BHAJANS,
  SUGGEST_BHAJAN,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case GET_BHAJAN:
      return {
        ...state,
        bhajan: {
          lyric: action.payload.lyric,
          meaning: action.payload.meaning,
        },
      };
    case SET_BHAJAN:
      return {
        ...state,
        bhajan: action.payload,
      };
    case RANDOM_BHAJAN:
      return {
        ...state,
        bhajan: {
          lyric: action.payload.lyric,
          meaning: action.payload.meaning,
        },
      };
    case SUGGEST_BHAJAN:
      return {
        ...state,
        bhajanSelected: action.payload,
      };
    case CLEAR_BHAJANS:
      return {
        ...state,
        bhajan: action.payload,
      };

    default:
      return state;
  }
};
