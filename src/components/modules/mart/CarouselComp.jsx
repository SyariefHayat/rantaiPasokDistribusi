import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const CarouselComp = () => {
    return (
        <Carousel className="w-full h-[450px] overflow-hidden mb-5 rounded-md relative">
            <CarouselContent className="h-full">
                <CarouselItem className="h-full">
                    <img src="/5874132.jpg" alt="Banner 2" className="w-full h-full object-cover" />
                </CarouselItem>
                <CarouselItem className="h-full">
                    <img src="/7005204.jpg" alt="Banner 1" className="w-full h-full object-cover" />
                </CarouselItem>
                <CarouselItem className="h-full">
                    <img src="/7203616.jpg" alt="Banner 3" className="w-full h-full object-cover" />
                </CarouselItem>
                <CarouselItem className="h-full">
                    <img src="/7401563.jpg" alt="Banner 3" className="w-full h-full object-cover" />
                </CarouselItem>
                <CarouselItem className="h-full">
                    <img src="/8963508.jpg" alt="Banner 3" className="w-full h-full object-cover" />
                </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="bg-white hover:bg-yellow-500 hover:text-white transition shadow absolute bottom-0 left-10" />
            <CarouselNext className="bg-white hover:bg-yellow-500 hover:text-white transition shadow absolute bottom-0 right-10" />
        </Carousel>
    )
}

export default CarouselComp