import React from "react";
import Header from '../components/Header';
import Hero from '../components/Hero';
import Interest from '../components/Interest';

import 'bootstrap/dist/css/bootstrap.css';
import '../style.css';
window.jQuery = window.$ = require('jquery');
require('bootstrap');



export default () => (
    <>
    <Header></Header>
    <Hero></Hero>
    <div className="interests my-5">
        <h3 className="text-center">Interests</h3>
        <div className="row">
            <div className="container">
            <Interest image="https://picsum.photos/600/600" text="Topic 1 is cool!"></Interest>
            <Interest image="https://picsum.photos/600/600" text="Topic 2 is important"></Interest>
            <Interest image="https://picsum.photos/600/600" text="Topic 3 is gaining attention lately"></Interest>
            </div>
        </div>
    </div>
    </>
);