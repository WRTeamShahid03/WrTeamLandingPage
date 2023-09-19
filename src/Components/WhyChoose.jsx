import React from 'react'
import whyChoose from '../Assets/Images/whyChoose.png'
import support from '../Assets/Images/Support.svg'
import experience from '../Assets/Images/Experience.svg'
import eliteAuthor from '../Assets/Images/Elite Author.png'
import quality from '../Assets/Images/Quality.svg'
import money from '../Assets/Images/Money.svg'

const WhyChoose = () => {

    const cardData = [
        {
            id: 0,
            icon: support,
            title: "Support That Goes Above and Beyond",
            text: "Our dedicated team of experts is ready to provide you with exceptional customer support whenever you need it."
        },
        {
            id: 1,
            icon: experience,
            title: "6+ Years of Proven Excellence",
            text: "Benefit from our extensive experience in the industry, delivering top-notch solutions for over 6 years."
        },
        {
            id: 2,
            icon: eliteAuthor,
            title: "Elite Author on CodeCanyon",
            text: "WRTeam holds the esteemed title of being an elite author on CodeCanyon, a testament to our exceptional products and customer satisfaction."
        },
        {
            id: 3,
            icon: quality,
            title: "Affordable Prices for Exceptional Quality",
            text: "Don't settle for less when you can have it all! Our top-notch app codes and website resources come at prices that will leave you in awe. "
        },
        {
            id: 4,
            icon: money,
            title: "100% Money-Back Guarantee",
            text: "Our 100% money-back guarantee means you have nothing to lose and everything to gain. We're that confident in our game-changing solutions."
        },
    ]
    return (
        <>
            <section id='whyChoose' className='container commonMT'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="commonTexts">
                        <h2 className='commonHeadline'>Why Choose WRTeam?</h2>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 mt-5">
                        <div className="whyChooseImg">
                            <img src={whyChoose.src} alt="" />
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 mt-5">
                        <div className="whyChooseContent">
                            {
                                cardData.map((e)=>{
                                    return <div className="card" key={e.id}>
                                    <span className='iconSpan'> <img src={e.icon.src} alt="" /></span>
                                    <span className='cardInnerFlex'>
                                        <span className='cardTitle'>{e.title}</span>
                                        <span className='cardText'>{e.text}</span>
                                    </span>
                            </div>
                                })
                            }
                            
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default WhyChoose
