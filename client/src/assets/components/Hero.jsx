import { Link } from "react-router-dom"
export default function Hero() {
  return (

    <section id="hero" data-aos="fade-left"  className='mt-24 mb-48'>
        <div className="container flex flex-col-reverse items-center px-6 py-0 mx-auto md:flex-row ">
            <div className="flex-col w-1/2 hidden lg:flex">
                <div data-aos="fade-right" data-aos-delay="1000"  className='w-96 z-0 h-96 hidden justify-center md:flex cursor-pointer'>
                    <img className="animate-rotate-constant" src="/hero2.png" alt="hero-image" />
                </div>  
                <div data-aos="fade-right" data-aos-delay="600" className='w-full z-10 -mt-72 pl-48 h-96 hidden justify-center md:flex'>
                    <img  src="/hero.png" alt="hero-image" />
                </div>
            </div>
            
            <div
                data-aos="fade-up"
                data-aos-delay="300" 
                className="flex flex-col mb-32 space-y-12  w-full lg:w-2/3 items-center lg:pr-24 mb-auto">
                <h1 className="w-full lg:pl-12 text-5xl font-bold text-center text-white mt-12 md:text-6xl lg:text-start md:mt-0 "><span>S</span>tay Ahead of the Weather with Our Powerful Weather App!</h1>
                <p data-aos="fade-down" data-aos-delay="1400" className=" text-2xl lg:pl-12 w-full text-center lg:text-start font-display text-white ">Our weather app is your ultimate companion for staying informed about weather conditions, wherever you are. With real-time updates, accurate forecasts, and an intuitive user interface</p>
                <div className="w-full flex lg:pl-12 justify-center items-center lg:justify-start">
                    <button className="p-3 px-6 pt-2 font-display font-semibold text-blue rounded-full bg-white baseline hover:bg-blue hover:border-solid border-2 border-white hover:text-white" ><Link to='/weather' className='font-display font-semibold'>Get started</Link></button>
                </div>
            </div>
        </div>
    </section>
  )
}
