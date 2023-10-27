import MegaSale from '@/Components/MegaSale'
import Solution from '@/Components/Solution'
import React from 'react'
import Counter from '@/Components/Counter'
import Bundles from '../Bundles'
import ChooseUs from '../ChooseUs'
import WhyChoose from '../WhyChoose'
import Testimonials from '../Testimonials'
import CountDown from './CountDown'

const Home = () => {
  return (
    <>
      <div className="container">

        <MegaSale />

        {/* <CountDown/> */}

        <Solution />

        <Counter />

        <Bundles />

        <ChooseUs />

        <WhyChoose />

        <Testimonials />

      </div>
    </>
  )
}

export default Home
