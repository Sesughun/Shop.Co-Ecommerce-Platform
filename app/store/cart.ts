import {create} from 'zustand'
const cartStore=create((set)=>({
    cart:[],
    
    addItem: (item:any) => set((state:any) => ({
      cart: [...state.cart, item]
    })),
    
    removeItem: (itemId:number) => set((state:any) => ({
      cart: state.cart.filter((item:any) => item.id !== itemId)
    })),
    
    updateItem: (itemId:number, updatedItem:object) => set((state:any) => ({
      cart: state.cart.map((item:any) => 
        item.id === itemId ? { ...item, ...updatedItem } : item
      )
    })),
    
    removeAll: () => set({ cart: [] }),

}));
export default cartStore;