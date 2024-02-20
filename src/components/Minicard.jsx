import React, { useEffect, useState } from 'react'
import { WiWindy, WiDayThunderstorm, WiDaySunny, WiCloudy, WiDayFog, WiSnowflakeCold, WiRain, WiStormShowers } from "weather-icons-react";

const Minicard = ( time , temp , iconString) => {


    const [icon, setIcon] = useState()

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

    }, [iconString])

  return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>

    <p className='text-center'>
        {new Date(time).toLocaleDateString('en',{weekday: 'long'}).split(" ")[0]}
    </p>
        
    <hr />

    <div className='w-full flex justify-center items-center flex-1'>
            <img src={icon} alt="Forecast not available" className='w-[4rem] h-[4rem]' />
    </div>

    <p className='text-center font-bold'>{temp}&deg;C</p>
  
  
    </div>
    
  )
}

export default Minicard
