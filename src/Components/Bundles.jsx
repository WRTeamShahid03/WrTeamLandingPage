import React from 'react'
import ecartIcon1 from '../Assets/Images/1.png'
import ecartIcon2 from '../Assets/Images/2.png'
import ecartWeb from '../Assets/Images/Web.png'
import ecartApp from '../Assets/Images/App.png'

import eschool1 from '../Assets/Images/eschool1.png'
import eschool2 from '../Assets/Images/eschool2.png'
import eschoolWeb from '../Assets/Images/eschoolWeb.png'
import eschoolApp from '../Assets/Images/eschoolApp.png'

import eshop1 from '../Assets/Images/eshop1.png'
import eshop2 from '../Assets/Images/eshop2.png'
import eshop3 from '../Assets/Images/eshop3.png'
import eshopWeb from '../Assets/Images/eshopWeb.png'
import eshopApp from '../Assets/Images/eshopApp.png'

import erestro1 from '../Assets/Images/erestro1.png'
import erestro2 from '../Assets/Images/erestro2.png'
import erestro3 from '../Assets/Images/erestro3.png'
import erestroWeb from '../Assets/Images/erestroWeb.png'
import erestroApp from '../Assets/Images/erestroApp.png'

import quiz1 from '../Assets/Images/quiz1.png'
import quiz2 from '../Assets/Images/quiz2.png'
import quizWeb from '../Assets/Images/quizWeb.png'
import quizApp from '../Assets/Images/quizApp.png'

import eShop1 from '../Assets/Images/eShop1.png'
import eShop2 from '../Assets/Images/eShop2.png'
import eShopWeb from '../Assets/Images/eShopWeb.png'
import eShopApp from '../Assets/Images/eShopApp.png'

import extra1 from '../Assets/Images/extra1.png'
import extra2 from '../Assets/Images/extra2.png'
import extra3 from '../Assets/Images/extra3.png'
import extraWeb from '../Assets/Images/extraWeb.png'
import extraApp from '../Assets/Images/extraApp.png'

import ultimate1 from '../Assets/Images/ulti1.png'
import ultimate2 from '../Assets/Images/ulti2.png'
import ultimate3 from '../Assets/Images/ulti3.png'
import ultimate4 from '../Assets/Images/ulti4.png'
import ultiWeb from '../Assets/Images/ultiWeb.png'
import ultiApp from '../Assets/Images/ultiApp.png'

import flutter1 from '../Assets/Images/flutter1.png'
import flutter2 from '../Assets/Images/flutter2.png'
import flutter3 from '../Assets/Images/flutter3.png'
import flutterWeb from '../Assets/Images/flutterWeb.png'
import flutterApp from '../Assets/Images/flutterApp.png'

import ecart1 from '../Assets/Images/ecart1.png'
import ecart2 from '../Assets/Images/ecart2.png'
import ecart3 from '../Assets/Images/ecart3.png'
import eCartWeb from '../Assets/Images/ecartWeb.png'
import eCartApp from '../Assets/Images/ecartApp.png'

import ai1 from '../Assets/Images/ai1.png'
import ai2 from '../Assets/Images/ai2.png'
import aiWeb from '../Assets/Images/aiWeb.png'
import aiApp from '../Assets/Images/aiApp.png'

import elite1 from '../Assets/Images/elite1.png'
import elite2 from '../Assets/Images/elite2.png'
import eliteWeb from '../Assets/Images/eliteWeb.png'
import eliteApp from '../Assets/Images/eliteApp.png'

import { FiCheckCircle } from 'react-icons/fi'
import { BsCart } from 'react-icons/bs'
import Link from 'next/link'

