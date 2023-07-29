
import ProductsList from "@/components/ProductsList/ProductsList";
import axios from "axios";

export const getStaticProps = async () => {
    try {
        const resProducts = await axios.get('https://64934ce0428c3d2035d1a156.mockapi.io/api/v1/users');
        const dataProducts = await resProducts.data;
        if (!dataProducts) {
            return {
                notFound: true,
            }
        }

        // const salesRes = await axios.get('URL_TO_SALES_API');
        // const salesData = await salesRes.json();
        //
        // const recommendationsRes = await axios.get('URL_TO_RECOMMENDATIONS_API');
        // const recommendationsData = await recommendationsRes.json();

        return {
            props: {
                products: dataProducts,
                // sales: salesData,
                // recommendations: recommendationsData,
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                products: [],
                // sales: [],
                // recommendations: [],
            },
        };
    }
}

export default function Products({products}) {
    console.log(products)
    return (
        <>
            <h2>Новинки</h2>
            <ProductsList products={products}/>
        </>
    );
};

