import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
window.jQuery = window.$ = require('jquery');
require('bootstrap')

const Hero = () => (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">

    <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div className="carousel-inner">
        <div className="item active">
        <img src="https://via.placeholder.com/1600x800" alt="Los Angeles" />
        </div>

        <div className="item">
        <img src="https://via.placeholder.com/1600x800" alt="Chicago" />
        </div>

        <div className="item">
        <img src="https://via.placeholder.com/1600x800" alt="New York" />
        </div>
    </div>


    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
    </a>
    </div>
);

export default Hero;