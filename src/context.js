import React, { useState, useContext, useEffect, useCallback } from 'react'

export const API_ENDPOINT = `https://pokeapi.co/api/v2/pokemon/`

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    /* Home context */

    /* PokemonList context */

    /* SinglePokemon context */

    /* Search context */


    return (
        <AppContext.Provider
            value={{}}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
