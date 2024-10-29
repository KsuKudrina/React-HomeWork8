import { createSlice } from "@reduxjs/toolkit";

const url = "../data/data.json"

export async function fetchProducts(url) {
  try {
    const responce = await fetch(url);
    const data = await responce.json();
    return data;
    
  } catch (error) {
    console.error(error.message);
  }
}


const initialState = {
  products: JSON.parse(localStorage.getItem("basket") || "[]"),
  
};


export const data = await fetchProducts(url);

export const saveToLocalStorage = (products) => {
    localStorage.setItem("basket", JSON.stringify(products));
};


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    
    addProduct: (state, action) => {
      const productId = action.payload.id
      const newProduct = data.find(product => product.id === productId);

      const products = [...state.products, newProduct];
      saveToLocalStorage(products);
      state.products = products;
    },
    deleteProduct: (state, action) => {
      const products = state.products.filter(
        (product) => product.id !== action.payload,
      );
      saveToLocalStorage(products);
      state.products = products;
    },
    setQuantity: (state, action) => {
      const product = state.products.find(item => item.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.value;
      }
      saveToLocalStorage(state.products);
    },
  },
});

export const { addProduct, deleteProduct, setQuantity} =
  productSlice.actions;
export default productSlice.reducer;