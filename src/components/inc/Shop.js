import React from 'react';
import { Link } from 'react-router-dom';

import shop from '../images/Shop.svg';
import shopItem from '../images/Rectangle 7.svg';

export default function Shop() {
  return (
    <div className="container  mt-5">
            <div className="row d-flex justify-content-end">
                <div className="col-md-4 mt-5 d-flex text-center justify-content-center align-content-center">
                    <img src={shop} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-4 mt-5 d-flex text-center justify-content-center align-content-center">
                    <div className="row mt-2 d-flex">
                        <div
                            className="col-xl-7 mt-3 d-flex justify-content-center align-content-center align-content-center text-center">
                            Showing 1-12 of 36 results
                        </div>
                        <div
                            className="col-xl-5 d-flex justify-content-center align-content-center align-content-center text-center">
                            <li className="nav-item dropdown-btn align-content-center rounded-3 px-2 d-flex">
                                <Link className="nav-link dropdown-toggle ms-3 text-black" to="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">Default Sorting</Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item bg-transparent " to="#">Price - High to Low</Link></li>
                                    <li><Link className="dropdown-item bg-transparent" to="#">Price - Low to High</Link></li>
                                    <li>
                                        <hr className="dropdown-divider "/>
                                    </li>
                                    <li><Link className="dropdown-item bg-transparent" to="#">Categories</Link></li>
                                </ul>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-body justify-content-evenly">
                <div className="card rounded-5 border-0 w-40">
                    <div>
                        <img src={shopItem} alt=""/>
                    </div>
                    <div className="row justify-content-between d-flex px-4">
                        <div className="d-flex align-self-baseline px-3 align-content-between justify-content-between">
                            <h6 className="cs-h6  text-dark">CASUAL SHIRT</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                className="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                        </div>
                    </div>
                    <div className=" my-2 ms-4 d-flex justify-content-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#1F2229"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#B0DA87"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#2D5FD4"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#7FFF43"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <p className="cs-p d-flex text-dark align-self-baseline ms-4"><b>$1999</b>&nbsp;-&nbsp;<s> $2999</s></p>
                    <button className="m-auto my-1 mb-3 btn btn-dark cart-btn">ADD TO CART</button>


                </div>

                <div className="card rounded-5 border-0 w-40">
                    <div>
                        <img src={shopItem} alt=""/>
                    </div>
                    <div className="row justify-content-between d-flex px-4">
                        <div className="d-flex align-self-baseline px-3 align-content-between justify-content-between">
                            <h6 className="cs-h6  text-dark">CASUAL SHIRT</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                className="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                        </div>
                    </div>
                    <div className=" my-2 ms-4 d-flex justify-content-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#1F2229"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#B0DA87"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#2D5FD4"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#7FFF43"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <p className="cs-p d-flex text-dark align-self-baseline ms-4"><b>$1999</b>&nbsp;-&nbsp;<s> $2999</s></p>
                    <button className="m-auto my-1 mb-3 btn btn-dark cart-btn">ADD TO CART</button>
                </div>

                <div className="card rounded-5 border-0 w-40">
                    <div>
                        <img src={shopItem} alt=""/>
                    </div>
                    <div className="row justify-content-between d-flex px-4">
                        <div className="d-flex align-self-baseline px-3 align-content-between justify-content-between">
                            <h6 className="cs-h6  text-dark">CASUAL SHIRT</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                className="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                        </div>
                    </div>
                    <div className=" my-2 ms-4 d-flex justify-content-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#1F2229"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#B0DA87"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#2D5FD4"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#7FFF43"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <p className="cs-p d-flex text-dark align-self-baseline ms-4"><b>$1999</b>&nbsp;-&nbsp;<s> $2999</s></p>
                    <button className="m-auto my-1 mb-3 btn btn-dark cart-btn">ADD TO CART</button>
                </div>

                <div className="card rounded-5 border-0 w-40">
                    <div>
                        <img src={shopItem} alt=""/>
                    </div>
                    <div className="row justify-content-between d-flex px-4">
                        <div className="d-flex align-self-baseline px-3 align-content-between justify-content-between">
                            <h6 className="cs-h6  text-dark">CASUAL SHIRT</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                className="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                        </div>
                    </div>
                    <div className=" my-2 ms-4 d-flex justify-content-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#1F2229"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#B0DA87"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#2D5FD4"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#7FFF43"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <p className="cs-p d-flex text-dark align-self-baseline ms-4"><b>$1999</b>&nbsp;-&nbsp;<s> $2999</s></p>
                    <button className="m-auto my-1 mb-3 btn btn-dark cart-btn">ADD TO CART</button>
                </div>

                <div className="card rounded-5 border-0 w-40">
                    <div>
                        <img src={shopItem} alt=""/>
                    </div>
                    <div className="row justify-content-between d-flex px-4">
                        <div className="d-flex align-self-baseline px-3 align-content-between justify-content-between">
                            <h6 className="cs-h6  text-dark">CASUAL SHIRT</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                className="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                        </div>
                    </div>
                    <div className=" my-2 ms-4 d-flex justify-content-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#1F2229"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#B0DA87"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#2D5FD4"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#7FFF43"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <p className="cs-p d-flex text-dark align-self-baseline ms-4"><b>$1999</b>&nbsp;-&nbsp;<s> $2999</s></p>
                    <button className="m-auto my-1 mb-3 btn btn-dark cart-btn">ADD TO CART</button>
                </div>

                <div className="card rounded-5 border-0 w-40">
                    <div>
                        <img src={shopItem} alt=""/>
                    </div>
                    <div className="row justify-content-between d-flex px-4">
                        <div className="d-flex align-self-baseline px-3 align-content-between justify-content-between">
                            <h6 className="cs-h6  text-dark">CASUAL SHIRT</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                className="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                        </div>
                    </div>
                    <div className=" my-2 ms-4 d-flex justify-content-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#1F2229"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#B0DA87"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#2D5FD4"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#7FFF43"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <p className="cs-p d-flex text-dark align-self-baseline ms-4"><b>$1999</b>&nbsp;-&nbsp;<s> $2999</s></p>
                    <button className="m-auto my-1 mb-3 btn btn-dark cart-btn">ADD TO CART</button>
                </div>

                <div className="card rounded-5 border-0 w-40">
                    <div>
                        <img src={shopItem} alt=""/>
                    </div>
                    <div className="row justify-content-between d-flex px-4">
                        <div className="d-flex align-self-baseline px-3 align-content-between justify-content-between">
                            <h6 className="cs-h6  text-dark">CASUAL SHIRT</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                className="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                        </div>
                    </div>
                    <div className=" my-2 ms-4 d-flex justify-content-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#1F2229"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#B0DA87"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#2D5FD4"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#7FFF43"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <p className="cs-p d-flex text-dark align-self-baseline ms-4"><b>$1999</b>&nbsp;-&nbsp;<s> $2999</s></p>
                    <button className="m-auto my-1 mb-3 btn btn-dark cart-btn">ADD TO CART</button>
                </div>

                <div className="card rounded-5 border-0 w-40">
                    <div>
                        <img src={shopItem} alt=""/>
                    </div>
                    <div className="row justify-content-between d-flex px-4">
                        <div className="d-flex align-self-baseline px-3 align-content-between justify-content-between">
                            <h6 className="cs-h6  text-dark">CASUAL SHIRT</h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                className="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                        </div>
                    </div>
                    <div className=" my-2 ms-4 d-flex justify-content-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#1F2229"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#B0DA87"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#2D5FD4"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#7FFF43"
                            className="bi bi-circle-fill mx-1" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <p className="cs-p d-flex text-dark align-self-baseline ms-4"><b>$1999</b>&nbsp;-&nbsp;<s> $2999</s></p>
                    <button className="m-auto my-1 mb-3 btn btn-dark cart-btn">ADD TO CART</button>
                </div>

            </div>
        </div>
  )
}
