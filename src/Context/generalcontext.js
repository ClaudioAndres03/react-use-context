import React, { useState } from 'react'
export const ThemeContext = React.createContext()


const Generalcontext = (props) => {

    const [firstName, setfirstName] = useState('Manuel')
    const [lastName, setlastName] = useState('Perez')
    return (
        <ThemeContext.Provider value={{ firstName, lastName }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default Generalcontext
