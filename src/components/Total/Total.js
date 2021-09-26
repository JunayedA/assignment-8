import React from 'react';
import './Total.css';

const Total = (props) => {
    const {totalDev} = props;
    // console.log(props.name)
    let total = 0;
    for(const dev of totalDev){
        total = total + dev.balance;
    }
    return (
        <div>
            <h3>Add Developer</h3>
                <h4>Tota added:{props.totalDev.length}</h4>
                <br />
                <p>Service charge:{total}</p>
                <p>Added dev name:{props.totalDev.name}</p>
        </div>
    );
};

export default Total;