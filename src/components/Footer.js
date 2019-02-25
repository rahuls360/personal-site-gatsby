import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => (
    <footer>
        <div className="row">
            <div className="container">
                <div className="col-md-4">
                    <h4 className="text-center">Favorites</h4>
                    <ul>
                        <li><a href="/">Link 1</a></li>
                        <li><a href="/">Link 2</a></li>
                        <li><a href="/">Link 3</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h4 className="text-center">Show Off Zone</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, numquam? Cupiditate quam adipisci illum corporis alias accusamus harum, sunt minima dignissimos. Corrupti ipsum quaerat iusto sunt nulla dolores adipisci voluptatibus!</p>
                </div>
                <div className="col-md-4">
                    <h4 className="text-center">Connect with me</h4>
                    <ul className="social">
                        <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/rahuls360/"><i className="fa fa-twitter"></i></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCVsDcEX6kB9ZNAWdlxrnn0"><i className="fa fa-youtube"></i></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rahuls360/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/rahuls360"><i className="fa fa-github"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;