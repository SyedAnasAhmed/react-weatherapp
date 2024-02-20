import React, { useEffect, useState } from 'react'
import { WiWindy, WiDayThunderstorm, WiDaySunny, WiCloudy, WiDayFog, WiSnowflakeCold, WiRain, WiStormShowers } from "weather-icons-react";
import useDate from '../assets/utils/useDate'
import "../index.css"


const Weathercard = (
    temperature,
    windspeed,
    humidity,
    place,
    heatIndex,
    iconString,
    condition,
) => {

    const [icon, setIcon] = useState()

    const { time } = useDate()

    useEffect(() => {
        if (iconString) {
            if (iconString.ToLowerCase().includes("cloud")) {

                setIcon(WiCloudy)

            }
            else if (iconString.ToLowerCase().includes("rain")) {

                setIcon(WiRain)

            }
            else if (iconString.ToLowerCase().includes("clear")) {

                setIcon(WiDaySunny)

            }
            else if (iconString.ToLowerCase().includes("thunder")) {

                setIcon(WiDayThunderstorm)

            }
            else if (iconString.ToLowerCase().includes("snow")) {

                setIcon(WiSnowflakeCold)

            }
            else if (iconString.ToLowerCase().includes("wind")) {

                setIcon(WiWindy)

            }
            else if (iconString.ToLowerCase().includes("fog")) {

                setIcon(WiDayFog)

            }
        }
    })




    return (
        <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4'>
            <div className='flex w-full justify-center items-center gap-4 mt-12 mb-4'>
                <img src={icon} alt="weathericon" />

                <p className='font-bold text-5xl flex justify-center items-center'> {temperature }&deg;C</p>
            </div>

            <div className='font-bold text-center text-xl'>

                {place}

            </div>

            <div className=' w-full flex justify-between items-center mt-4'>

                <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
                <p className='flex-1 text-center p-2'>{time}</p>

            </div>

            <div className='w-full flex justify-between items-center mt-4 gap-4'>

                <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>Wind Speed <p className='font-normal'>{windspeed} km/h</p></p>
                <p className='flex-1 text-center p-2 font-bold bg-green-600 shadow rounded-lg'>Humidity <p className='font-normal'>{humidity}gm/m&#179;</p></p>

            </div>

            <div className='w-full flex justify-between items-center p-3 mt-4'>

                <p className='font-semibold text-lg'>Heat Index </p>
                <p className='text-lg'>{heatIndex ? heatIndex : "N/A" } </p>

            </div>

            <hr className='bg-slate-600' />

            <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
                {condition}
            </div>

        </div>
    )
}

export default Weathercard
