import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.totalAmount =
        state.totalAmount + Math.round(action.payload.price / 100);
      let existingItemIndex = state.items.indexOf(
        ...state.items.filter(
          (item) => Number(item.id) === Number(action.payload.id)
        )
      );

      let existingItem = state.items[existingItemIndex];
      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
        state.items[existingItemIndex] = existingItem;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      let existingItemIndex = state.items.indexOf(
        ...state.items.filter(
          (item) => Number(item.id) === Number(action.payload)
        )
      );
      let existingItem = state.items[existingItemIndex];
      state.totalAmount =
        state.totalAmount - Math.round(existingItem.price / 100);
      if (existingItem.quantity > 1) {
        existingItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        state.items[existingItemIndex] = existingItem;
      } else {
        state.items.splice(existingItemIndex, 1);
      }
    },
    closeItem: (state, action) => {
      let existingItemIndex = state.items.indexOf(
        ...state.items.filter(
          (item) => Number(item.id) === Number(action.payload)
        )
      );
      console.log(state.items[existingItemIndex].price);
      state.totalAmount =
        state.totalAmount -
        Math.round(state.items[existingItemIndex].price / 100) *
          state.items[existingItemIndex].quantity;
      state.items.splice(existingItemIndex, 1);
    },
    clearCart: (state) => {
      return { items: [], totalAmount: 0 };
    },
  },
});

export const { addItem, removeItem, closeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
