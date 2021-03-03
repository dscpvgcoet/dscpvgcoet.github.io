import React, { useEffect, useState, useContext, createContext } from 'react'

const themeColors = {
    light : {
        background : '#FFFFFF',
        darkText : '#2a2b2b',
        tanText : '#434343',
        darkGrey: '#878787',
        grey: '#ababab',
        lightGrey: '#d3d3d3',
        ultraLightGrey: '#eeeeee',
    },
    dark : {
        background : '#1a1a1a',
        darkText : '#FFFFFF',
        tanText : '#EEEEEE',
        darkGrey: '#878787',
        grey: '#303030',
        lightGrey: '#252525',
        ultraLightGrey: '#232323',
    },
}

const ThemeContext = createContext(undefined)

export const ThemeProvider = ({children}) => {
    
    const [themeName, setThemeName] = useState('dark')

    useEffect(() => {
        setTheme('dark')
    }, [])

    const setTheme = themeName => {

        document.body.style.setProperty("--background",themeColors[themeName].background)
        document.body.style.setProperty("--darkText",themeColors[themeName].darkText)
        document.body.style.setProperty("--tanText",themeColors[themeName].tanText)
        document.body.style.setProperty("--darkGrey",themeColors[themeName].darkGrey)
        document.body.style.setProperty("--grey",themeColors[themeName].grey)
        document.body.style.setProperty("--lightGrey",themeColors[themeName].lightGrey)
        document.body.style.setProperty("--ultraLightGrey",themeColors[themeName].ultraLightGrey)

        setThemeName(themeName)
    }

    return (
        <ThemeContext.Provider value={{theme: themeName, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);