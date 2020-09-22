import React, { useReducer } from 'react';
import BhajanContext from './bhajanContext';
import BhajanReducer from './bhajanReducer';
import bhajans from '../data/bhajanList.json';
import {
  GET_BHAJAN,
  SET_BHAJAN,
  RANDOM_BHAJAN,
  CLEAR_BHAJANS,
  SUGGEST_BHAJAN,
} from './types';

const BhajanState = (props) => {
  const initialState = {
    bhajans: bhajans,
    bhajan: {},
    bhajanSelected: [],
  };

  const [state, dispatch] = useReducer(BhajanReducer, initialState);

  const getBhajan = (index) => {
    dispatch({
      type: GET_BHAJAN,
      payload: {
        lyric: bhajans[index].lyrics,
        meaning: bhajans[index].meaning,
      },
    });
  };

  const setBhajan = (bhajan) => {
    dispatch({
      type: SET_BHAJAN,
      payload: bhajan,
    });
  };

  const randomBhajan = () => {
    const random = Math.floor(Math.random() * 454 + 1);
    dispatch({
      type: RANDOM_BHAJAN,
      payload: {
        lyric: bhajans[random].lyrics,
        meaning: bhajans[random].meaning,
      },
    });
  };

  const suggestBhajan = (bhajanselected) => {
    dispatch({
      type: SUGGEST_BHAJAN,
      payload: bhajanselected,
    });
  };

  const clearBhajan = () => {
    dispatch({
      type: CLEAR_BHAJANS,
      payload: {},
    });
  };

  return (
    <BhajanContext.Provider
      value={{
        bhajans: state.bhajans,
        bhajan: state.bhajan,
        bhajanSelected: state.bhajanSelected,
        getBhajan,
        clearBhajan,
        randomBhajan,
        suggestBhajan,
        setBhajan,
      }}
    >
      {props.children}
    </BhajanContext.Provider>
  );
};

export default BhajanState;
