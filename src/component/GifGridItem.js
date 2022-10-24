
function GifGridItem({id,title,url}){

    
return (
    <>
    
    <a href= {url} target = "_blank">
        
        <img 
        src = {url} 
        alt = {title} 
        className = 'inline | rounded-[20px] | mr-[10px] mt-[20px] | h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] | cursor-pointer' />
    
    </a>
     
    
    </>
)
}

export default GifGridItem;