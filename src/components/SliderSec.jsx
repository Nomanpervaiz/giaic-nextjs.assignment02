import { Button } from 'antd'
import React from 'react'
import CardCarousel from './Carosel'

function SliderSec() {
    return (
        <section className='bg-[#FFF3E3]'>
            <div className='container px-10 py-20 mt-10 mx-auto grid grid-cols-12 gap-4'>
                <div className='h-96 col-span-12 md:col-span-6 lg:col-span-4 pr-10 flex flex-col justify-center'>
                    <h1 className='font-bold text-4xl'>
                        50+ Beautiful rooms inspiration
                    </h1>
                    <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                    <Button className='bg-yellow-600 rounded mt-6 p-6 font-bold text-white w-40'>
                        Buy Now
                    </Button>
                </div>
                <div className='h-96 col-span-12 md:col-span-6 lg:col-span-8'>
                    <CardCarousel/>
                </div>
            </div>
        </section>
    )
}

export default SliderSec
