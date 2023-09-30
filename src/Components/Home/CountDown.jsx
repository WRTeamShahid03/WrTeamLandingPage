import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

const CountDown = () => {
    const [targetTime, setTargetTime] = useState(getTargetTime());
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    function getTargetTime() {
        const targetTime = new Date();
        targetTime.setHours(19, 30, 0, 0); // Set target time to 7:30 PM today
        return targetTime;
    }

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    function calculateTimeRemaining() {
        const now = new Date();
        const timeDifference = targetTime - now;
        if (timeDifference <= 0) {
            // Countdown is over
            return {
                days: '00',
                hours: '00',
                minutes: '00',
                seconds: '00',
            };
        }

        const days = Math.max(0, Math.floor(timeDifference / (1000 * 60 * 60 * 24))).toString().padStart(2, '0');
        const hours = Math.max(0, Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).toString().padStart(2, '0');
        const minutes = Math.max(0, Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))).toString().padStart(2, '0');
        const seconds = Math.max(0, Math.floor((timeDifference % (1000 * 60)) / 1000)).toString().padStart(2, '0');

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }

    if (targetTime <= new Date()) {
        // Countdown is over, render appropriate message
        return <div className='countdownOver commonMT'>
            <span> Sorry You Are Late 😕 </span>
            <span>Sale Is Over</span>
            <span className='boldText'>Subscribe Newsletter For Upcoming Offer! 📩</span>
        </div>
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
