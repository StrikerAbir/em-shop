import CustomerList from '@/components/CustomerList/CustomerList';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const Customer = () => {
    const router = useRouter();
    const { currentUser } = useSelector((state) => state.user);
    if (currentUser.length) {
        
        return (
            <>
                <CustomerList></CustomerList>
            </>
        );
    } else {
        router.push('/login')
    }
};

export default Customer;