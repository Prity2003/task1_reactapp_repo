const intialState = { fname: "", lname: "" };

const compBReducer = (state = intialState, action) => {
  switch (action.type) {
    case "FNAME":
      return { ...state, fname: action.payload };
    case "LNAME":
      return { ...state, lname: action.payload };
    default:
      return state;
  }
};
export default compBReducer;
