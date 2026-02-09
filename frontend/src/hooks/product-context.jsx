import { createContext, useState, useContext } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({children}) => {
  const [currentProduct, setCurrentProduct] = useState(null);

  return(
    <ProductContext.Provider value={{currentProduct, setCurrentProduct}}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => useContext(ProductContext)