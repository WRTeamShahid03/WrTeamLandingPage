import React from 'react'
import chooseUs from '../Assets/Images/chooseUs.png'

const ChooseUs = () => {
    return (
        <>
            <section id='chooseUs' className='container'>
                <div className="commonBorder commonMT">
                    <div className="row wrapper">
                        <div className="col-sm-12 col-md-12 col-lg-4">
                            <div className="chooseUsImg">
                                <img src={chooseUs.src} alt="" />
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-8">
                            <div className="commonTexts">
                                <h2 className='commonHeadline'>Choose Wisely, Choose Us</h2>
                                <span className='commonSpan'>Avoid Null Products, Choose Authentic Software
                                    for Peace of Mind.</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ChooseUs
