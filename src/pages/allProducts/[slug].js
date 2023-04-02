import CategoryProducts from '@/components/Categories/CategoryCard/CategoryProducts/CategoryProducts';
import fetchCatProductData from '@/redux/thunk/products/fetchCatProduct';

import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Products = () => {
    const dispatch = useDispatch();
    const router = useRouter()
    const { slug } = router.query
    useEffect(()=>{
        dispatch(fetchCatProductData(slug))
    },[dispatch])
    
    return (
        <div>
            <CategoryProducts></CategoryProducts>
        </div>
    );
};

export default Products;