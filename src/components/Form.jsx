import getRandomNum from '../utils/getRandomNum'

const Form = ({ location }) => {

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue=e.target.inputId.value.trim()

    if(inputValue === '' || inputValue === 0){
      location(getRandomNum(126))
    }else{
      location(e.target.inputId.value.trim())
    }
    e.target.inputId.value = ''
    
  }
  
  return(
    <form onSubmit={ handleSubmit }>
      <input id='inputId' type='text'/>
      <button type='submit'>Search</button>
    </form>
  )
}
export default Form