import { useState } from "react"
import PropTypes from 'prop-types'


function AddCategory ({setCategories}){

const [inputValue, setInputValue] = useState('')

const handleChange =  (e) => setInputValue(e.target.value)

const handleSubmit = (e) => {
    e.preventDefault()
    
    if(inputValue.trim().length > 2) { 

        setCategories( [ inputValue ] )
        setInputValue('') 
    }

    
}

return(

    <>
    <form onSubmit = {handleSubmit} 
    className = "bg-[#313131] | rounded-[4px] | flex items-center | border-solid border-[#464646] border-[7px]">

    <button 
    className ="py-2 px-6 | text-white text-[12px] lg:text-[16px] font-PTMono font-bold  | rounded-l | border-none | inline-flex items-center | btn">SearchGifs</button>

        <input 
            type = 'text'
            value = {inputValue}
            onChange = {handleChange}
            placeholder = 'Ex: The Simpsons'
            className = "bg-transparent | py-1 px-4 | w-full | text-[#d8d7d7] text-[12px] lg:text-[15px] | focus:outline-none | placeholder-[#d8d7d7] | font-Roboto"
            
        />
        
    </form>
    <h5 className="text-[#828282] text-[11px] italic font-normal leading-6 mt-1 ml-5">*Click a gif to see it on full size.</h5>    
    </>
)
}

AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired
}

export default AddCategory;


