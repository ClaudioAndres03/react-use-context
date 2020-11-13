import React, { useState } from 'react'

export const themeContext = React.createContext
const [firstName, setfirstName] = useState("Manuel")
const [lastName, setlastName] = useState("Perez")

const generalcontext = () => {
    return (
        <div>

        </div>
    )
}

export default generalcontext
