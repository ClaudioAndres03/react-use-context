import React,{useContext} from 'react'
import {ThemeContext} from '../Context/Generalcontext'

const About = () => {
    const {firstName} = useContext(ThemeContext)
    const {lastName} = useContext(ThemeContext)
    return (
        <div>
            <p>{firstName}</p>
            <p>{lastName}</p>
        </div>
    )
}

export default About
