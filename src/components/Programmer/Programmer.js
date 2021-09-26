import React from 'react';
import './Programmer.css';

const Programmer = (props) => {
    const {name,age,gender,picture,email,balance,company} = props.programmer;
    return (
        <div className="programmer">
            <div className="programmer-info">
                <img src={picture} alt="" />
                <h2>Name:{name}</h2>
                <h3>Email:{email}</h3>
                <h5>Salary:${balance}</h5>
                <p>Gender:{gender}</p>
                <p>Age:{age}</p>
                <p>Works on:{company}</p>
                <button onClick={()=>props.addTo(props.programmer)}><i className="fas fa-user-plus"></i> add to your project</button>
             </div>
        </div>
    );
};

export default Programmer;