/* eslint-disable prettier/prettier */
import React from 'react'
import { Input, Button } from '@nextui-org/react'
import { Settings, DeleteOutlineOutlined, Info, MoreVert, ExitToApp } from '@mui/icons-material'

import { TableWrapper } from '@/components/dashboard/table/table'
import { useSidebar } from '@/context/sidebarContext'
import { siteConfig } from '@/config/site'
import { AddUser } from './addUser'

const AccountsDashboard = () => {
  const { isOpen } = useSidebar()

  return (
    <div className={`px-12 pt-6  h-full transition-all duration-300 z-10 shadow-innerset  ${isOpen ? 'ml-[160]' : 'ml-[48]'}`}>
      <div className='flex items-center mt-4'>
        {<siteConfig.portals.dashboard.accounts.icon className='text-[#A1A1AA] mr-2' />}
        <span>{siteConfig.portals.dashboard.accounts.label}</span>
      </div>
      <div className='mb-3'>
        <h1 className='my-3 font-bold text-xl'>{siteConfig.portals.dashboard.accounts.title}</h1>
        <div className='mb-3 flex justify-between'>
          <div className='flex flex-row gap-3.5 w-[400]'>
            <Input
              classNames={{
                input: "w-full",
                mainWrapper: "w-full",
              }}
              placeholder="Search users"
            />
            <div className='flex flex-row items-center gap-2'>
              <Settings className='text-[#A1A1AA]' />
              <DeleteOutlineOutlined className='text-[#A1A1AA]' />
              <Info className='text-[#A1A1AA]' />
              <MoreVert className='text-[#A1A1AA]' />
            </div>
          </div>
          <div className="flex flex-row gap-3.5 flex-wrap">
            <AddUser />
            <Button color="primary" startContent={<ExitToApp />}>
              Export to CSV
            </Button>
          </div>
        </div>
        <TableWrapper />
      </div>
    </div>
  )
}

export default AccountsDashboard
