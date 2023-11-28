import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import userService from '../controllers/userController'

 
const User = () => {

    const [user, setUser] = useState(null)
    const userServiceController = new userService();

    const tableHeaderFontStyle = {
        fontWeight: 'bold',
        backgroundColor: '#000000'
    }
    const tableHeaderStyle = {
        backgroundColor: '#000000 !important' , // Màu sắc nền
        color: '#ffffff !important' // Màu chữ
        // Các thuộc tính CSS khác tùy ý
      };
    useEffect(() => {
        userServiceController.getUsersController().then( data => {
            setUser(data)
        }).catch((err) => {
            console.log(err.message)
            throw err;
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Users</h2>
                </div>
                <div className="card-body">
                    <div style={{marginBottom: '5px', float: 'left'}}>
                        <Link to="user/add" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead style={tableHeaderFontStyle} >
                            <tr >
                                <td>ID</td>
                                <td>FirstName</td>
                                <td>LastName</td>
                                <td>Age</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            { user &&
                                user.map( item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.age}</td>
                                        <td >
                                            <a className='btn btn-primary'>Detail</a>
                                            <a className='btn btn-success'>Edit</a>
                                            <a className='btn btn-danger'>Remove</a>
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

export default User