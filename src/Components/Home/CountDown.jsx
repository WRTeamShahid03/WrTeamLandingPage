import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

const CountDown = () => {
    const [targetTime, setTargetTime] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        // Fetch target time asynchronously
        fetchTargetTime().then((time) => {
            setTargetTime(new Date(time));
        });

        // Start countdown timer
        const timerInterval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        // Clean up interval on component unmount
        return () => clearInterval(timerInterval);
    }, []); // Empty dependency array ensures that this effect runs once after the initial render

    async function fetchTargetTime() {
        // Simulate fetching target time from an API or server
        // Replace this with your actual API call
        return new Promise((resolve) => {
            setTimeout(() => {
                const targetTime = new Date();
                targetTime.setDate(targetTime.getDate() + 1);
                targetTime.setHours(19, 30, 0, 0);
                resolve(targetTime);
            }, 1000); // Simulating API delay with 1 second timeout
        });
    }

    function calculateTimeRemaining() {
        if (!targetTime) {
            // Return default values if targetTime is not available yet
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        const now = new Date();
        const timeDifference = targetTime - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }

    if (!targetTime) {
        // Render loading state while fetching data
        return <div>Loading...</div>;
    }

    return (
        <div>
            <section id='countdown' className='commonMT'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="commonTexts">
                            <h2 className='commonHeadline'>Time-Limited Bargains Await!</h2>
                            <span className='commonSpan'>Get it now or regret it later.</span>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="countdownDiv">
                            <Countdown
                                date={targetTime}
                                renderer={({ days, hours, minutes, seconds }) => (
                                    <div className="countdown-container">
                                        <div className="countdown-box">
                                           <div className="commonBorder">
                                           <span className='countTimer'> {days} </span>
                                            </div>
                                            <span className="countdown-label">Days</span>
                                        </div>
                                        :
                                        <div className="countdown-box">
                                        <div className="commonBorder">
                                           <span className='countTimer'> {hours} </span>
                                            </div>
                                            <span className="countdown-label">Hours</span>
                                        </div>
                                        :
                                        <div className="countdown-box">
                                        <div className="commonBorder">
                                           <span className='countTimer'> {minutes} </span>
                                            </div>
                                            <span className="countdown-label">Minutes</span>
                                        </div>
                                        :
                                        <div className="countdown-box">
                                        <div className="commonBorder">
                                           <span className='countTimer'> {seconds} </span>
                                            </div>
                                            <span className="countdown-label">Seconds</span>
                                        </div>
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CountDown;
