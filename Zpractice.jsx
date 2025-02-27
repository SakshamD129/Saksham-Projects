import { create } from "zustand";
import { } from "zustand/middleware";

const Zpractice = create(
    ((set, get) => ({
        count: 0,
        tggle: false,
        increase: () => set((state) => ({ count: state.count + 1 })),
        decrease: () => set((state) => ({ count: state.count - 1 })),
        toggle: () => set((state) => ({ tggle: state.tggle ? false : true })),
        receiver: () => get().count
    }))
);

export default Zpractice;
