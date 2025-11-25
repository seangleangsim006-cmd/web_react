import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const url = "http://127.0.0.1:8000/api/ptcs";
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      setProducts(data.data);
    }
    getData();
  }, [])

  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  )
}