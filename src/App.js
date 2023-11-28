import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from './pages/User';
import AddUser from './pages/addUser';
import DetailUser from './pages/detailUser';
import EditlUser from './pages/editUser';

function App() {
  return (
    <div className="App">
       <h1>Hi KVVVVVVVVVVVVVV</h1>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<User/>}></Route>
            <Route path='/user/add' element={<AddUser/>}></Route>
            <Route path='/user/detail/:userId' element={<DetailUser/>}></Route>
            <Route path='/user/edit/:userId' element={<EditlUser/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
