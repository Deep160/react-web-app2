import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import Navbar from '../inc/Navbar';
import Slider from '../inc/Slider';
import Footer from '../inc/Footer';
import Shop from '../inc/Shop';
import About from '../inc/About';


import './style.css';
import Feature from '../inc/Feature';

class Home extends Component{
    render(){
        return(
            <>
            <section className="section1 header">
                <Navbar/>
                <Slider/>
            </section>

            <section className="section2 feature col-xl-11 offset-md-1 feature mt-4">
            <Feature />
            </section>

            <section className="section3 shop">
            <Shop/>
            </section>

            <section className="section4 about">
            <About/>
            </section>

            <section className="section5 footer">
                <Footer />
            </section>
            </>
        );
    }
}

export default Home;