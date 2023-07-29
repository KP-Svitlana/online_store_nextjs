import axios from 'axios';

import ProductList from '@/components/ProductsList/ProductsList';

export async function getStaticProps() {
    try {
        const res = await axios.get('https://64934ce0428c3d2035d1a156.mockapi.io/api/v1/users');
        const data = res.data;

        if (!data) {
            return {
                notFound: true,
            }
        }

        return {
            props: {
                products: {data},
            },
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                products: [],
            },
        };
    }
}

export default function Products({products}) {
    return (
        <div>
            <h1>Новинки</h1>
            <ProductList products={products}/>
        </div>
    );
}
