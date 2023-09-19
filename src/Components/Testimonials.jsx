import React, { useCallback, useRef } from 'react'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
import { LiaStarSolid } from 'react-icons/lia';

import user1 from '../Assets/Images/img1.svg'
import user2 from '../Assets/Images/img2.svg'
import user3 from '../Assets/Images/img3.svg'
import user4 from '../Assets/Images/user4.webp'
import user5 from '../Assets/Images/user5.jpg'
import user6 from '../Assets/Images/user6.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

// import dobleQuotes from '../../src/Asset/Icons/double-quotes-l.svg'

const Testimonials = () => {

    const swiperData = [
        {
            id: 0,
            name: "Savannah Nguyen",
            text: "eBroker made finding my dream home a breeze. The user-friendly interface and detailed property listings helped me make an informed decision.",
            userImg: user1,
            rating: "(4.5)"
        },
        {
            id: 1,
            name: "Cameron Williamson",
            text: "eRestro's food variety and speedy delivery have won me over. It's a five-star dining experience right at home.",
            userImg: user3,
            rating: "(4.5)"
        },
        {
            id: 2,
            name: 'Leslie Alexander',
            text: "eShop is my go-to for online shopping. The wide selection, quick delivery, and easy returns make it a five-star experience.",
            userImg: user2,
            rating: "(4.5)"
        },
        {
            id: 3,
            name: 'Lasitha Hulands',
            text: "Clean and clear code.Fast support top notch documentation.Constant updates.Buy this app it's wonderful!",
            userImg: user6,
            rating: "(5)"
        },
        {
            id: 4,
            name: 'Mananraj',
            text: "Probably the fisrt provider on codecanon,to instantly come in anydesk and support me for my error.",
            userImg: user5,
            rating: "(5)"
        },
        {
            id: 5,
            name: 'Ajayambaliya',
            text: "Best app i ever seen on codecanon and best part is the service,they provide best service...keep it up team.",
            userImg: user4,
            rating: "(5)"
        },

    ]

    const breakpoints = {
        320: {
            slidesPerView: 1,
            // spaceBetween: 40
        },
        375: {
            slidesPerView: 1,
            // spaceBetween: 40
        },
        576: {
            slidesPerView: 1.5,
            // spaceBetween: 40
        },
        768: {
            slidesPerView: 2,

        },
        992: {
            slidesPerView: 3,

        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 3,

        }
    };


    const renderBullet = (index, className) => {
        return `<span class="${className}" style="
            outline: 1px solid #000;
            font-size: 20px;
            padding: 8px;
            border: 2px solid #fff;" id="renderBullets">
    </span>`;
    };

    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        console.log("test")
        if (!sliderRef.current) return;

        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <section id="testimonials" className='container commonMT'>
            <div className="commonTexts">
                <h2 className='commonHeadline'> Our Customers Speak for Us!</h2>
                <span className='commonSpan'>Don't just take our word for it! Hear from satisfied customers.</span>
            </div>
            <div className="testSlider">
                <Swiper
                    ref={sliderRef}
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    pagination={{
                        clickable: true,
                        renderBullet: renderBullet
                    }}
                    navigation
                    className='testiSwiper'
                    breakpoints={breakpoints}
                >
                    {
                        swiperData.map((ele, index) => {
                            return <>
                                <SwiperSlide key={index}>
                                    <div className='commonBorder'>

                                        <div className="card swiperCard">
                                            <div className="cardFooter">

                                                <div className="testiFoot">
                                                    <div className="cardFootText">
                                                        <span className='userImg'> <img src={ele.userImg.src} alt="" /></span>
                                                        <span className='userName'> {ele.name}</span>
                                                    </div>
                                                    <div className="footRating">
                                                        <span ><LiaStarSolid size={22} color='#EC8C24' /></span>
                                                        <span className='swiperRating'>{ele.rating}</span>
                                                    </div>
                                                </div>
                                                <div className="commonBorder">
                                                </div>
                                            </div>
                                            <div className="card-header">
                                            </div>
                                            <div className="card-body">
                                                <div className='testiDesc'>
                                                    <span className='userComment'>{ele.text}</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        })
                    }
                </Swiper>

                <div className="swiperBtns">

                    <div className="swiper-button-prev" onClick={handlePrev} >
                        <div className="commonBorder">
                            <span><BiLeftArrowAlt color='white' size={35} /></span>
                        </div>
                    </div>
                    <div className="swiper-button-next" onClick={handleNext}>
                        <div className="commonBorder">
                            <span><BiRightArrowAlt color='white' size={35} /></span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonials
