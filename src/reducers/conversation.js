import {
  GET_NUMBER_FAIL,
  GET_NUMBER_REQUEST,
  GET_NUMBER_SUCCESS,
} from '../constants/conversation';

export const getPhoneNumber = (state = {numbers: []}, action) => {
  switch (action.type) {
    case GET_NUMBER_REQUEST:
      return {loading: true};
    case GET_NUMBER_SUCCESS:
      return {loading: false, numbers: action.payload};
    case GET_NUMBER_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
