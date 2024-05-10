"use client";    

import Header from '@/components/Header/Header'
import { useUser } from '@clerk/nextjs'
import React from 'react'

const DashBoardLayout = ({children}:{children: React.ReactNode}) => {
  const { user } = useUser();
  return (
    <div>
        <Header user={user} />
        {children}
    </div>
  )
}

export default DashBoardLayout