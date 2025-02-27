import { create } from 'zustand';

export const CartAdd = create((set) => ({
    count: 0,
    additional: [],
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
    putitin: (item) => set((state) => ({ additional: [...state.additional, item] })),
}));

export default CartAdd;
