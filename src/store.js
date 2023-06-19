import create from 'zustand';
import { persist } from "zustand/middleware";


let store = (set)=>({
    user: null,
    setUser: (newUser)=> set((state)=>({user: newUser })),
    token: null,
    setToken: (newToken) => set((state) => ({token: newToken}))
});

store = persist(store, {name: "user_settings"});

const useStore = create(store);

export default useStore;



