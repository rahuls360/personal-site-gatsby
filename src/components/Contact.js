import React from 'react';

const Contact = (props) => (
    <>
    <div className="row my-5">
    <h3 className="text-center">Contact</h3>
        <div className="container">
            <div className="col-md-6">
                <img src="https://picsum.photos/800/600/?random" alt="" className="img-responsive"/>
            </div>
            <div className="col-md-6">
                <form>
                    <input type="text" placeholder="Enter Name" name="name" required class="form-control"/>
                    <input type="text" placeholder="Enter email" name="email" required class="form-control"/>
                    <textarea cols="30" rows="10" placeholder="Enter Message" name="message" required class="form-control"></textarea>
                    <input type="submit" className="btn btn-primary"/>
                </form>
            </div>
        </div>
    </div>
    </>
)

export default Contact;