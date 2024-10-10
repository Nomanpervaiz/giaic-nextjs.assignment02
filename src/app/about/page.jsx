import Image from 'next/image';
import logo from '../assets/logo.png';
import imageSofa from '../assets/sofas.jpg';
import imageTable from '../assets/room.jpg';
import TVLanguage from '../assets/pexels-fotoaibe.jpg';

function About() {
  return (
    <section className="poppins-regular">
      
      <div className="h-72 flex justify-center flex-col items-center pageTopBg">
        <Image src={logo} alt="logo" className="w-10" />
        <h1 className="font-semibold text-4xl ">About</h1>
        <p>
          <span className="font-semibold">
            Home
            <span>

             <svg className="w-4 h-3 text-gray-800 dark:text-white inline mx-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
            </svg>
            </span>
          </span>
          About
        </p>
        
      </div>

      <div className="h-16 bg-[#FFF3E3]"></div>

      
      <div className="my-10 container px-4 md:px-10 mx-auto flex flex-col justify-center items-center">
        
        <h2 className="text-2xl md:text-3xl font-bold py-4 text-center">
          Welcome to Furniro&#44; where design meets comfort.
        </h2>

        <p className="text-base text-center md:text-lg mb-8 md:mb-20">
          At Furniro&#44; we believe that furniture is more than just an object in
          your home—its a reflection of your lifestyle&#44; personality&#44; and the
          spaces where memories are made. Our mission is to help you create
          those spaces by offering modern&#44; timeless furniture pieces that
          combine functionality&#44; aesthetics&#44; and durability.
        </p>

        
        <div className="mb-12 text-center container mx-auto px-4 md:px-0">
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col justify-center p-10">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                  High-Quality Materials
                </h3>
                <p className="text-gray-600 text-sm md:text-lg">
                  We take pride in sourcing only the finest materials&#44; from
                  sustainably harvested woods to high-grade fabrics. Every piece
                  of furniture is crafted to last ensuring that your investment
                  stands the test of time.
                </p>
              </div>
              <div>
                <Image src={imageSofa} alt="Sofa" className="rounded-xl w-full h-full object-cover" />
              </div>
            </div>

            {/* Modern Designs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="order-2 md:order-1 xl:order-1">
                <Image
                  src={TVLanguage}
                  alt="Room with TV"
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-1 xl:order-2 flex flex-col justify-center p-10">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                  Modern Designs
                </h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  Our designers keep up with the latest trends while staying true to the
                  classics. Whether youre looking for minimalist pieces or something bold
                  and unique&#44; Furniro has a wide range of styles to complement your home.
                </p>
              </div>
            </div>

            {/* Customization Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col justify-center p-10">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
                  Customization Options
                </h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  At Furniro&#44; we know that every home is unique. Thats why many
                  of our pieces come with customizable options&#44; from fabric
                  colors to finishes&#44; so you can create furniture that is truly
                  yours.
                </p>
              </div>
              <div>
                <Image src={imageTable} alt="Dining Table" className="rounded-xl w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-[#FFF3E3] py-10 rounded-2xl mb-12 container mx-auto md:px-0">
          <h2 className="text-3xl drop-shadow-lg md:text-4xl font-bold text-white mb-3 text-center">
            Our Vision
          </h2>
          <p className="text-gray-600 drop-shadow-lg p-4 leading-relaxed text-center text-sm md:text-base">
            At Furniro&#44; we aim to become the go-to destination for furniture
            enthusiasts and design-conscious homeowners worldwide. We are
            continuously innovating&#44; offering new designs&#44; and expanding our
            collections to meet the evolving needs of our customers. Our vision
            is to provide furniture that not only serves a purpose but also adds
            beauty&#44; comfort&#44; and joy to your everyday life.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
