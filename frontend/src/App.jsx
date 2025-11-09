
import './App.css' // this css will be applied to whole page
import Navigation from './components/shared/Navigation/Navigation';
import Home from './pages/Home/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from './pages/Register/Register';
import Login from './pages/login/Login';


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>

    </BrowserRouter>
    
    
    
    </>
  )
}

export default App
