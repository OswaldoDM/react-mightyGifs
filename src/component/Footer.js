import logo from './imgs/logo.png'

function Footer(){


    return (
        <>
    <footer className="px-3 py-8 | md:mt-[200px] | bg-fullBlack | text-gray-500" id="contact">

        <div className="flex flex-col">            

            <div className="mt-4 md:mt-0 | flex flex-col md:flex-row">

                <nav className="flex-1 flex flex-col items-center justify-center md:items-end | md:border-r border-gray-600 md:pr-5">
                <img src = {logo} />
                </nav>

                <div className="md:hidden | mt-4 mx-auto | w-11 h-px rounded-full"></div>
               

                <div className="mt-4 md:mt-0 | flex-1 flex items-center justify-center | md:border-r border-gray-600">
                    <a className = '' href="#">

                        <i className ="fa-brands fa-whatsapp | text-[30px] mr-[5px] text-iGreen hover:text-iGreenL"></i>
                        <i className ="fa-brands fa-github | text-[30px] mr-[5px] text-iGreen hover:text-iGreenL"></i>
                        <i className ="fa-brands fa-linkedin | text-[30px] text-iGreen hover:text-iGreenL"></i>
                        
                    </a>
                    
                </div>

                <div className="md:hidden mt-4 mx-auto | w-11 h-px rounded-full "></div>
                

                <div className="mt-7 md:mt-0 md:pl-5 | flex-1 flex flex-col items-center justify-center md:items-start ">
                    <span>
                        © 2022
                    </span>
                    <span className="mt-7 md:mt-1"> 
                        Created by <span className='underline'>Oswaldo Diaz Milanes</span>                          
                    </span>
                </div>

            </div>
        </div>
    </footer>
        </>
                        
    )
}

export default Footer;