import { create } from "zustand";

interface IBearState  {
    bears: number;
    increase: (by: number) => void;
}

const useBearStore  = create<IBearState>()((set) => ({
    bears: 0,
    increase(by) {
        set((state) => ({ bears: state.bears + by }));
    },
}));

export default useBearStore;