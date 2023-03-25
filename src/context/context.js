import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const RMContext = createContext()

const baseUrl = "https://rickandmortyapi.com/api"

export const RMContextProvider = ({children}) => {
    const [characters, setCharacters] = useState([])
    const [locations, setLocations] = useState([])

    useEffect(() =>{
        const getCharacters = async () => {
            const charactersAPI =await axios.get(`${baseUrl}/character`)
            setCharacters(charactersAPI.data.results);
        }
        getCharacters()

    }, [])

    useEffect(() =>{
        const getLocations = async () => {
            const locationsAPI =await axios.get(`${baseUrl}/location`)
            setLocations(locationsAPI.data.results);
        }
        getLocations()

    }, [])
    // en esta linea de debajo te faltaba el punto entre el RMContext y Provider, lo habias puesto junto
    return (
    
        <RMContext.Provider value={{characters, locations}}>
            {children}
        </RMContext.Provider>
    )
}