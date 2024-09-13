/* eslint-disable prettier/prettier */
import React from 'react'
import NextLink from 'next/link'

import { TableWrapper } from './table/table'

import { useSidebar } from '@/context/sidebarContext'
import { siteConfig } from '@/config/site'

const HomeDashboard = () => {
  const { isOpen } = useSidebar()

  return (
    <div className={`px-12 pt-6  h-full transition-all duration-300 z-10 shadow-innerset  ${isOpen ? 'ml-[160]' : 'ml-[48]'}`}>
      <div className='flex items-center mt-4'>
        {<siteConfig.portals.dashboard.icon className='text-[#A1A1AA] mr-2' />}
        <span>{siteConfig.portals.dashboard.label}</span>
      </div>
      {/* First Content */}

      {/* <div className='my-3'>
        <h1 className='my-3 uppercase'>{siteConfig.portals.dashboard.title.first}</h1>
      </div> */}

      {/* Second Content */}
      <div className='mb-3'>
        <div className='flex justify-between'>
          <h1 className='my-3 font-bold text-xl'>{siteConfig.portals.dashboard.title.second}</h1>
          <NextLink className='my-3 font-normal text-lg text-blue-600' href={siteConfig.portals.dashboard.accounts.href}>View All</NextLink>
        </div>
        <TableWrapper />
      </div>
    </div>
  )
}

export default HomeDashboard
