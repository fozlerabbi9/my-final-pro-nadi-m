import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../src/firebase.init';
import Loading from './Loading';

const MakeAdmin = (user) => {
    const [users, setUsers] = useState([])
    const [userLoading, setUserLoading] = useState(true)
    if (userLoading) {
        <Loading></Loading>
    }
    useEffect(() => {
        fetch(`https://cryptic-waters-16109.herokuapp.com/user/?email=${user?.email}`, {
            method: "GET",

        })
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setUserLoading(false)
            })
    }, [user])
    return [users, setUsers, userLoading]
};

export default MakeAdmin;