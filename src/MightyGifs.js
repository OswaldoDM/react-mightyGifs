import { useState } from "react"
import  AddCategory  from "./component/AddCategory";
import Footer from "./component/Footer";
import GifGrid from "./component/GifGrid";
import NavBar from "./component/NavBar";



function MightyGifs(){

    const [categories, setCategories] = useState(['The Simpsons'])


    return (

        <>
        <NavBar />
        <div className = "my-[20px] mx-[50px]">
            <AddCategory setCategories = {setCategories}/>                     
            <div className="text-center">{categories.map(category => <GifGrid key = {category} category = {category} /> ) }</div>                
        </div>
        <Footer />                     
               
        </>        
    )
}

export default MightyGifs;

