import logo from './imgs/logo.png'

function NavBar(){

    
    return(
        <>
        
    <nav className="lg:mx-[20px] p-4 | bg-fullBlack | flex flex-wrap items-center justify-between">

        <div className="lg:order-2 | w-auto lg:w-1/5 | lg:text-center | flex items-center">
            <a href="#">

                <img src = {logo} /> 
                
            </a>
        </div>            

        
        <form  action='https://developers.giphy.com/' target='_blank' className='lg:hidden'>

            <button type='submit' className ="py-2 px-6 | text-white text-[12px] lg:text-[16px] font-PTMono font-bold  | rounded-[5px] |  inline-flex items-center btn">GiphyDevelopers</button>
            
        </form>
        

        <div className="hidden | lg:order-3 lg:block | w-full lg:w-2/5 | lg:text-right">
            
            <a className="mt-4 lg:mt-0 mr-10 | block lg:inline-block | text-whiteText text-lg font-PTMono font-bold" href="#">
                Contact
            </a>

            <form  action='https://developers.giphy.com/' target='_blank' className='inline'>

                <button type='submit' className ="py-2 px-6 | text-white text-[12px] lg:text-[16px] font-PTMono font-bold  | rounded-[5px] |  inline-flex items-center | btn">GiphyDevelopers</button>

            </form>       
            
        </div>

        
    </nav>
           
        </>
    )
}

export default NavBar;