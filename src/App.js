import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from './pages/User';
function App() {
  return (
    <div className="App">
       <h1>Hi KVVVVVVVVVVVVVV</h1>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<User/>}>
              
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
