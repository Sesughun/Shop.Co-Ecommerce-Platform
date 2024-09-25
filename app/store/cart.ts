import { count } from 'console';
import { create } from 'zustand'
const cartStore = create((set) => ({
  cart: [],

  subtotal: 0,
  discount: 0,
  deliveryfee: 200,
  total: 0,
  count: 0,
  amount:1,

  addItem: (item: any) => set((state: any) => {

    const items = {...item, qty: state.amount};
    const itemTotal = Number(item.price) * Number(items.qty);
    const updatedSubtotal = (Number(state.subtotal) + itemTotal).toFixed(2);
    const discountAmount = (Number(updatedSubtotal) * (20 / 100)).toFixed(2);
    const discountedSubtotal = Number(updatedSubtotal) - parseFloat(discountAmount);
    const total = (discountedSubtotal + state.deliveryfee).toFixed(2);
    const countTotal = state.count + 1;

    return {

      cart: [...state.cart, items],
      subtotal: updatedSubtotal,
      discount: discountAmount,
      total: total,
      count: countTotal,

    }
  }),
  amountUpdate:(amountCount:number) => set((state:any)=>{

    return{
      amount: amountCount}

  }),

  removeItem: (itemId: number) => set((state: any) => ({

    subtotal:state.cart.filter((item: any) =>  state.subtotal - item.subtotal),
    cart: state.cart.filter((item: any) => item.id !== itemId),
    count: state.count -1,
     

  })),

  updateItem: (itemId: number, updatedItem: object) => set((state: any) => ({
    
    cart: state.cart.map((item: any) =>

      item.id === itemId ? { ...item, ...updatedItem } : item

    )
  })),

  removeAll: () => set({ cart: [] }),

}));
export default cartStore;