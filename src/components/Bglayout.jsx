import React  from 'react'
import  {useEffect, useState}  from 'react'
import { useStateContext } from '../Context'
// import { WiWindy, WiDayThunderstorm, WiDaySunny, WiDayRain, WiCloudy, WiDayFog, WiSnowflakeCold, WiRain, WiStormShowers } from "weather-icons-react";

// import { Clear , Cloudy, fog, Rainy, snow, Stormy, Sunny } from '../assets/images'

import Clear from '../assets/images/Clear.jpg'
import Cloudy from '../assets/images/Cloudy.jpg'
import fog from '../assets/images/fog.png'
import Rainy from '../assets/images/Rainy.jpg'
import snow from '../assets/images/snow.jpg'
import Stormy from '../assets/images/Stormy.jpg'
import Sunny from '../assets/images/Sunny.jpg'




const Bglayout = () => {

    const { weather } = useStateContext()

    const [image, setimage] = useState(Clear)

    useEffect(() => {
        if(weather.conditions){
            let imagestring = weather.conditions

            if(imagestring.toLowerCase().includes("clear")){
              
                setimage(Clear)
            
            }else if(imagestring.toLowerCase().includes("cloud")){
            
                setimage(Cloudy)
            
            }else if(imagestring.toLowerCase().includes("rain") || imagestring.toLowerCase().includes("shower")){
            
                setimage(Rainy)
            
            }else if(imagestring.toLowerCase().includes("snow")){
            
                setimage(snow)
            
            }else if(imagestring.toLowerCase().includes("fog")){
            
                setimage(fog)
            
            }else if(imagestring.toLowerCase().includes("thunder") || imagestring.toLowerCase().includes("storm")){
            
                setimage(Stormy)
        
            }
            else if(imagestring.toLowerCase().includes("sunny")){
            
                setimage(Sunny)
        
            }
    
    
        }
  
    },[weather])
   
  return (

    <img src={image} alt="" className='h-screen w-full fixed left-0 top-0 -z-[10]' />

    )

}

export default Bglayout




// }else if(imagestring.toLowerCase().includes("clear")){
            
            //     setimage(WiCloudy)
            
            // }else if(imagestring.toLowerCase().includes("clear")){
            
            //     setimage(WiCloudy)
            
            // }