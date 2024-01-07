import { useEffect } from "react"
import svg1 from "../assets/svg1.svg"
import svg2 from "../assets/svg2.svg"
import svg3 from "../assets/svg3.svg"
const Footer=()=>{
    const iconos=[{href:"https://www.linkedin.com/in/abraham-silva-011093203/", url:"https://i.ibb.co/jJm2X9J/linkedin-boton.png", title:"linkedin-boton"},{href:"mailto:silvamillanabraham@gmail.com", url:"https://i.ibb.co/fN9D8LN/correo-boton.png", title:"correo-boton"},{href:"https://github.com/urobukis", url:"https://i.ibb.co/hBgft83/git-boton.png", title:"git-boton"},]


    
    
    

    const arreglo=iconos.map(w=>
       <div key={w.title} ><a href={w.href}><img className="icono" src={w.url} alt={w.title} /></a></div>
       

        
       
    )
    

    
    return(<> 
        <div className="flex flex-nowrap justify-center bg-[#30789E] mt-12">
        {arreglo}
        </div>
        
    </>)
    }

export default Footer