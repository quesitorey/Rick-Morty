import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import img from '/fondo.png'
import getRandomNum from './utils/getRandomNum'
import LocationInfo from './components/LocationInfo'
import Character from './components/Character'
import Form from './components/Form'
import Loader from './components/Loader'
import Error from './components/Error'

export default function App() {

const [ location, setLocation ] = useState([])
const [ idLocation, setIdLocation ] = useState(getRandomNum(126))
const [ hasError, setHasError ] = useState(false)
const [ isLoading, setIsLoading ] = useState(true)
  
useEffect(() => {
    setIsLoading(true)
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
    .finally(() => setIsLoading(false))
}, [idLocation])
  
  return (
    <>
      { 
        isLoading
        ? (<Loader/>)
        : (
            hasError
            ?
            ( <Error/> ) 
            :
            (
              <>
                <img className='img' src="fondo.png"/>
                <Form
                 location={ setIdLocation }  
                 />
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
          
        )
      }
      
    </>
  )
}
