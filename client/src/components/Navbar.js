import '../App.css';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <>
            <nav class="navbar navbar-expand-lg shadow">
                <div class="container">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>

                        </ul>

                        <NavLink className="navbar-brand fw-bold fs-4 mx-auto" to="/home">Aesthic Fox</NavLink>

                        {
                            props.auth ?
                                <>
                                    <NavLink className="btn btn-primary ms-auto rounded-pill" to="/login">
                                        <i className="fa fa-sign-in ms-2"> </i>
                                        Login
                                    </NavLink>

                                    <NavLink className="btn btn-outline-primary ms-2 rounded-pill" to="/register">
                                        <i className="fa fa-user-plus ms-2"> </i>
                                        Register
                                    </NavLink>
                                </> : <>

                                    <NavLink className="btn btn-outline-primary ms-2 rounded-pill" to="/dashboard">
                                        <i className="fa fa-user-plus ms-2"> </i>
                                        Dashboard
                                    </NavLink>

                                    <NavLink className="btn btn-outline-primary ms-2 rounded-pill" to="/logout">
                                        <i className="fa fa-sign-out ms-2"> </i>
                                        Logout
                                    </NavLink>

                                </>
                        }

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
