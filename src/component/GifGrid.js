import { useEffect, useState } from "react"
import GifGridItem from "./GifGridItem"


function GifGrid({category}){

    
    const [image, setImage] = useState([])

    useEffect(() => { getGifs() }, [])
    
    

    const getGifs = async() => {
        const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=36&api_key=A0M0tl8SSnoKYMNxRDX4mUg13CdDfwS1`)
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

        <div className="container mx-auto px-8 sm:px-12 mt-10">            

            <div className=
            {`grid grid-cols-4
            sm:grid-cols-6
            md:grid-cols-7
            lg:grid-cols-9
            xl:grid-cols-12 
            gap-x-[10px] gap-y-3 
            xs:gap-x-0
            lg:gap-y-2 lg:gap-x-0
            `}>
            
            {image.map( img =>  <GifGridItem {...img} key = {img.id} />  )}

            </div>  

        </div>
        
       
        </>
    )
}

export default GifGrid;


