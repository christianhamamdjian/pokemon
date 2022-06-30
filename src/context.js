import React, { useState, useContext, useEffect } from 'react'
export const API_ENDPOINT_1 = `https://pokeapi.co/api/v2/pokemon-species/?limit=0`
export const API_ENDPOINT_2 = `https://pokeapi.co/api/v2/pokemon/`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([])
    const [page, setPage] = useState(0)
    const [pagePokemons, setPagePokemons] = useState([])
    const [loading, setLoading] = useState(false)
    const controller = new AbortController()
    const signal = controller.signal

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const randomizeCount = (count) => {
        const pokemonArray = Array.from({ length: count }, (_, index) => index)
        shuffle(pokemonArray)
        return pokemonArray
    }

    const paginate = (pokemons) => {
        const itemsPerPage = 20
        const numberOfPages = Math.ceil(pokemons.length / itemsPerPage)
        const newPokemons = Array.from({ length: numberOfPages }, (_, index) => {
            const start = index * itemsPerPage
            return pokemons.slice(start, start + itemsPerPage)
        })
        return newPokemons
    }

    const getAllPokemons = async (url) => {
        try {
            setLoading(true)
            const res = await fetch(url, { signal })
            const info = await res.json()
            const count = info.count
            const randomArray = randomizeCount(count)
            const newArray = paginate(randomArray)
            setPokemons(newArray)
            setPagePokemons(newArray[0])
            setLoading(false)
            return () => controller.abort();
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllPokemons(API_ENDPOINT_1)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const nextPage = () => {
        setPage((oldPage) => {
            let nextPage = oldPage + 1
            if (nextPage > pokemons.length - 1) {
                nextPage = 0
            }
            console.log(nextPage)
            return nextPage
        })
    }

    return (
        <AppContext.Provider
            value={{ loading, pokemons, pagePokemons, setPagePokemons, page, nextPage }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
