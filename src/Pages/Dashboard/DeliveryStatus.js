import React from 'react';

const DeliveryStatus = ({ product }) => {
    console.log(product);
    return (
        <tr>
            <th>1</th>
            <td> <img src={product.img} alt="" /> </td>
            <td className='status'><ul className="steps steps-vertical lg:steps-horizontal">
                <li className="step step-primary">Purchase</li>
                <li className="step step-primary">Shipping Confirmed</li>
                <li className="step">Receive Product</li>
            </ul></td>
            <td className='talbeName'>{product._id}</td>
        </tr>
    );
};

export default DeliveryStatus;