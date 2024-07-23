import React,{useEffect} from 'react'
import axios from 'axios'
const Button =({title})=>{
   
        
          const handleClick= async ()  =>   {
            try{
                const response = await axios.get('https://type.fit/api/quotes');
                const data =response.data;
                const randomNumber =math.floor(math.random() * data.lenght);
                const randomQuote = data [randomNumber]
            }
            catch(error){`you have error ${error}`}
          }

  

    return (
        <>
        <button onClick ={handleClick}>{title}</button>
        </>
    )
}
export default Button