import { createContext, useContext, useState } from "react"

export const ProductContext = createContext(null)

function ProductState({children}) {

     const [product, setProduct] = useState([]);

  return (
    <ProductContext.Provider value={{product, setProduct}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductState;

export const useProduct = ()=> useContext(ProductContext);

