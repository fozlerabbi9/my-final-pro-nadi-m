import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import DeliveryStatus from './DeliveryStatus';

const DeliveryProductStatus = () => {
    const [user, loading] = useAuthState(auth);
    const email = user?.email
    const { isLoading, error, data: products, refetch } = useQuery('service', () =>
        fetch(`http://localhost:4000/myorders/?email=${email}`,
            {
                method: "GET",
                headers: {
                    "authorization": `bearer ${localStorage.getItem("AccessToken")}`
                }
            }
        ).then(res =>
            res.json()
        )
    )
    // refetch()

    if (isLoading && loading) {

        return <Loading></Loading>
    }
 
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Status</th>
                            <th className='talbeName'>Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !products?.result?.filter ? <Loading></Loading> : products.result.filter(product=>product.shipping ==="confirm").map((product, index) => <DeliveryStatus key={product._id} refetch={refetch} isLoading={isLoading} product={product} index={index} > </DeliveryStatus>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DeliveryProductStatus;