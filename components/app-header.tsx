import React from 'react'

type AppHeaderProps = {
    pageTitle: string
}
export default function AppHeader({ pageTitle }: AppHeaderProps) {
  return (
    <div className='flex flex-col my-2 xl:py-2'>
        <span className='text-xs font-normal'>iSisman Admin Panel</span>
        <h1 className='text-2xl font-bold text-sidebar-primary'>{pageTitle}</h1>
    </div>
  )
}
