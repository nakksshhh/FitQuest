import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
            <p>IT'S TIME TO GET ON</p>
            <h1 className='uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Fit<span className='text-blue-400'>Quest</span></h1>
            </div>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, tenetur omnis in quis quaerat dolor. Error, doloremque, enim tenetur nemo culpa explicabo quas maxime laborum laboriosam rem nobis earum id?
            </p>

            <Button text={"Accept & Begin"}></Button>
        </div>
    )
}
