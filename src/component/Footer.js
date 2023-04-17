import { SiLinkedin } from 'react-icons/si';
import { MdOutlineEmail } from 'react-icons/md';


export function Footer(){

return(
<>

<div className=
{`container mx-auto px-8 mt-12 
lg:px-12 xl:mt-20 2xl:mt-32
text-[#1b1b1b]
`}>

    <div className="flex justify-between items-center">

        <a href="mailto:oswaldoe1992@gmail.com"
        className="flex-shrink-0 flex items-center">

            <MdOutlineEmail />
            <span className=
            {`font-normal text-sm ml-1 
            transition duration-300 hover:text-black
            `}>
                Oswaldoe1992@gmail.com
            </span>

        </a>            

                
        <div  className="flex gap-x-1 lg:items-center lg:pr-2 2xl:pr-4 ">
                        
            <a aria-label="github" 
                rel="noopener noreferrer" 
                target="_blank" 
                href="https://github.com/OswaldoDM" 
                className={`relative h-8 w-8 
                flex items-center justify-center 
                before:absolute before:inset-0 before:rounded-full 
                 before:border before:border-gray-200                    
                `}>
                <svg className="relative w-4 transition duration-300 hover:fill-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                            
            </a>

            <a aria-label="linkedin" 
                rel="noopener noreferrer" 
                target="_blank" 
                href="https://www.linkedin.com/in/oswaldo-diaz-milanes-951319146/" 
                className={`relative h-8 w-8 
                flex items-center justify-center 
                before:absolute before:inset-0 before:rounded-full 
                before:border before:border-gray-200                    
                `}>

                <SiLinkedin className=                     
                    {` relative w-4 h-4                      
                    hover:text-black
                    transition duration-300 
                    cursor-pointer rounded-sm
                    `}/>
                            
            </a>                    
                        
        </div>

    </div>
</div>  
    
</>
)
}