const initialState = {
  city: "Please Select",
  jobs: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "SWITCH_LOCATION":
    // debugger;
      return { jobs: action.jobs,
               city: action.city
             };
    default:
    // debugger;
      return state; // remove this and fill out the body of the reducer function
  }
};
// window.reducer = reducer;
export default reducer;
