import create from 'zustand';

export interface IStore {
    userName: string;
    setUserName: (name: string) => void;
}
export const useChatStore = create<IStore>((set) => ({
    userName: '',
    setUserName: (userName: string) => set({userName})
}));