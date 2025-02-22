import React, { useEffect, useState } from 'react';
import './Cake.scss';
import 'animate.css';

const Credits = () => {
    const [timeSurvived, setTimeSurvived] = useState('');

    useEffect(() => {
        const startDate = new Date('2001-02-23T00:00:00+08:00'); 
        
        const updateSurvivedTime = () => {
            const now = new Date();
            const philippineTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
            const diff = philippineTime - startDate;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeSurvived(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
        };

        updateSurvivedTime();
        const interval = setInterval(updateSurvivedTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p id='al'>Alive {timeSurvived}</p>
        </div>
    );
};

export default Credits;
