import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users"); //we use await for full load then procede to next line
        setUsers(result.data.reverse());
    }
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`)
        loadUsers();

    }

    return (
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table class="table border shadow table-hover">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Website</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                            (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.website}</td>
                                    <td>{user.phone}</td>
                                    <td>
                                        <Link className=" btn btn-primary " to={`/user/${user.id}`} style={{ margin: '5px' }}>View</Link>
                                        <Link class=" btn btn-outline-primary" to={`/user/EditUser/${user.id}`} style={{ margin: '5px' }}>Edit</Link>
                                        <Link class=" btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Home
