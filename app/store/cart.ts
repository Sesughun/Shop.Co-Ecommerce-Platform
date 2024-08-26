import { create } from 'zustand'
const cartStore = create((set) => ({
  cart: [],

<<<<<<< HEAD
    subtotal:0,
    discount:0,
    deliveryfee:200,
    total:0,
    count:0,
    
    addItem: (item:any) => set((state:any) => {
      
  const updatedSubtotal = (Number(state.subtotal) + item.price).toFixed(2);
  const discountAmount = (updatedSubtotal * (20 / 100)).toFixed(2);  // 20% discount
  const discountedSubtotal = updatedSubtotal - parseFloat(discountAmount);
  const total = (discountedSubtotal + state.deliveryfee).toFixed(2);
 const countTotal=state.count+1
  return {
    cart: [...state.cart, item],
    subtotal: updatedSubtotal,
    discount: discountAmount,
    total: total,
    count: countTotal
  };


      
    }),
    
    removeItem: (itemId:number) => set((state:any) => ({
      cart: state.cart.filter((item:any) => item.id !== itemId)
    })),
    
    updateItem: (itemId:number, updatedItem:object) => set((state:any) => ({
      cart: state.cart.map((item:any) => 
        item.id === itemId ? { ...item, ...updatedItem } : item
      )
    })),
    
    removeAll: () => set({ cart: [] }),
=======
  subtotal: 0,
  discount: 0,
  deliveryfee: 200,
  total: 0,
  count: 0,

  addItem: (item: any) => set((state: any) => {
    console.log(item)
    console.log(state)
    const updatedSubtotal = (Number(state.subtotal) + item.price).toFixed(2);
    const discountAmount = (updatedSubtotal * (20 / 100)).toFixed(2);  // 20% discount
    const discountedSubtotal = updatedSubtotal - parseFloat(discountAmount);
    const total = (discountedSubtotal + state.deliveryfee).toFixed(2);
    const countTotal = state.count + 1
    return {
      cart: [...state.cart, item],
      subtotal: updatedSubtotal,
      discount: discountAmount,
      total: total,
      count: countTotal
    }
  }),

  removeItem: (itemId: number) => set((state: any) => ({
    cart: state.cart.filter((item: any) => item.id !== itemId)
  })),

  updateItem: (itemId: number, updatedItem: object) => set((state: any) => ({
    cart: state.cart.map((item: any) =>
      item.id === itemId ? { ...item, ...updatedItem } : item
    )
  })),

  removeAll: () => set({ cart: [] }),
>>>>>>> 252382153e57f61b43029e5d3b5f9f419a2636e1

}));
export default cartStore;