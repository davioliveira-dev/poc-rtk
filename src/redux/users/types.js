const types = {
  getUsers: (state) => {
    state.isLoading = true;
  },
  getUsersSuccess: (state, { payload }) => {
    state.users = payload;
    state.isLoading = false;
    state.hasErrors = false;
  },
  getUsersFail: (state, { payload }) => {
    state.isLoading = false;
    state.hasErrors = payload;
  },
  updateUser: (state) => {
    state.isLoading = true;
  },
  updateUserSuccess: (state, { payload }) => {
    state.users = payload;
    state.isLoading = false;
    state.hasErrors = false;
  },
  updateUserFail: (state, { payload }) => {
    state.isLoading = false;
    state.hasErrors = payload;
  },
};

export default types;
