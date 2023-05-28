import Image from 'next/image'
import { Inter } from 'next/font/google'
import Router from 'next/router'
import { Button } from '@/components/ui/button'
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Store } from 'lucide-react'
import { useRouter } from 'next/router'
import image from '../../public/images/profile.jpg'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/about')
  }
  return (
    <>
      <div className='flex justify-center items-center h-screen w-full'>
        <Card className='shadow-xl'>
          <div className='flex'>
            <CardHeader >
              <CardTitle className='text-6xl font-bold text-blue-900'>Muhammad Anwar</CardTitle>
              <CardDescription className='text-4xl text-gray-400 font-semibold'>Full Stack Developer</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src={image} height={1000} width={1000} alt='' className='w-[150px] h-[150px] mt-6 mr-4 rounded-full' />
            </CardContent>
          </div>
          <CardFooter>
            <Button onClick={handleClick} variant="default" className='w-full text-xl font-bold'>
              <Store className='mr-2'/> 
              About
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className='flex justify-center m-4'>
        
      </div>
    </>
  )
}
