const LocationInfo = ( { location } ) => {
  
  return(
    <div className='location-container'>
      <article className="location-box">
        <h2 className="location-name">{ location?.name }</h2>
        <div className="location-info-box">
        <p className="location-info"> Type: { location?.type }</p>
        <p className="location-info"> Dimension: { location?.dimension }</p>
        <p className="location-info"> Residents: { location.residents?.length }</p>
        </div>
      </article>
    </div>
  )
}
export default LocationInfo