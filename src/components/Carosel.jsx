'use client'
import { useState } from 'react'; // Import useState for state management
import Image from 'next/image'; // Next.js Image component for optimized images
import img1 from "../app/assets/Image-living room.png";
import img2 from "../app/assets/Mask Group (1).png";
import img3 from "../app/assets/Mask Group.png";
import img5 from "../app/assets/Rectangle 25.png";

const cardsData = [
    { id: 1, img: img1, alt: 'Living Room' },
    { id: 2, img: img2, alt: 'Room Design' },
    { id: 3, img: img3, alt: 'Modern Room' },
    { id: 5, img: img5, alt: 'Elegant Room' }
];

function CardCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    };

    return (
        <section className='md:px-0 px-0'>
            <div className='relative flex items-center space-x-0 xl:h-96 h-96 justify-center overflow-hidden'>
                {/* Render Active and Next Card */}
                {cardsData.map((card, index) => {
                    if (index === activeIndex || index === (activeIndex + 1) % cardsData.length) {
                        return (
                            <div
                                key={card.id}
                                className={`py-6 md:h-96 h-96 w-full flex justify-center object-cover bg-transparent rounded-lg transition-all duration-1000 ease-in-out 
                                ${index === activeIndex ? 'transform scale-110 z-10' : 'opacity-20'}`}
                            >
                                <Image
                                    className='border w-[300px] object-cover'
                                    src={card.img}
                                    alt={card.alt}
                                    width={300} // Specify width
                                    height={300} // Specify height
                                    objectFit="cover"
                                />
                            </div>
                        );
                    }
                    return null;
                })}

                {/* Next Button (Simple HTML Button) */}
                <button
                    className="absolute right-4 z-20 bg-yellow-600 rounded-full h-12 w-12 text-white flex items-center justify-center"
                    onClick={handleNext}
                >
                    ➔
                </button>
            </div>
        </section>
    );
}

export default CardCarousel;
