import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.total += action.payload.price;
        },
        removeItem: (state, action) => {
            const idx = state.items.findIndex(item => item.id === action.payload);
            if (idx !== -1) {
                state.total -= state.items[idx].price;
                state.items.splice(idx, 1);
            }
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
