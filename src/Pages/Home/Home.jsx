import React, { Component, Fragment, createContext } from "react";
import PostComponent from "../../Component/PostComponent/PostComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import DetailPostComponent from "../../Component/PostComponent/DetailPostComponent";
import Layanan from "../Layanan/Layanan";
import Hooks from '../Hooks/Hooks';


class Home extends Component {

   
   
    render(){
        return (
            <BrowserRouter>
               <Fragment>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container">
                            <a className="navbar-brand" href="#">React-Dev</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Post</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/service">Service</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contacts">Contacts</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/hooks">Hooks</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Route path="/" exact component={PostComponent} />
                    <Route path="/service" exact component={Layanan} />
                    <Route path="/hooks" exact component={Hooks} />
                    <Route path="/detail-post/:id" exact component={DetailPostComponent} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contacts" exact component={Contacts} />
                </Fragment>
            </BrowserRouter>
        )
    }


    
}

export default Home;