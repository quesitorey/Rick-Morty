import { useState, useEffect } from 'react'
import axios from 'axios'

import './style/Character.css'

const Character = ({ character }) => {

  const [ resident, setResident ] = useState([])

  useEffect(() => {
    axios
      .get(character)
      .then(resp => {
        console.log(resp.data)
        setResident(resp.data)
      })
      .catch(err => console.error(err))
  }, [])
  
  return(
      <article className='character'>
        
          <header className='character-header'>
            <img className='character-image' src={ resident.image }/>
            <div className='character-status-box'>
             <div className={ `character-circle-status ${ resident?.status }` } ></div>
             <span className='character-status'>{ resident?.status }</span>
            </div>
          </header>
    
          <section className='character-body'>
            <h3 className='character-name'>{ resident?.name }</h3>
            <hr className='character-line'/>
            <ul className='character-list'>
              <li className='character-item'>
                <span className='character-label'>Specie: </span>
                <span className='character-info'>
                { resident?.species }
                </span>
              </li>
              <li className='character-item'>
                <span className='character-label'>Origin: </span>
                <span className='character-info'>
                { resident.origin?.name }
                </span>
              </li>
              <li className='character-item'>
                <span className='character-label'>Episodes: </span>
                <span className='character-info'>
                { resident.episode?.length }
                </span>
              </li>
            </ul>
            
          </section>
      </article>
  )
}
export default Character