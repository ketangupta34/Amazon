export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "DELETE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.if === action.id
      );
      let newBasket = [...state.basket];
      newBasket.splice(index, 1);

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
