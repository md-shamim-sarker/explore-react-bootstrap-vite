import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Cards from './Card';

const Axios = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('./products.json')
            .then(response => setProducts(response.data));
    }, []);

    // console.log(products);

    return (
        <div style={{
            width: "100vw",
            dispaly: "grid",
            gridTemplateColumns: "repeat(3, 1fr)"
        }}>
            {
                products.map(product => <Cards
                    key={product.id}
                    product={product}
                ></Cards>)
            }
        </div>
    );
};

export default Axios;