import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/logout" element={<Logout/>}/>
        <Route path="/" element={<Navigate replace to="/home" />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
