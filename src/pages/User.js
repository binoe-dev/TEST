import { useEffect, useState } from "react";

const User = () => {

    const [ user, setUser] = useState(null)

    useEffect( () => {
        fetch("http://localhost:3000/user/getUsers").then((res) => {
            return res.json();
        }).then((resp) => {
            setUser(resp)
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>User dasboard</h2>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>LastName</td>
                                <td>Age</td>
                            </tr>
                        </thead>
                        <tbody>
                         { user &&
                            user.map( item => (
                                <tr key = {item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.age}</td>
                                    <td>
                                        <a className="btn btn-success">Edit</a>
                                        <a className="btn btn-danger">Remove</a>
                                        <a className="btn btn-primary">Detail</a>
                                    </td>
                                </tr>
                            ))
                         }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User;