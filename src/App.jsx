import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

import getRandomNum from './utils/getRandomNum'
import LocationInfo from './components/LocationInfo'
import Character from './components/Character'
import Form from './components/Form'
  
export default function App() {

const [ location, setLocation ] = useState([])
const [ idLocation, setIdLocation ] = useState(getRandomNum(126))
const [ hasError, setHasError ] = useState(false)
const [ isLading, setIsLoading ] = useState(true)
useEffect(() => {
  axios
    .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
    .then( resp => {
      setLocation(resp.data) 
      setHasError(false)
    })
    .catch( err => {
      console.error(err) 
      setHasError(true)
    })
}, [idLocation])
  
  return (
    <>
      <Form
      location={ setIdLocation }  
      />
      { 
        hasError
        ?
        ( <h2>Hey you must provide a number from 1 to 126</h2> ) 
        :
        (
          <>
            <LocationInfo
            location={ location }  
            />
            <div className='character-container'>
              { 
                location.residents?.map(resident =>(
                  <Character
                  character={ resident }
                  />
                ))
              }
            </div>     
          </>
        )
      }
      
    </>
  )
}
