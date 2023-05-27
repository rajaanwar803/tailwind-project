
import { Calendar } from '@/components/ui/calendar'
import React,{useState} from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Checkbox } from '@/components/ui/checkbox'

const Form = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div className='bg-gray-800'>

    <div className='space-y-10 p-4 bg-gray-900 text-white flex items-center flex-col mx-auto max-w-5xl justify-center'>
        <div className='space-y-4 mt-2 flex justify-center items-center flex-col'>
            <h1 className='font-bold text-6xl'>Welcome to Developers Club</h1>
            <h3 className='font-bold text-4xl'>Sign up following these steps</h3>
        </div>
        
        <div>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Enter Your Username</li>
                <li>Enter Your Email</li>
                <li>Create the Password</li>
                <li>Enter Your Date of Birth</li>
                <li>Select the Programming Language</li>
                <li>Accept terms and conditions</li>
            </ul>
        </div>
        <div className='flex flex-col w-full [&>input]:p-3 space-y-2 text-black '>
            {/* <Input type="email" placeholder="Email" /> */}
            <input className='' type="text" placeholder='Enter your username'/>
            <input type="email" placeholder='Enter your email'/>
            <input type="password" placeholder='Create your password'/>
        </div>
        <div className='space-y-2  '>
            <h3 className='font-bold text-4xl'>Select your DOB </h3>
            <div className="rounded-md border  inline-block">
                <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                
                />

            </div>
        </div>
        <div className='space-y-4 '>

            <h3 className='font-bold text-4xl'>Select your Programming Language </h3>
            <Select >
                <SelectTrigger className="">
                    <SelectValue placeholder="Select a Programming Language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Programming</SelectLabel>
                        <SelectItem value="Python">Python</SelectItem>
                        <SelectItem value="TypeScript/JavaScript">TypeScript/JavaScript</SelectItem>
                        <SelectItem value="React/Next">React/Next</SelectItem>
                        <SelectItem value="Go">Go</SelectItem>
                        <SelectItem value="Java">Java</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>    
        </div>
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" className='bg-white'/>
            <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Accept terms and conditions
            </label>
        </div>
    </div>
    </div>
    
  )
}

export default Form