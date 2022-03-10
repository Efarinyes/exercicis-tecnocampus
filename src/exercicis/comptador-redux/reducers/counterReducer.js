const initalState = {
  count: 0,
};

const counterReducer = (state = initalState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return {
        ...state,
        count: Math.max(0, Math.min(10, state.count + action.payload)),
      };
    case "DECREASE_COUNTER":
      return {
        ...state,
        count: Math.max(0, Math.min(10, state.count - action.payload)),
      };

    case "RESET":
      return {
        ...state,
        count: initalState.count,
      };
    default:
      return state;
  }
};

export default counterReducer;
