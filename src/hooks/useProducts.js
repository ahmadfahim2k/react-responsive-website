import axios from '../api/axios';

function useProduct() {

    const fetchAllProducts = async () => {
        try {
            const response = await axios.get('/products');
            return response?.data;
        } catch (err) {
            console.error(err);
        }
    }

    return { fetchAllProducts };

}

export default useProduct;