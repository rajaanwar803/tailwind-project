import React from 'react'
import { useRouter } from 'next/router'
import { Calendar, ShoppingCart, Store } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const About = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/')
  }
  return (
    <>
    <h1 className='scroll-m-20 font-bold flex justify-center text-3xl mt-8 text-red-600'>About</h1>
      <div className='flex flex-col space-y-4 justify-center items-center'>
        <Button variant='outline' onClick={handleClick} className='flex justify-center text-blue-500 items-center p-10 font-bold text-xl rounded-lg'>
          <ShoppingCart className='mr-4'/> Go Back
        </Button>
        <Link href={'/form'}>
          <Button variant='outline' onClick={handleClick} className='flex justify-center text-blue-500 items-center p-10 font-bold text-xl rounded-lg'>
            <Calendar className='mr-4'/> Open Form
          </Button>
        </Link>
        
      </div>
    </>
  )
    
}

export default About