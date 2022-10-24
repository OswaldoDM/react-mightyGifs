import { useEffect, useState } from "react"
import GifGridItem from "./GifGridItem"


function GifGrid({category}){

    
    const [image, setImage] = useState([])
    useEffect(() => { getGifs() }, [])
    
    

    const getGifs = async() => {
        const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=50&api_key=A0M0tl8SSnoKYMNxRDX4mUg13CdDfwS1`)
        const {data} = await resp.json() 
        console.log(data);
        const gifs = data.map(img =>{

            return {
                id: img.id,
                title: img.title,
                url: img.images.fixed_width_small.url
            }
        
        })
        console.log(gifs);
        setImage(gifs)
        
    }  
    
    

    return (
        <>
        <h3 className = "mt-[30px] text-center text-whiteText text-[22px] font-Comic">{category}</h3>
        
        {image.map( img =>  <GifGridItem {...img} key = {img.id} />  )}
        
        
       
        </>
    )
}

export default GifGrid;


