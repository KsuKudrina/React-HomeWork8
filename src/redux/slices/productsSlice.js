import { createSlice } from "@reduxjs/toolkit";

const url = "../data/data.json"

export async function fetchProducts(url) {
  try {
    const responce = await fetch(url);
    // return await responce.json();
    const data = await responce.json();
    // console.log(data);
    return data;
    
  } catch (error) {
    console.error(error.message);
  }
}

const initialState = {
  products: JSON.parse(localStorage.getItem("basket") || "[]"),
};

function findProductInData(array, productId) {
  const addedProduct = array.find(product => product.id === productId);
 

  if (addedProduct !== undefined) {
    return addedProduct;
  }
  // return addedProduct;
}

function haveProductInStore(productId) {
  let isInStore = false;
  const produstLS = JSON.parse(localStorage.getItem("basket"));
  produstLS.forEach(product => {

    if (product.id === productId) {
      isInStore = true;
      return isInStore;
    }
  });
  return isInStore;
}

export const data = await fetchProducts(url);

export const saveToLocalStorage = (products) => {
    localStorage.setItem("basket", JSON.stringify(products));
};


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = findProductInData(data, action.payload);
      // console.log(data);
      // console.log(action.payload);
      if (haveProductInStore(action.payload)) return;
      
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