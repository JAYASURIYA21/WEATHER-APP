import { Link } from "react-router-dom"
export default function Navbar({show}) {
  return (
    
    <div  className='flex flex-row p-3 text-white justify-between'>
        <div data-aos="fade-up" data-aos-delay="500" className='w-24 cursor-pointer'>
            <img src='/brand.png' />
        </div>
        {show ? 
          <div data-aos="fade-right" data-aos-delay="500" className='text-white hover:text-blue hidden md:flex flex-row p-2 mr-12 my-auto cursor-pointer border-solid border-2 border-white px-6 rounded-full hover:bg-white hover:text-blue'>
            <button ><Link to='/weather' className='font-display font-semibold'>Get started</Link></button>
        </div>
        : <></>
        }
        
    </div>
  )
}
