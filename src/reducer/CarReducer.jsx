export const CarReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const item = action.payload;
    const cartArray = [...state.cartArray];
    const itemFromCart = cartArray.find((cartItem) => cartItem.id === item.id);

    if (!itemFromCart) {
      cartArray.push({ ...item, amount: 1 });
    } else {
      cartArray.forEach((cartItem) => {
        if (cartItem.id === itemFromCart.id) {
          cartItem.amount = cartItem.amount + 1;
        }
      });
    }

    return { ...state, cartArray: cartArray }; // Make sure to return a new state object
  }

  if (action.type === "REMOVE_CART") {
    const cartArray = [...state.cartArray];
    const itemFromCart = cartArray.find(
      (cartItem) => cartItem.id === action.payload
    );

    if (!itemFromCart) {

      return;
    }else{
      cartArray.forEach((cartItem) => {
        if (cartItem.id === itemFromCart.id) {
          cartItem.amount =  cartItem.amount < 0  ? 0 : cartItem.amount - 1;
        }
      });
    }


    return  { ...state, cartArray: cartArray };
  }

  return state;
};
