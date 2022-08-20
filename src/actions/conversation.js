import Contacts from 'react-native-contacts';
import {
  GET_NUMBER_FAIL,
  GET_NUMBER_REQUEST,
  GET_NUMBER_SUCCESS,
} from '../constants/conversation';

export const getPhoneNumber = () => async dispatch => {
  try {
    dispatch({type: GET_NUMBER_REQUEST});
    const response = await Contacts.getAll();
    // console.log('res', response);
    dispatch({type: GET_NUMBER_SUCCESS, payload: response});
  } catch (error) {
    dispatch({
      type: GET_NUMBER_FAIL,
      payload: error,
    });
  }
};
