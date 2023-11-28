
class userService {
    getUsersController = () => {
        return fetch("http://localhost:3000/user/getUsers")
        .then((res) => res.json())
        .catch((err) => {
                console.log(err.message)
                throw err;
        })
    }
}

export default userService