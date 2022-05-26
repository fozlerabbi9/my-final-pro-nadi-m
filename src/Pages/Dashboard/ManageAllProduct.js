import React from 'react';

const ManageAllProduct = ({products,isLoading,refetch}) => {
  const {_id} = products

  const deleteButton = (id) => {
    console.log(id);
    const proced = window.confirm("Are You Agree For Delete ?")
    if (proced) {
        const url = `https://cryptic-waters-16109.herokuapp.com/allproducts/${id}`
        fetch(url, {
            method: "DELETE",
            headers: {
              "authorization": `bearer ${localStorage.getItem("AccessToken")}`
          }
        })
            .then(res => res.json())
            .then(data => {
              console.log(data);
            })
    }
}

    return (
        <tr >
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={products.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold talbeName">{products.name}</div>
              <div className="text-sm opacity-50 talbeName">Bangladesh</div>
            </div>
          </div>
        </td>
        <td className='talbeName'>
          {products.description}
          <br/>
        </td>
        <td>Price: ${products.price}</td>
        <th>
          <button onClick={()=>deleteButton(_id)} className="btn btn-primary btn-xs">Delete</button>
        </th>
      </tr>
    );
};

export default ManageAllProduct;