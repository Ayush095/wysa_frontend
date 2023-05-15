import create from 'zustand';
import { persist } from "zustand/middleware";


let store = (set)=>({
    user: null,
    setUser: (newuser)=> set((state)=>({user: newuser })),
});

store = persist(store, {name: "user_settings"});

const useStore = create(store);

export default useStore;