const Bundles = () => {

    const cardData = [
        {
            id: 0,
            icon1: ecartIcon1,
            icon2: ecartIcon2,
            icon3: ecartIcon1,
            icon4: "",
            webImg: ecartWeb,
            appImg: ecartApp,
            title: "eCart Multi Vendor Bundle",
            p1Name: "eCart App",
            p1Price: "$39",
            p2Name: "eCart Web",
            p2Price: "$29",
            p3Name: "",
            p3Price: "",
            p4Name: "",
            p4Price: "",
            salePrice: "$33",
            cutPrice: "$68",
            link: "https://1.envato.market/nLWvnM",
            backColor: "ecart"
        },
        {
            id: 1,
            icon1: eschool1,
            icon2: eschool2,
            icon3: "",
            icon4: "",
            webImg: eschoolWeb,
            appImg: eschoolApp,
            title: "eSchool Bundle",
            p1Name: "School App",
            p1Price: "$49",
            p2Name: "Teacher App",
            p2Price: "$29",
            p3Name: "",
            p3Price: "",
            p4Name: "",
            p4Price: "",
            salePrice: "$29",
            cutPrice: "$59",
            link: "https://1.envato.market/OryZ1P",
            backColor: "#BBE0CA"
        },
        {
            id: 2,
            icon1: eshop1,
            icon2: eshop2,
            icon3: eshop3,
            icon4: "",
            webImg: eshopWeb,
            appImg: eshopApp,
            title: "eShop Bundle (Single-Vendor)",
            p1Name: "eShop App",
            p1Price: "$49",
            p2Name: "eShop Web",
            p2Price: "$39",
            p3Name: "eShop manager app",
            p3Price: "$19",
            p4Name: "",
            p4Price: "",
            salePrice: "$52",
            cutPrice: "$107",
            link: "https://1.envato.market/Qy2XJ6",
            backColor: "#BBF7FF"
        },
        {
            id: 3,
            icon1: erestro1,
            icon2: erestro2,
            icon3: erestro3,
            icon4: "",
            webImg: erestroWeb,
            appImg: erestroApp,
            title: "eRestro Bundle",
            p1Name: "eRestro app",
            p1Price: "$59",
            p2Name: "eRestro web",
            p2Price: "$19",
            p3Name: "",
            p3Price: "",
            p4Name: "",
            p4Price: "",
            salePrice: "$38",
            cutPrice: "$78",
            link: "https://1.envato.market/jrJ4zZ",
            backColor: "#FFC8C8"
        },
        {
            id: 4,
            icon1: quiz1,
            icon2: quiz2,
            icon3: "",
            icon4: "",
            webImg: quizWeb,
            appImg: quizApp,
            title: "Quiz Online Bundle",
            p1Name: "Quiz Online Android + Web",
            p1Price: "$29",
            p2Name: "Quiz Online iOS + Web",
            p2Price: "$39",
            p3Name: "",
            p3Price: "",
            p4Name: "",
            p4Price: "",
            salePrice: "$33",
            cutPrice: "$68",
            link: "https://1.envato.market/EKRP9D",
            backColor: "#ACCBFF"
        },
        {
            id: 5,
            icon1: eShop1,
            icon2: eShop2,
            icon3: "",
            icon4: "",
            webImg: eShopWeb,
            appImg: eShopApp,
            title: "eShop Bundle (Multi-Vendor)",
            p1Name: "eShop app",
            p1Price: "$69",
            p2Name: "eShop web",
            p2Price: "$49",
            p3Name: "",
            p3Price: "",
            p4Name: "",
            p4Price: "",
            p3Name: "",
            p3Price: "",
            salePrice: "$58",
            cutPrice: "$118",
            link: "https://1.envato.market/jrJ4nZ",
            backColor: "#FFE8B7"
        },
        {
            id: 6,
            icon1: extra1,
            icon2: extra2,
            icon3: extra3,
            icon4: "",
            webImg: extraWeb,
            appImg: extraApp,
            title: "Extravaganza Pack",
            p1Name: "Game Earning System",
            p1Price: "$39",
            p2Name: "Quotes App",
            p2Price: "$19",
            p3Name: "Tic Tac Toe Game",
            p3Price: "$19",
            p4Name: "",
            p4Price: "",
            salePrice: "$37",
            cutPrice: "$77",
            link: "https://1.envato.market/5g1GM1",
            backColor: "#D3FFE8"
        },
        {
            id: 7,
            icon1: ultimate1,
            icon2: ultimate2,
            icon3: ultimate3,
            icon4: ultimate4,
            webImg: ultiWeb,
            appImg: ultiApp,
            title: "Ultimate Business Bundle",
            p1Name: "Multi Vendor Grocery App",
            p1Price: "$59",
            p2Name: "Multi Vendor e-Com App",
            p2Price: "$69",
            p3Name: "Real Estate Broker App",
            p3Price: "$59",
            p4Name: "On Demand service App",
            p4Price: "$59",
            salePrice: "$121",
            cutPrice: "$246",
            link: "https://1.envato.market/q4OvEN",
            backColor: "#A7EDED"
        },
        {
            id: 8,
            icon1: flutter1,
            icon2: flutter2,
            icon3: flutter3,
            icon4: "",
            webImg: flutterWeb,
            appImg: flutterApp,
            title: "Flutter Mega Bundle",
            p1Name: "Flutter Biggest UI Kit",
            p1Price: "$29",
            p2Name: "PrimeWeb",
            p2Price: "$39",
            p3Name: "News App and Web",
            p3Price: "$19",
            p4Name: "",
            p4Price: "",
            salePrice: "$42",
            cutPrice: "$87",
            link: "https://1.envato.market/Qy2XNx",
            backColor: "#FFCBF6"
        },
        {
            id: 9,
            icon1: ecart1,
            icon2: ecart2,
            icon3: ecart3,
            icon4: "",
            webImg: eCartWeb,
            appImg: eCartApp,
            title: "eCart Single-Vendor Bundle",
            p1Name: "eCart App",
            p1Price: "$29",
            p2Name: "eCart Web",
            p2Price: "$19",
            p3Name: "eCart store manager app",
            p3Price: "$14",
            p4Name: "",
            p4Price: "",
            salePrice: "$30",
            cutPrice: "$62",
            link: "https://1.envato.market/PymgrN",
            backColor: "#C7E7FF"
        },
        {
            id: 10,
            icon1: ai1,
            icon2: ai2,
            icon3: "",
            icon4: "",
            webImg: aiWeb,
            appImg: aiApp,
            title: "AI text-to-speech Bundle",
            p1Name: "Text Speech Flutter App",
            p1Price: "$29",
            p2Name: "AI Text Speech with SaaS",
            p2Price: "$49",
            p3Name: "",
            p3Price: "",
            p4Name: "",
            p4Price: "",
            salePrice: "$38",
            cutPrice: "$78",
            link: "https://1.envato.market/B0R9zW",
            backColor: "#FFDDCA"
        },
        {
            id: 11,
            icon1: elite1,
            icon2: elite2,
            icon3: "",
            icon4: "",
            webImg: eliteWeb,
            appImg: eliteApp,
            title: "Elite Quiz Bundle",
            p1Name: "Elite Quiz app",
            p1Price: "$59",
            p2Name: "Elite Quiz web",
            p2Price: "$19",
            p3Name: "",
            p3Price: "",
            p4Name: "",
            p4Price: "",
            salePrice: "$38",
            cutPrice: "$78",
            link: "https://1.envato.market/nLWvR9",
            backColor: "#D3E5FF"
        },

    ]
    return (
        <>
            <section id="bundles" className='commonMT'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="commonTexts">

                            <h2 className='commonHeadline'>Power-Packed Bundles at Massive Discount</h2>
                            <span className='commonSpan'>Get everything you need in one bundle and save big - no need to buy add-ons separately!</span>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="row">

                            {
                                cardData.map((e) => {
                                    return <div className="col-sm-12 col-md-6 col-lg-4" key={e.id}>
                                        <div className="card" style={{ 
                                            backgroundColor: e.backColor,
                                         }}>
                                            <div className="upperDiv">
                                            <span className='productsIcon'>
                                                <span> <img src={e.icon1.src} alt="" /></span>
                                                <span> <img src={e.icon2.src} alt="" /></span>
                                                <span> <img src={e.icon3.src} alt="" /></span>
                                                <span> <img src={e.icon4.src} alt="" /></span>
                                            </span>
                                            <div className="cardImg">
                                                <span className='webImg'>
                                                    <img className="card-img-top" src={e.webImg.src} alt="Card image cap" />
                                                </span>
                                                <span className='appImg'><img src={e.appImg.src} alt="" /></span>
                                            </div>
                                            </div>
                                            

                                            <div className="lowerDiv">
                                            <div className="card-body">
                                                <div className="productDetails">
                                                    <h5 className="card-title">{e.title}</h5>
                                                    <div className="detailWrapper">


                                                        <span className="webAppPrice mt-4">
                                                            <p className="card-text"> {!e.p1Name ? "" : <FiCheckCircle />} {e.p1Name}</p>
                                                            <p className="card-text"> {e.p1Price}</p>
                                                        </span>
                                                        <span className="webAppPrice">
                                                            <p className="card-text"> {!e.p2Name ? "" : <FiCheckCircle />}{e.p2Name}</p>
                                                            <p className="card-text">{e.p2Price}</p>
                                                        </span>
                                                        <span className="webAppPrice">
                                                            <p className="card-text"> {!e.p3Name ? "" : <FiCheckCircle />}{e.p3Name}</p>
                                                            <p className="card-text">{e.p3Price}</p>
                                                        </span>
                                                        <span className="webAppPrice">
                                                            <p className="card-text"> {!e.p4Name ? "" : <FiCheckCircle />}{e.p4Name}</p>
                                                            <p className="card-text">{e.p4Price}</p>
                                                        </span>
                                                    </div>

                                                    <div className="cardFooter">
                                                        <span className='salePriceDiv'>
                                                            <span className='priceTag'>Price</span>
                                                            <span className='price'>{e.salePrice} <span className='cutPrice'>{e.cutPrice}</span></span></span>

                                                        <Link href={e.link} target='_blank'>
                                                            <span className='buyBtn'>
                                                                <BsCart size={28} className='mb-2' />
                                                                Buy Bundle
                                                            </span>
                                                        </Link>

                                                    </div>

                                                </div>

                                            </div>

                                            </div>
                                           

                                        </div>
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

export default Bundles
