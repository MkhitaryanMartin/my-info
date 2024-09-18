import {create} from 'zustand';


type Store = {
   user: Record<string, string> ;
  getUser: (user: { name: string; avatar: string }) => void; 
};


export const useUserStore = create<Store>((set) => ({
  user: {},
  getUser: (user) => set({ user }), 
}));
