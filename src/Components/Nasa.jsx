import React, { useEffect }  from "react";
import '../Sass/Styles.scss'
const Nasa = () => {

/* Consulta de a API - NASA */
/* Con el metodo Asyc/Await */

    const getData = async () => {
    
        const date = document.getElementById("date").value
        const key = '2xkAJCOPSgCBfdQ83TJVNENDyxHoDsNieAggzbKY'
        const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`
    
        
        const respode = await fetch(url) 
        const datos = await respode.json()
        console.log(datos)
        return update(datos)
    }
    /* getData() */
    const update = (datos)=>{
        
            document.getElementById("pic_date").innerHTML = datos.date;
            document.getElementById("title").innerHTML = datos.title;
            document.getElementById("apod_pic").src = datos.url;
            document.getElementById("caption").innerHTML = datos.explanation;
            return datos;
        }
    
        useEffect(() =>{
            getData();
        })

    return(
        <>
            <div>
            <h2>Astronomy Picture of the day</h2>
                <div id="serch">
                    <input type="date" id="date" />
                    <button onClick={getData}>Serch</button>        
                </div>
                
            <h3 className="text img-title" id="title" />  
            <div>
                <img src alt id="apod_pic" className="img-apod" />
            </div>          
          
            <br/>
            <em className="text" id="pic_date" />
            <p className="text caption" id="caption" />
            </div>

        </>
    )
}
export default Nasa