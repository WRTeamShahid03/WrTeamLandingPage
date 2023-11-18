import React from 'react'
import offerShape from '../Assets/Images/Offer Shape.svg'
import saleImg from '../Assets/Images/Image.png'
import saleImgBack from '../Assets/Images/Back.png'
import evanto from '../Assets/Images/evanto.png'


const MegaSale = () => {
    return (
        <>
            <div className="commonBorder commonMT">

                <div className="megaSale row">
                    <div className="col-sm-12 col-md-12 col-lg-9">
                        <div className="saleLeftDiv">
                            <span className='evanto'><span><img src={evanto.src} alt="" /></span> <span> Envato</span> </span>
                            <span className="saleHeadline">Black Friday Sale</span>
                            <span className='offerWrapper'>
                                <span className='offerShape'><img src={offerShape.src} alt="" /></span>
                                <span className='offerShapeText'>50% <br /> OFF</span>
                            </span>
                            <span className="midLine">Unlock Savings</span>
                            <span className="desc">Experience More with Our Exclusive Black Friday Sale <span> App & Website Offer!</span></span>

                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-3">
                        <div className="saleRightDiv">
                            <span className='saleImg'><img src={saleImg.src} alt="" /> </span>
                            <span className='saleImgBottom'>
                                <img src={saleImgBack.src} alt="" />
                                 </span>
                        </div>
                    </div>
                </div>
                {/* <Fireworks/> */}
            </div>
        </>
    )
}

export default MegaSale
