import { useRecoilValue } from "recoil";
import Card from "./Card";
import { productsAtom } from "../Recoil";

function Products() {

    const products = useRecoilValue(productsAtom);

    return (
        <div className='bg-white'>
            <span className='ml-4 text-center text-3xl'>Check out these Products!</span>
            <div className='w-full flex flex-row flex-wrap justify-evenly items-center'>
                {products.map((product, i) => {
                    return <Card item={product} key={i} />
                })}
            </div>
        </div>
    );
}

export default Products;