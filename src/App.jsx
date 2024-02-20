import './App.css'
import { useState } from 'react';
import { useStateContext } from './Context';
import searchicon from './assets/icons/searchicon.png'
import Bglayout from './components/Bglayout';
import Minicard from './components/Minicard';
import Weathercard from './components/Weathercard';

function App() {

  const [input, setInput] = useState("")

  const { weather, thislocation, values, place, setPlace} = useStateContext
  console.log(weather)

  const submitCity = () => {
    setPlace(input)
    setInput(" ")
  }

  


  return (
    <div className='w-full h-screen text-white px-8'>

      <nav className='w-full p-3 flex justify-between items-center'>

        <h1 className='font-bold tracking-wide text-3xl'>Weather App</h1>

        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>

          <img src={searchicon} alt="Search" className='w-[1.5rem] h-[1.5rem]' />

          <input onKeyUp={(e) => {
            if (e.key === "Enter") {
              // sumbit the form
              submitCity()
            }
          }} type="text" placeholder='Search City' className='focus:outline-none w-full text-[212121] text-lg' onChange={e => setInput(e.target.value)} name="" id="" />

        </div>

      </nav>

      <Bglayout />

      <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
        <Weathercard
          place={thislocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatIndex}
          iconString={weather.condition}
          condition={weather.condition} />
      </main>

      <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
          {
            values?.slice(1,7).map(curr =>{
              
              return(
                <Minicard 
               key={curr.datetime}
               time={curr.datetime}
               temp={curr.temp}
               iconString={curr.condition}
              />
              )
            })
          }
      </div>

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