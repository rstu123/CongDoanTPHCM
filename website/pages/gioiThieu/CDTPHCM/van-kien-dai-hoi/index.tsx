/* eslint-disable prettier/prettier */
import React from 'react'

import Navbarr from '@/components/home/navbarr'
import Hero from '@/components/home/hero'
import Footer from '@/layouts/footer'
import Link from 'next/link'
import { Button } from '@mui/material'

const Home = () => {

  return (
    <>
      <Hero/>
      <Navbarr/>
      <div className=''>
        <Link href="/">
        <Button className="">
             Quay về trang chủ
        </Button>
      </Link>
      </div>
      <Footer/>
    </>
  )
}

export default Home

