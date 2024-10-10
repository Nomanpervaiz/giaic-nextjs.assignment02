import Image from 'next/image';
import livingRoomimg from '../app/assets/Image-living room.png'
import dinning from '../app/assets/Mask Group.png'
import bedRoom from '../app/assets/Mask Group (1).png'

function HomeSec2() {
    return (
        <section className="text-gray-600 body-font">
        <div className="container px-10 py-24 mx-auto">
          <div className='text-center mb-16'>
            <h1 className='font-bold text-3xl py-2'>Browse You Range</h1>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquam ipsum officiis sed laborum dolor?</p>
          </div>
          <div className="flex flex-wrap justify-center -m-4">
            <div className="py-2 lg:w-1/3 md:w-1/3">
              <div className="h-full bg-opacity-75 px-8 pt-0 pb-0 rounded-lg overflow-hidden text-center relative">

                <Image src={dinning} alt="Living room picture" />
                <p className='font-bold py-2'>Dinning</p>

              </div>
            </div>
            <div className="py-2 lg:w-1/3 md:w-1/3">
              <div className="h-full bg-opacity-75 px-8 pt-0 pb-0 rounded-lg overflow-hidden text-center relative">

                <Image src={livingRoomimg} alt="Living room picture" />
                <p className='font-bold py-2'>Living Room</p>

              </div>
            </div>
            <div className="py-2 lg:w-1/3 md:w-1/3">
              <div className="h-full bg-opacity-75 px-8 pt-0 pb-0 rounded-lg overflow-hidden text-center relative">

                <Image src={bedRoom} alt="Living room picture" />
                <p className='font-bold py-2'>Bedroom</p>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default HomeSec2;
