import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const RMContext = createContext()

const baseUrl = "https://rickandmortyapi.com/api"

export const RMContextProvider = ({children}) => {
    const [characters, setCharacters] = useState([])
    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetchData(`${baseUrl}/character`);
      }, []);
    
      const fetchData = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setCharacters((_characters) => {
          return [..._characters, ...data.results];
        });
        if (data.info && data.info.next) {
          fetchData(data.info.next);
        }
      };



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