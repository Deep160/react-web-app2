import React from 'react';
import { Link } from 'react-router-dom';
import dshop from '../images/Group 2.svg';
import search from '../images/search_small.svg';
import line from '../images/Vector 1.svg';
import shop from '../images/Vector.svg';
import plusSymbol from '../images/Group 7.svg';
import user from '../images/Group 3.svg';


export default function Navbar() {
  return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-transparent navbar-light ">
                <div className="container-fluid row my-4">
                    <div class="col-md-5">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item active">
                                    <Link class="nav-link active" aria-current="page" to="/">HOME</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">PRODUCT</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/">CONTACT US</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/">ABOUT US</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-2 mt- text-center'>
                        <img src={dshop} alt="" />
                    </div>

                        <div class="col-md-5 d-flex">
                        <div class="row justify-content-end w-100">
                            <div class="col-md-6 bg-body mx-auto rounded-pill">
                                <form class="d-flex" role="search">
                                    <img src={search} class="img-fluid mt-2" alt=""/>
                                    <input class="form-control me-2 border-0" type="search" placeholder="Search"
                                        aria-label="Search"/>
                                    <img src={line} class="d-flex" alt=""/>
                                    <img src={shop} class="img-fluid ms-2 d-flex" alt=""/>
                                    <img src={plusSymbol} class="img-fluid mb-4 d-flex" alt=""/>
                                </form>
                            </div>
                            <div class="col-md-3 d-flex align-self-center profile ">
                                <li class="nav-item dropdown d-flex align-item-center">
                                    <label className='my-auto'>Deep_Patel</label>

                                    <img src={user} class="nav-link dropdown-toggle ms-3 img-fluid"
                                        href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false" alt=""/>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link class="dropdown-item bg-transparent " to="/">Profile</Link></li>
                                        <li><Link class="dropdown-item bg-transparent" to="/">Settings</Link></li>
                                        <li>
                                            <hr class="dropdown-divider "/>
                                        </li>
                                        <li><Link class="dropdown-item bg-transparent" to="/">Log out</Link></li>
                                    </ul>
                                </li>
                            </div>

                        </div>

                    

                        
                    </div>
                </div>
            </nav>
        </div>
  )
}
