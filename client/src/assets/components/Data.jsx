import { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { currvalues, currcity } from "../API/CurrenLocation";
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AirIcon from '@mui/icons-material/Air';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import { Link } from "react-router-dom";

export default function Data() {

    const[city,setcity] = useState("")
    const[data,setData] = useState(undefined)
    const [longitude, setLongitude] = useState(null);
    const [latitude, setLatitude] = useState(null);

    const handleSubmit = async event => {
        event.preventDefault()
        const wData = await currcity(city)
        console.log((await wData));
        setData(await wData.data)
        if(data === 'Request failed with status code 400'){
            toast(data)
        }
        setcity("")
    }
    useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async position => {
                setLongitude(position.coords.longitude);
                setLatitude(position.coords.latitude);
                if(longitude && latitude) {
                const wdata = await currvalues(latitude,longitude)
                setData(await wdata.data)
              }
            },
            error => console.log("Error retrieving location:", error)
          )
        } else console.log("Geolocation is not supported by this browser.");
      }, []);
        
    return (
        <div className="flex flex-col">
            <ToastContainer
                position="top-right"
                autoClose={100}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
            <ToastContainer />
            <div data-aos="fade-left" data-aos-delay="800" className="flex flex-col md:flex-row p-6 w-full">
                <div data-aos="fade-up" data-aos-delay="500" className='w-full md:w-auto md:my-0 my-3 cursor-pointer flex items-center justify-center '>
                    <Link to="/"><img className="w-24" src='/brand.png' /></Link>
                </div>
                <div className="flex-row flex items-center mt-12 md:mt-0 w-full md:px-24">
                    <form className="flex flex-row w-full" onSubmit={handleSubmit}>
                        <input value={city} onChange={e => setcity(e.target.value)} className="bg-white w-full font-display text-blue py-3 text-sky-900 px-12 focus:border-0 active:border-none" placeholder="Get weather-smart! Enter a city and let the forecast rain down." />
                        <button className="bg-white w-12 flex items-center text-blue px-6 justify-end " onClick={handleSubmit} type="submit"><SearchIcon /></button>
                    </form>
                </div>
            </div>
            {
                data ? 
                <div className="flex flex-row py-6 w-full mx-auto text-blue items-center justify-between">
                    <div className="flex flex-col w-3/5 mx-auto py-12 px-12 rounded-3xl bg-white items-center justify-center">
                        <h1 className="text-5xl w-auto font-display">{`${data.location.name}, ${data.location.country}`}</h1>
                        <p className="text-9xl py-6 font-bold font-display">{`${data.current.temp_c} `} <sup className="text-6xl font-display">o</sup><span className="text-7xl font-display">C</span></p>
                        <div className="flex py-2 flex-row items-center justify-center">
                            <AccessAlarmsIcon />
                            <p className="font-display text-2xl pl-2">{`${data.location.localtime}`}</p>
                        </div>
                        
                        <div className="hidden lg:flex flex-col lg:flex-row pt-3 justify-between w-full">
                            <div className="flex w-1/2  rounded-2xl flex-col items-center justify-center">
                                <div className="flex flex-row items-center w-full justify-start pl-24">
                                    <img className="w-12" src="//cdn.weatherapi.com/weather/64x64/day/113.png" />
                                    <p className="font-display text-2xl">{`${data.current.condition.text} `}</p>
                                </div>
                            </div>
                            <div className="flex flex-row w-full lg:w-1/2 items-center justify-center text-blue">
                                <div className="flex w-auto ">
                                    <WaterDropIcon />
                                </div>
                                <p className="w-auto lg:w-full pl-2 text-center lg:text-start font-display text-2xl">Humidity -  {`${data.current.humidity}`}</p>
                            </div>
                        </div>


                        <div className="flex flex-col lg:flex-row justify-between w-full">
                            <div className="flex w-full lg:w-1/2 py-3 lg:py-0 rounded-2xl flex-col items-center justify-center">
                                <div className="flex flex-row items-center w-full justify-center lg:justify-start mx-auto lg:pl-24">
                                    <div className="flex w-auto lg:p-3">
                                        <AirIcon />
                                    </div>
                                    <p className="font-display lg:w-full pl-3 text-2xl">Wind - {`${data.current.wind_kph} `}</p>
                                </div>
                            </div>
                            <div className="flex flex-row w-full lg:w-1/2 items-center justify-center text-blue">
                                <DeviceThermostatIcon  />
                                <p className="w-auto lg:w-full pl-2 text-center lg:text-start font-display text-2xl">Farenheit -  {`${data.current.temp_f}`} <sup className="font-display">o</sup> F</p>
                            </div>
                            
                        </div>

                    </div>

                    


                </div>
                : 
                <div data-aos="fade-down" data-aos-delay="800" className="flex flex-col h-full items-center my-48 justify-center w-full">
                    <p className="py-3 font-display font-bold text-white text-center w-full">Fetching data of Current location </p>
                    <img className="w-12 animate-rotate-loading" src="/loading.png" />
                </div>
            }
            
        </div>
        
    )
}
