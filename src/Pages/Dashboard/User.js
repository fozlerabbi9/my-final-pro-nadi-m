import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';




const User = ({ user, refetch, index, isLoading }) => {
    const { Role } = user
    const [firebaseUser] = useAuthState(auth)

    if (isLoading) {
        return <Loading></Loading>
    }

    const Admin = () => {
        fetch(`http://localhost:4000/user/admin/${user?.email}`, {
            method: "PUT",
            headers: {
                "authorization": `bearer ${localStorage.getItem("AccessToken")}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error("Failed To Make An Admin")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Make Admin Done")
                    refetch()
                }

            })
    }

    const RemoveAdmin = () => {
        fetch(`http://localhost:4000/user/admin/${user?.email}`, {
            method: 'PATCH',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                refetch()
            });
    }
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            {Role !== "admin" ? <td><button onClick={Admin} class="btn btn-xs btn-primary">Make Admin</button></td> : <td></td>}
            {firebaseUser.email === user.email ? <td><button disabled onClick={RemoveAdmin} class="btn btn-xs btn-primary">Remove</button></td> : <td><button disabled={Role !== "admin"} onClick={RemoveAdmin} class="btn btn-xs btn-primary">Remove</button></td>}

        </tr>


    );
};

export default User;