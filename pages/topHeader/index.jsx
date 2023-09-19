import Link from 'next/link'
import React from 'react'

const index = () => {
    return (
        <>
            <div className="topHeader">

                <span>HURRY UP! SALE IS LIVE With FLAT 50% DISCOUNT </span>
                <Link href=""><button className='topHeaderBtn'> GET OFFER</button></Link>

            </div>
        </>
    )
}

export default index