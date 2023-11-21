'use client'
import { useRouter } from 'next/router.js'
import Home from '../src/Components/Home/Home.jsx'
import React, { useEffect } from 'react'


const Index = () => {
  const router = useRouter()
  // client side rendering route get
  useEffect(() => {
    if (router.pathname) {
      router.replace(window.location.pathname + window.location.search)
    }
}, [])
  return (
    <>

      <Home/>
    </>
  )
}

export default Index