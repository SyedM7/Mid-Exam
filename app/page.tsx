import { Clients } from '@/components/ui/clients/Clients'
import { NavBar } from '@/components/ui/navbar/NavBar'
import { Title } from '@/components/ui/title/Title'
import React from 'react'

const home = () => {
  return (
    <main>
    <NavBar />
    <Title />
    <Clients />
    
    </main>

  )
}

export default home