import MegaSale from '@/Components/MegaSale'
import Solution from '@/Components/Solution'
import React from 'react'
import Counter from '@/Components/Counter'
import Bundles from '../Bundles'
import ChooseUs from '../ChooseUs'
import WhyChoose from '../WhyChoose'
import Testimonials from '../Testimonials'

const Home = () => {
  return (
    <>
      <div className="container">

        <MegaSale />

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
