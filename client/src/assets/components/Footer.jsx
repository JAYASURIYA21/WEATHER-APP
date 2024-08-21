import React from 'react'

export default function Footer() {
  return (
    <section id="footer" className='text-white mt-auto bg-midnight border-solid border-t-2 border-white'>
        <footer >
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 lg:flex-col lg:space-y-0 lg:items-start">
          <div className="mx-auto my-6 text-center text-white lg:hidden">
            Copyright &copy; 2023, All Rights Reserved
          </div>
          <div className='flex items-center justify-between'>
            <img src="/brand.png" className="h-8" alt="" />
            <h1 className='font-bold mx-2'>WEATHER</h1>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="www.facebook.com">
              <img src="/icon-facebook.svg" alt="facebook" className="h-8" />
            </a>
            <a href="www.youtube.com">
              <img src="/icon-youtube.svg" alt="youtube" className="h-8" />
            </a>
            <a href="www.twitter.com">
              <img src="/icon-twitter.svg" alt="twitter" className="h-8" />
            </a>
            <a href="www.pinterest.com">
              <img src="/icon-pinterest.svg" alt="pinterest" className="h-8" />
            </a>
            <a href="www.instagram.com">
              <img src="/icon-instagram.svg" alt="instagram" className="h-8" />
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">Home</a>
            <a href="#" className="hover:text-brightRed">Pricing</a>
            <a href="#" className="hover:text-brightRed">Products</a>
            <a href="#" className="hover:text-brightRed">About</a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">Careers</a>
            <a href="#" className="hover:text-brightRed">Community</a>
            <a href="#" className="hover:text-brightRed">Privacy Policy</a>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button
                className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
              >
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white lg:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
    </section>
  )
}
