/* eslint-disable prettier/prettier */
import React from 'react'

import { useSidebar } from '@/context/sidebarContext'
import { siteConfig } from '@/config/site'

const NewsDashboard = () => {
  const { isOpen } = useSidebar()

  return (
    <div className={`px-12 pt-6 h-full transition-all duration-300 z-10 shadow-innerset  ${isOpen ? 'ml-[160]' : 'ml-[48]'}`}>
      <div className='flex items-center mt-4'>
        {<siteConfig.portals.dashboard.news.icon className='text-[#A1A1AA] mr-2' />}
        <span>{siteConfig.portals.dashboard.news.label}</span>
      </div>
    </div>
  )
}

export default NewsDashboard
