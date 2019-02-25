import React from 'react';

const Interest = (props) => (
    <div className="col-md-4">
        <img src={props.image} alt="" className="img-responsive"/>
        <p className="text-justify">
            {props.text}
        </p>
    </div>
)

export default Interest;