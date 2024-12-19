import React from 'react'

interface props{
    children: React.ReactNode
}

export default function ContentChallengeCards({children}: props) {
  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-2 max-w-[1200px] m-auto gap-3 flex-col items-center gap-y-3 justify-center p-2'>
      {children}
    </div>
  )
}
