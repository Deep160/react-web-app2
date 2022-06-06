import React from 'react';
import { Link } from 'react-router-dom';

import dshop from '../images/Group 2.svg';



export default function Footer() {
  return (
    <div className="container footer">
    <hr class="border-dark rounded opacity-100 border-top "/>
            <footer className="text-center text-lg-start">

                <div className="row p-4">

                    <div className="col-lg-4 col-md-6 column-1 ">
                        <img src={dshop} alt=""/>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0 column-2">
                        <h5 className="text-uppercase mb-3">COMPANY</h5>

                        <ul className="list-unstyled ">
                            <li className="mb-2">
                                <Link to="/" className="nav-link text-dark">Delivery</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="nav-link text-dark">Collection</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="nav-link text-dark">Returns</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="nav-link text-dark">Account</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6  mb-md-0">
                        <h5 className="text-uppercase mb-3">FOLLOW</h5>

                        <ul className="list-unstyled mb-5">
                            <li className="mb-2">
                                <Link to="/" className="nav-link text-dark">Facebook</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="nav-link text-dark">Instagram</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="nav-link text-dark">Pintrest</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="nav-link text-dark">Youtube</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-6  mb-md-0">
                        <h5 className="text-uppercase mb-5">GET 15 % OFF ON YOUR FIRST ORDER BY SUBSCRIBEING</h5>

                        <div className="d-flex">
                            <input type="email" className="pb-1 border-0 border-bottom border-dark form-control" name="Email" id="email" placeholder="Email"
                                />
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                className="bi bi-arrow-right mt-1 arrow" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </div>
                        <div className="mt-5 pt-2 bg-body float-end">
                            <label>Design by Dharmik Kotak</label>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
  )
}
