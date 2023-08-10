import { useEffect } from "react";
import useProduct from "../hooks/useProducts";
import Products from "./Products";
import { useSetRecoilState } from "recoil";
import { productsAtom } from "../Recoil";

function Home() {
    const setProducts = useSetRecoilState(productsAtom);
    const { fetchAllProducts } = useProduct();
  
    useEffect(() => {
  
      const initializeProductList = async () => {
        try {
          const response = await fetchAllProducts();
          console.log(response);
          setProducts(response);
        } catch (err) {
          console.error(err);
        }
      }
  
      initializeProductList();
      // eslint-disable-next-line
    }, [])
  
    return (
      <div className='h-[90vh] items-center justify-center text-7xl'>
        <Products />
      </div>
    )
}

export default Home;