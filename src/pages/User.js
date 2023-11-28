import Reac, { useEffect, useState} from 'react'
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
                    <table className="table table-bordered">
                        <thead style={tableHeaderFontStyle} >
                            <tr >
                                <td>ID</td>
                                <td>FirstName</td>
                                <td>LastName</td>
                                <td>Age</td>
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