import React, { useEffect, useState } from 'react';
import Programmer from '../Programmer/Programmer';
import Total from '../Total/Total';
import './Team.css';

const Team = () => {
    const [programmers,setProgrammers] = useState([]);
    const [totalDev,setTotalDev] = useState([]);

    useEffect(() => {
        fetch('./programmers.JSON')
        .then(res => res.json())
        .then(data => setProgrammers(data))
    },[])

    const addTo = programmer => {
        const newTotalDev = [...totalDev,programmer];
        setTotalDev(newTotalDev);
    }
    return (
        <div className="team-container">
            <div className="team-members">
                {
                    programmers.map(programmer => <Programmer
                         programmer={programmer}
                         key={programmer._id}
                         addTo={addTo}
                         ></Programmer>)
                }
            </div>
            <div className="add-member">
                <Total totalDev={totalDev}></Total>
            </div>
        </div>
    );
};

export default Team;