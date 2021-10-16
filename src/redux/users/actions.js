import { types } from './index';

export function fetchUsers() {
  return async (dispatch) => {
    dispatch(types.getUsers());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      dispatch(types.getUsersSuccess(data));
    } catch (error) {
      dispatch(types.getUsersFail(error));
    }
  };
}

export function fetchOneUserById(id) {
  return async (dispatch) => {
    dispatch(types.updateUser());
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      dispatch(types.updateUserSuccess(data));
    } catch (error) {
      dispatch(types.updateUserFail(error));
    }
  };
}
