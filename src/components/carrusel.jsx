import python from "../assets/python.png"
import { useEffect, useState } from "react";
const algo=[{url:"https://i.ibb.co/R9mN2Tw/github.png",descripcion:"gitHub"},
{url:"https://i.ibb.co/gt6bWdV/html5.png",descripcion:"HTML5"},
{url:"https://i.ibb.co/Kw6Ssf0/javascript.png",descripcion:"javascript"},
{url:"https://i.ibb.co/847KScn/python.png",descripcion:"python"},
{url:"https://i.ibb.co/XtwCgsH/tailwind.png",descripcion:"Tailwind"},
{url:"https://i.ibb.co/KN4wCGN/css.png",descripcion:"css"},
];
const slide= algo.map(w=>
  
<img  className="" key={w.url} src={w.url} alt={w.descripcion} />  

        

 
)


const Carrusel=()=>{


  /*
  const [pantalla,setPantalla]=useState(window.innerWidth)

  
  useEffect(()=>{  
    const pantalla=()=>{
    setVwiew(window.innerWidth)
  }
    window.addEventListener('resize', pantalla);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('resize', pantalla);
  };



  }) */



    return<> 
      <div className="grid md:grid-cols-6 gap-2 items-center mt-[8em] mb-[8em] max-w-full mx-[7.5%] padre">
           <ul className=""><li className="md:flex">{slide}</li></ul>    
        
      </div>
  

    </>;
}    
    

export default Carrusel