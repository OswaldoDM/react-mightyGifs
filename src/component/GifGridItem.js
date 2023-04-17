
function GifGridItem({id,title,url}){

    
return (
    <>    
    
        <a href= {url} target = "_blank" className="img-container">
            
            <img 
            src = {url} 
            alt = {title}
            loading='lazy'
            className = 
            {`border border-black 
            rounded-[20px] cursor-pointer
            w-[85px] h-[65px] 
            2xl:w-[100px] 
            `}
            
            />
        
        </a>       
     
    
    </>
)
}

export default GifGridItem;