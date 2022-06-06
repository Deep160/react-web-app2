import React from 'react';
import { Link } from 'react-router-dom';

import featureItem1 from '../images/image 3.svg';
import featureItem2 from '../images/Rectangle 7(1).svg';
import featureItem3 from '../images/Rectangle 7 (2).svg';
import featureItem4 from '../images/Rectangle 15.svg';
import feature from '../images/Group 13.svg';
import featureLeft from '../images/Group 21.svg';
import featureRight from '../images/Group 22.svg';

export default function Feature() {
  return (
    <div className="container-fluid  p-0 m-0" >
            <div className="row d-flex justify-content-between">
                <div className=" col-md-3">
                    <div className="box m-auto card rounded-5 border-0" >
                    <img src={featureItem1} className="card-img-top" alt=""/>

                        <div className="card-body d-flex flex-column position-static d-flex align-items-center ">
                            <label className="product_name">MASKS</label>
                            <h5 className="price">$ 1999 - <s>$2999</s></h5>
                            <div className="row justify-content-between quantity">
                                <div className="col-4 ">
                                    Sold : 351
                                </div>
                                <div className="col-4">
                                    Available: 500
                                </div>
                            </div>
                            <div className="progress progressbar ">
                                <div className="progress-bar" role="progressbar"
                                     aria-valuenow="351" aria-valuemin="0"
                                    aria-valuemax="500"></div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row d-flex justify-content-between">
                        <div className="col-3 my-2 mx-4 position-relative">
                            <img src={feature} alt=""/>
                        </div>
                        <div className="col-3">
                            <Link className="m-0" role="button" to="#featuredcarouselExample" data-bs-slide="prev">
                                <img src={featureLeft} width="60px" alt=""/>
                            </Link>
                            <Link to="#featuredcarouselExample" role="button" data-bs-slide="next">
                                <img src={featureRight} width="60px" alt=""/>
                            </Link>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-evenly row21">
                        <div className='feature-slider'>
                            <div id="featuredcarouselExample" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row px-2 justify-content-evenly text-black">
                                            <div className="col-md-4 clearfix d-none d-md-block">
                                                <div className="card pt-4 align-items-center bg-transparent border-0">
                                                    <div>
                                                        <img src={featureItem2} className="img-fluid" alt=""/>
                                                    </div>
                                                    <div className="d-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                            width="16" height="16" fill="currentColor" className="bi bi-heart"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                        </svg>
                                                    </div>
                                                    <h6 className="mb-0 cs-h6 mt-3 text-white">CASUAL SHIRT</h6>
                                                    <p className="cs-p my-2 d-flex text-white">$1999&nbsp;-&nbsp;<s>$2999</s>
                                                    </p>
    
                                                    <button className="btn btn-dark border-0 mb-4">
                                                        ADD TO CART
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-md-4  d-none d-md-block">
                                                <div className="card pt-4 align-items-center bg-transparent border-0">
                                                    <div className="">
                                                        <img src={featureItem3} className="img-fluid" alt=""/>
                                                    </div>
                                                    <div className="d-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                            width="16" height="16" fill="currentColor" className="bi bi-heart"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                        </svg>
                                                    </div>
                                                    <h6 className="mb-0 cs-h6 mt-3 text-white">CASUAL SHIRT</h6>
                                                    <p className="cs-p my-2 d-flex text-white">$1999&nbsp;-&nbsp;<s>$2999</s>
                                                    </p>
    
                                                    <button className="btn btn-dark border-0 mb-4"
                                                        >
                                                        ADD TO CART
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-md-4  d-none d-md-block">
                                                <div className="card pt-4 align-items-center bg-transparent border-0">
                                                    <div>
                                                        <img src={featureItem4} className="mt-1 img-fluid" alt=""/>
                                                    </div>
                                                    <div className="d-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                            width="16" height="16" fill="currentColor" className="bi bi-heart"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                        </svg>
                                                    </div>
                                                    <h6 className="mb-0 cs-h6 mt-3 text-white">CASUAL SHIRT</h6>
                                                    <p className="cs-p my-2 d-flex text-white">$1999&nbsp;-&nbsp;<s>$2999</s>
                                                    </p>
    
                                                    <button className="btn btn-dark border-0 mb-4"
                                                        >
                                                        ADD TO CART
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="carousel-item ">
                                        <div className="row px-2 justify-content-evenly">
                                            <div className="col-md-4 clearfix d-none d-md-block">
                                                <div className="card pt-4 align-items-center bg-transparent border-0">
                                                    <div>
                                                        <img src={featureItem2} className="img-fluid" alt=""/>
                                                    </div>
                                                    <div className="d-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                            width="16" height="16" fill="currentColor" className="bi bi-heart"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                        </svg>
                                                    </div>
                                                    <h6 className="mb-0 cs-h6 mt-3 text-white">CASUAL SHIRT</h6>
                                                    <p className="cs-p my-2 d-flex text-white">$1999&nbsp;-&nbsp;<s>$2999</s>
                                                    </p>
    
                                                    <button className="btn btn-dark border-0 mb-4"
                                                        >
                                                        ADD TO CART
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-md-4 clearfix d-none d-md-block">
                                                <div className="card pt-4 align-items-center bg-transparent border-0">
                                                    <div>
                                                        <img src={featureItem3} className="img-fluid" alt=""/>
                                                    </div>
                                                    <div className="d-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                            width="16" height="16" fill="currentColor" className="bi bi-heart"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                        </svg>
                                                    </div>
                                                    <h6 className="mb-0 cs-h6 mt-3 text-white">CASUAL SHIRT</h6>
                                                    <p className="cs-p my-2 d-flex text-white">$1999&nbsp;-&nbsp;<s>$2999</s>
                                                    </p>
    
                                                    <button className="btn btn-dark border-0 mb-4">
                                                        ADD TO CART
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-md-4 clearfix d-none d-md-block">
                                                <div className="card pt-4 align-items-center bg-transparent border-0">
                                                    <div>
                                                        <img src={featureItem4} className="mt-1 img-fluid" alt=""/>
                                                    </div>
                                                    <div className="d-flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                            width="16" height="16" fill="currentColor" className="bi bi-heart"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                        </svg>
                                                    </div>
                                                    <h6 className="mb-0 cs-h6 mt-3 text-white">CASUAL SHIRT</h6>
                                                    <p className="cs-p my-2 d-flex text-white">$1999&nbsp;-&nbsp;<s>$2999</s>
                                                    </p>
    
                                                    <button className="btn btn-dark border-0 mb-4">
                                                        ADD TO CART
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className="row d-flex justify-content-evenly row22">
                        <div className='feature-slider'>
                            <div id="featuredcarouselExample" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row justify-content-evenly">
                                            <div className="card pt-4 align-items-center bg-transparent border-0">
                                                <div>
                                                    <img src={featureItem2} className="img-fluid" alt=""/>
                                                </div>
                                                <div className="d-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        width="16" height="16" fill="currentColor" className="bi bi-heart"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                    </svg>
                                                </div>
                                                <h6 className="mb-0 cs-h6 mt-3 text-white">CASUAL SHIRT</h6>
                                                <p className="cs-p my-2 d-flex text-white">$1999&nbsp;-&nbsp;<s>$2999</s>
                                                </p>
    
                                                <button className="btn btn-dark border-0 mb-4">
                                                    ADD TO CART
                                                </button>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="carousel-item ">
                                        <div className="row px-2 justify-content-evenly">
                                            <div className="card pt-4 align-items-center bg-transparent border-0">
                                                <div>
                                                    <img src={featureItem3} className="img-fluid" alt=""/>
                                                </div>
                                                <div className="d-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        width="16" height="16" fill="currentColor" className="bi bi-heart"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                    </svg>
                                                </div>
                                                <h6 className="mb-0 cs-h6 mt-3 text-white">CASUAL SHIRT</h6>
                                                <p className="cs-p my-2 d-flex text-white">$1999&nbsp;-&nbsp;<s>$2999</s>
                                                </p>
    
                                                <button className="btn btn-dark border-0 mb-4">
                                                    ADD TO CART
                                                </button>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="carousel-item ">
                                        <div className="row px-2 justify-content-evenly">
                                            <div className="card pt-4 align-items-center bg-transparent border-0">
                                                <div>
                                                    <img src={featureItem4} className="mt-1 img-fluid" alt=""/>
                                                </div>
                                                <div className="d-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        width="16" height="16" fill="currentColor" className="bi bi-heart"
                                                        viewBox="0 0 16 16">
                                                        <path
                                                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                    </svg>
                                                </div>
                                                <h6 className="mb-0 cs-h6 mt-3 text-white">CASUAL SHIRT</h6>
                                                <p className="cs-p my-2 d-flex text-white">$1999&nbsp;-&nbsp;<s>$2999</s>
                                                </p>
    
                                                <button className="btn btn-dark border-0 mb-4">
                                                    ADD TO CART
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
