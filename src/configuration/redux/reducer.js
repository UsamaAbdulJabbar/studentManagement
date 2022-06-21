const INITIAL_STATE = {
  userName: "Usama Ahmed",
  email: "Usama@gmail.com",
  contact: "132154456",
  cnic: "241325464654",
}

export default (state = INITIAL_STATE, action) => {
  if (action.type == "updateData") {
    return { ...state, userName: action.userName };

  }
  return state;
}