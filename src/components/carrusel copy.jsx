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
  <ul><li><img key={w.url} src={w.url} alt="" /></li></ul>
  
)
const Carrusel=()=>{
    return<> 
      <div className="text-center max-w-full mx-[7.5%]">
        <h2 className="tittleGray mb-5 mt-4 text-5xl mb-8 mt-8">Tecnologias Conocidas</h2>
      </div>
      
    <div  className="grid md:grid-cols-6 gap-2 items-center mt-8 max-w-full mx-[7.5%]">
      
      {slide}
    </div>  
</>;
}    
    

export default Carrusel