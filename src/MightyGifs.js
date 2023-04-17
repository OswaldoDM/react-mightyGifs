import { useState } from "react"
import  AddCategory  from "./component/AddCategory";
import { Footer } from "./component/Footer";
import GifGrid from "./component/GifGrid";
import { Header } from "./component/Header";




function MightyGifs(){

    const [categories, setCategories] = useState(['The Simpsons'])


    return (

        <>      
        
        <Header />
        <AddCategory setCategories = {setCategories} />                             
        {categories.map(category => <GifGrid key = {category} category = {category} /> ) }               
        <Footer />                         
               
        </>        
    )
}

export default MightyGifs;

