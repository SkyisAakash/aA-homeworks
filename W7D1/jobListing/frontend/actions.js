const selectLocation = (city, jobs) => {
  return { type: "SWITCH_LOCATION",
            city,
            jobs,
          };
};

export default selectLocation;

// window.selectLocation = selectLocation;
//
// store.dispatch(selectLocation);
// store.getState();
