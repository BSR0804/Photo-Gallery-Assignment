export const initialState = JSON.parse(localStorage.getItem('favourites')) || [];

export const favouritesReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE': {
      const exists = state.includes(action.payload);
      const newState = exists
        ? state.filter((id) => id !== action.payload)
        : [...state, action.payload];
      
      localStorage.setItem('favourites', JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
};
