import React from 'react';

const ManageAllProduct = ({products,isLoading,refetch}) => {
    console.log(products);
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </th>
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={products.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">{products.name}</div>
              <div class="text-sm opacity-50">Bangladesh</div>
            </div>
          </div>
        </td>
        <td>
          {products.description}
          <br/>
        </td>
        <td>Price: ${products.price}</td>
        <th>
          <button class="btn btn-primary btn-xs">Delete</button>
        </th>
      </tr>
    );
};

export default ManageAllProduct;