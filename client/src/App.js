import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent'
// import Login from './components/Login';
// import Registration from './components/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavbarComponent/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;