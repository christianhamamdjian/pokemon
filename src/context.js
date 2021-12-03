import React, { useState, useContext, useEffect } from 'react'

export const API_ENDPOINT = `https://pokeapi.co/api/v2/pokemon`

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [pokemons, setPokemons] = useState([])
    const [query, setQuery] = useState('')

    const fetchPokemons = async (url) => {
        setIsLoading(true)
        try {
            const response = await fetch(url)
            const data = await response.json()

            if (data.Response === 'True') {
                setPokemons(data.Search)
                setIsError(false)
            } else {
                setIsError(true)
            }
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPokemons(`${API_ENDPOINT}&s=${query}`)
    }, [query])

    return (
        <AppContext.Provider
            value={{ isLoading, isError, pokemons, query, setQuery }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
