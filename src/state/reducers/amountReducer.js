//Reducter to change the state of amount in bank
const reducer = (state = 0, { payload }) => {
  if (payload === 'deposit') return state + 1;
  else if (payload === 'widraw') return state - 1;
  else return state;
};
export default reducer;
