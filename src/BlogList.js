import React, { useState, useEffect } from 'react';
import User from './User';
import './BlogList.css'

export default function BlogList(props) {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        (async function loadUsers() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const data = await response.json();
            setUsers(data);
        }());
    }, []);

    return (
        <>
            {users?.map(user => <User key={user.id} user={user} setCurrent={props.setCurrent} setBlogShowing={props.setBlogShowing} />)}
        </>
    )
}