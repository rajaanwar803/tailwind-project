import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CalendarReactHookForm } from "./dob";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Form = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="bg-gray-800">
      <div className="space-y-10 p-4 bg-gray-900 text-white flex items-center flex-col mx-auto max-w-4xl justify-center">
        <div className="space-y-4 mt-2 flex justify-center items-center flex-col">
          <h1 className="font-bold text-6xl">Welcome to Developers Club</h1>
          <h3 className="font-bold text-4xl">Sign up following these steps</h3>
        </div>

        <div>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-lg">
            <li>Enter Your Username</li>
            <li>Enter Your Email</li>
            <li>Create the Password</li>
            <li>Enter Your Date of Birth</li>
            <li>Select the Programming Language</li>
            <li>Accept terms and conditions</li>
          </ul>
        </div>
        <div className="flex flex-col w-full [&>input]:p-3 space-y-2 text-black [&>Input]:bg-white max-w-3xl">
          <Input type="text" placeholder="Username" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          {/* <input className='' type="text" placeholder='Enter your username'/>
            <input type="email" placeholder='Enter your email'/>
            <input type="password" placeholder='Create your password'/> */}
        </div>
        <div className=" flex space-x-10  ">
          <div className="flex-col space-y-4">
            <h3 className="font-bold text-4xl">Select your DOB </h3>

            <div className="">
              <CalendarReactHookForm />
            </div>
          </div>
          <div className="flex-col space-y-4">
            <h3 className="font-bold text-4xl">Calendar</h3>
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
        <div className="space-y-4 ">
          <h3 className="font-bold text-4xl">
            Select your Programming Language{" "}
          </h3>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select a Programming Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Programming</SelectLabel>
                <SelectItem value="Python">Python</SelectItem>
                <SelectItem value="TypeScript/JavaScript">
                  TypeScript/JavaScript
                </SelectItem>
                <SelectItem value="React/Next">React/Next</SelectItem>
                <SelectItem value="Go">Go</SelectItem>
                <SelectItem value="Java">Java</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          {/* <Checkbox
            id="terms"
            className="bg-white data-[state=checked]:bg-white data-[state=checked]:text-blue-900"
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label> */}
          <div className="items-top flex space-x-2">
            <Checkbox
              id="terms1"
              className="bg-white data-[state=checked]:bg-white data-[state=checked]:text-blue-900"
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              <p className="text-sm text-muted-foreground">
                You agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Button variant={"secondary"} size={"lg"}>
            Submit
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Form;
