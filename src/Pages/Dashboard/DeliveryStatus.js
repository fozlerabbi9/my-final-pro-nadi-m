import React from 'react';

const DeliveryStatus = ({ product }) => {
    console.log(product);
    return (
        <tr>
            <th>1</th>
            <td>{product.name}</td>
            <td className='status'><ul class="steps steps-vertical lg:steps-horizontal">
                <li class="step step-primary">Purchase</li>
                <li class="step step-primary">Shipping Confirmed</li>
                <li class="step">Receive Product</li>
            </ul></td>
            <td className='talbeName'>{product._id}</td>
        </tr>
    );
};

export default DeliveryStatus;