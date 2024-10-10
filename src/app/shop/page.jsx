import Image from 'next/image';
import logo from '../assets/logo.png'; // Ensure your logo is in the public directory
import ProductCards from '@/components/ProdctsCard';


function Shop() {
  return (
    <section className='poppins-regular'>
      {/* Top Section with Logo */}
      <div className='h-72 flex justify-center flex-col items-center pageTopBg'>
        <Image src={logo} alt="logo" className='w-10' />
        <h1 className='font-semibold text-4xl'>Shop</h1>
        <p>
          <span className="font-semibold">
            Home
            <span>

             <svg className="w-4 h-3 text-gray-800 dark:text-white inline mx-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
            </svg>
            </span>
          </span>
          Shop
        </p>
      </div>

      {/* Background Section */}
      <div className='h-16 bg-[#FFF3E3]'>
      </div>

      {/* Products Section */}
      <div className='h-fit'>
        <ProductCards />
      </div>
    </section>
  )
}

export default Shop;
