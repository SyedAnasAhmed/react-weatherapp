import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios'


const Statecontext = createContext()

export const Statecontextprovider = ({ children }) => {
    const [weather, setWether] = useState({})

    const [values, setvalues] = useState([])

    const [place, setPlace] = useState("karachi")

    const [thislocation, setLocation] = useState("")


    const fetchWeather = async () => {
        const options = {
            method: "GET",

            url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
            params: {
                aggregateHours: '24',
                location: place,
                contentType: 'json',
                unitGroup: 'metric',
                shortColumnNames: 0
            },
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            const thisData = Object.values(response.data.location)[0]
            setLocation(thisData.address)
            setvalues(thisData.values)
            setWether(thisData.values[0])

        } catch (e) {
            console.error(e);
            alert("This place does not exist")
        }
        
    }

    useEffect(() => {
        fetchWeather()
    }, [place])

    useEffect(() => {
        console.log(values)
    }, [values])

    return (
        <Statecontext.Provider value={{
            weather,
            setPlace,
            values,
            thislocation,
            place
        }}>
            {children}
        </Statecontext.Provider>
    )
}


export const useStateContext = () => useContext(Statecontext)