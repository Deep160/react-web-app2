import React from 'react';
import { Link } from 'react-router-dom';
import simg from '../images/PngItem_4906041 1.svg';
import Lbtn from '../images/Group 9.svg';
import Rbtn from '../images/Group 10.svg';

export default function slider() {
  return (
    <div className="container-fluid px-5 py-5 ">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner pb-5">
                <div class="col-xl-11 px-5 mx-auto m-4">
                    <div className="carousel-item active">
                        <div className="row d-flex flex-row g-0">
                            <div className="col-md-6 left-colum p-5">
                                <h1 className="offer-h1">GET 50% <br/> OFFER NOW!!</h1>
                                <p className="mt-4 offer-p">One year pieces to pieces gurarantee, if you are
                                    not if you are not satisfy 100% mony back
                                    guarantee.</p>
                                <div className="offer-button mt-5">
                                    <button className="btn btn-primary">BUY NOW!</button>
                                </div>
                            </div>
                            <div className="col-md-6 p-2 my-auto ">
                                <img src={simg} className="img-fluid" alt=""/>
                            </div>
                        </div>  
                    </div>

                    <div className="carousel-item">
                    <div className="row d-flex flex-row g-0">
                            <div className="col-md-6 left-colum p-5">
                                <h1 className="offer-h1">GET 50% <br/> OFFER NOW!!</h1>
                                <p className="mt-4 offer-p">One year pieces to pieces gurarantee, if you are
                                    not if you are not satisfy 100% mony back
                                    guarantee.</p>
                                <div className="offer-button mt-5">
                                    <button className="btn btn-primary">BUY NOW!</button>
                                </div>
                            </div>
                            <div className="col-md-6 p-2 my-auto ">
                                <img src={simg} className="img-fluid" alt=""/>
                            </div>
                        </div>   
                    </div>

                    <div className="carousel-item">
                    <div className="row d-flex flex-row g-0">
                            <div className="col-md-6 left-colum p-5">
                                <h1 className="offer-h1">GET 50% <br/> OFFER NOW!!</h1>
                                <p className="mt-4 offer-p">One year pieces to pieces gurarantee, if you are
                                    not if you are not satisfy 100% mony back
                                    guarantee.</p>
                                <div className="offer-button mt-5">
                                    <button className="btn btn-primary">BUY NOW!</button>
                                </div>
                            </div>
                            <div className="col-md-6 p-2 my-auto ">
                                <img src={simg} className="img-fluid" alt=""/>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
                        
            <Link class="carousel-control-prev" to="#carouselExampleControls" data-bs-slide="prev"
                role="button" data-slide="prev">
                <div class="carousel-control-prev">
                    <img src={Lbtn} className="img-fluid" alt=""/>
                </div>
            </Link>
            <Link class="carousel-control-next" to="#carouselExampleControls" data-bs-slide="next"
                role="button" data-slide="next">
                <div class="carousel-control-next">
                    <img src={Rbtn} className="img-fluid" alt=""/>
                </div>
            </Link> 
        </div>
    </div>
  )
}
