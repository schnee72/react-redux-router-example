export default (state = {count: 0}, action) => {
  switch (action.type) {
    case 'PLUS':
      return {...state, count: state.count + 1};
    case 'MINUS':
      return {...state, count: state.count - 1};
    default:
      return state;
  }
};
