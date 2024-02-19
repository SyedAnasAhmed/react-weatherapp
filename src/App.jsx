import './App.css'
import { useState } from 'react';
import { useStateContext } from './Context';
// import Bglayout from './components/Bglayout '

// import { Bglayout } from "C:/Users/HT/OneDrive/Desktop/react-weatherapp/weatherapp/components/Bglayout";

import searchicon from './assets/icons/searchicon.png'
import Bglayout from './components/Bglayout';

function App() {
  
  const [input, setInput ] = useState("")

  // const { weather } = useStateContext
  // console.log(weather)


  return (
    <div className='w-full h-screen text-white px-8'>
    
      <nav className='w-full p-3 flex justify-between items-center'>
    
        <h1 className='font-bold tracking-wide text-3xl'>Weather App</h1>

        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
    
          <img src={searchicon} alt="Search" className='w-[1.5rem] h-[1.5rem]' />
    
          <input onKeyUp={(e)=> {
            if(e.key === "Enter"){
              // sumbit the form
            }
          }} type="text" className='focus:outline-none w-full text-[212121] text-lg' onChange={e => setInput(e.target.value)} name="" id="" />

        </div>
      
      </nav>

     <Bglayout/>
          
    </div>
  
  )

}

export default App




{/* class Weather extends React.Component {
    render() {
        return <WiDaySunny size={24} color='#000' />
    }
}
Icons */}