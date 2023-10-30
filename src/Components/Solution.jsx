import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs";
import ebroker from '../Assets/Images/ebroker.svg'
import eDemand from '../Assets/Images/eDemand.svg'
import elite from '../Assets/Images/elite.svg'
import eshop from '../Assets/Images/eshop.svg'
import eshool from '../Assets/Images/eshool.svg'
import erestro from '../Assets/Images/erestro.svg'
import news from '../Assets/Images/news.svg'
import egrocer from '../Assets/Images/egrocer.svg'
import Link from 'next/link';

const Solution = () => {

    const cardData = [
        {
            id: 0,
            title: "eBroker",
            desc: "Real estate business solution",
            img: ebroker,
            // img: `https://wrteam.in/september-super-sale/${ebroker}/`,
            link: "https://1.envato.market/oqe11O"
        },
        {
            id: 1,
            title: "eDemand",
            desc: "On-Demand service business solution",
            img: eDemand,
            link: "https://1.envato.market/KjKLxn"
        },
        {
            id: 2,
            title: "Elite Quiz",
            desc: "Trivia quiz game",
            img: elite,
            link: 'https://1.envato.market/LXaGzo'
        },
        {
            id: 3,
            title: "eShop Multi-vendor",
            desc: "Multivendor e-commerce solution",
            img: eshop,
            link: "https://1.envato.market/R5PjZN"
        },
        {
            id: 4,
            title: "eSchool",
            desc: "School management solution",
            img: eshool,
            link: "https://1.envato.market/babzGx"
        },
        {
            id: 5,
            title: "eRestro",
            desc: "Multi restaurant flutter app",
            img: erestro,
            link: "https://1.envato.market/QyPrNA"
        },
        {
            id: 6,
            title: "News",
            desc: "News application + website",
            img: news,
            link: 'https://1.envato.market/rQ4323'
        },
        {
            id: 7,
            title: "eGrocer",
            desc: "Grocery business solution",
            img: egrocer,
            link: 'https://1.envato.market/DK0gQn'
        },
    ]
    return (
        <>
            <section id="solution" className='commonMT'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="commonTexts">

                            <h2 className='commonHeadline'>Let End-to-End Solutions Brighten Your Development Adventure!</h2>
                            <span className='commonSpan'>Don&apos;t waste time and money on inefficient app development. Embrace excellence with our End-to-End Solutions, ensuring top-notch quality at an affordable price. Take charge and soar to success!
                                Choose wisely, choose us!</span>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row">
                            {
                                cardData.map((e) => {
                                    return <div className="col-sm-12 col-md-6 col-lg-3" key={e.id}>
                                        <Link href={e.link} target='_blank'>

                                            <div className="card">
                                                <div className="commonBorder">
                                                    <div className="cardImg">
                                                        <img className="card-img-top" src={e.img.src} alt="Card image cap" />
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{e.title}</h5>
                                                    <p className="card-text">{e.desc}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                })
                            }

                            <div className="commonBorder">
                                <div className="solutionBtn">
                                    <Link href="https://1.envato.market/vNz3zy" target='_blank'>  <span className='btn'>More Products <BsArrowRightCircle /></span> </Link>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Solution
