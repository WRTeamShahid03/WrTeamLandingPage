import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import happy from '../Assets/Images/Happy Clients.svg'
import projectDone from '../Assets/Images/Projects Done 1.svg'
import reconnet from '../Assets/Images/Reconecct 1.svg'
import satisfaction from '../Assets/Images/Satisfaction 1.svg'


const Counter = () => {

    const [counter, setCounter] = useState(false)

    return (
        <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
            <div id="counter" className='container commonBorder commonMT'>
                <div className="countWrapper">

                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="countCard">
                                <div className="fcardImg">
                                    <img src={happy.src} alt="" />
                                </div>
                                <div className="countContent">
                                    {counter && <span className='countNum'><CountUp start={0} end={15} duration={2} delay={0} />k+</span>}

                                    <span className='countText'>
                                        Happy Clients
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="countCard">
                                <div className="fcardImg">
                                    <img src={projectDone.src} alt="" />
                                </div>
                                <div className="countContent">
                                    {counter && <span className='countNum'> <CountUp start={0} end={450} duration={2} delay={0} />+</span>}

                                    <span className='countText'>
                                        Project Wrapped up
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="countCard">
                                <div className="fcardImg">
                                    <img src={reconnet.src} alt="" />
                                </div>
                                <div className="countContent">
                                    {counter && <span className='countNum'><CountUp start={0} end={94} duration={2} delay={0} />%</span>}
                                    <span className='countText'>
                                        Reconnect
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="countCard">
                                <div className="fcardImg">
                                    <img src={satisfaction.src} alt="" />
                                </div>
                                <div className="countContent">
                                    {counter && <span className='countNum'><CountUp start={0} end={98} duration={2} delay={0} />%</span>}
                                    <span className='countText'>
                                        Satisfaction
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </ScrollTrigger>
    )
}

export default Counter
