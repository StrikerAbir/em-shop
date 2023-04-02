import Cart from '@/components/Cart/Cart';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

const MyCart = () => {
    const router = useRouter();
    const { currentUser } = useSelector((state) => state.user);
    if (currentUser.length) {
        
        return (
            <div className='min-h-[80vh]'>
                <Cart></Cart>
            </div>
        );
    } else {
        router.push('/login')
    }
};

export default MyCart;