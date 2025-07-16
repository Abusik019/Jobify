import { useSelector } from 'react-redux'
import CreateFreelancerProfile from '../CreateFreelancerProfile';
import CreateCustomerProfile from '../CreateCustomerProfile';

export default function CreateProfile() {
    const userInfo = useSelector((state) => state.auth.userInfo);

    return (
        <>
            {userInfo?.isFreelancer ? <CreateFreelancerProfile /> : <CreateCustomerProfile />}
        </>
    )
}
