import React from "react";
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Interest from '../components/Interest';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


import 'bootstrap/dist/css/bootstrap.css';
import '../style.css';

if (typeof window !== 'undefined') {
    window.jQuery = window.$ = require('jquery');
    require('bootstrap');
}

export default () => (
    <>
    <Header></Header>
    <Hero></Hero>
    <About></About>
    <div className="row my-5">
    <h3 className="text-center">Interests</h3>
        <div className="container">
        <Interest image="https://picsum.photos/600/600?random" text="Topic 1 is cool!"></Interest>
        <Interest image="https://picsum.photos/600/600?random" text="Topic 2 is important"></Interest>
        <Interest image="https://picsum.photos/600/600?random" text="Topic 3 is gaining attention lately"></Interest>
        </div>
    </div>
    <Contact />
    <Footer />
    </>
);