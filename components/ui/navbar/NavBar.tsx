import React from 'react'
import { Button } from '../button'

export const NavBar = () => {
  return (
    <div className=' h-[100px] flex p-9 justify-between ' >
    <div className='flex'>
        <div className='text-xl '>page</div>
        
    </div>
    <div className='flex justify-between gap-16 items-center'>
        <div>
            <Button variant={'link'}>Home</Button>
        </div>
        <div><Button variant={'link'}>Features</Button></div>
        <div><Button variant={'link'}>Community</Button></div>
        <div><Button variant={'link'}>Blog</Button></div>
        <div><Button variant={'link'}>Pricing</Button></div>
        <div>
            <Button className=' text-white bg-green-500 p-9 rounded' variant={'secondary'}>Register Now</Button></div>
        </div>
    </div>
  )
}
 