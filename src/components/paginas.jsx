
const Paginas=()=>{
    const paginas=[{href:"https://c11-10-m-node-js-react.vercel.app", url:"https://i.ibb.co/PWPzJ7q/liqui.jpg", title:"liqui"},{href:"https://app-clima-qe3l.vercel.app",url:"https://i.ibb.co/gg2Vzrh/appclima.jpg", title:"app-clima"},{href:"https://abrahamsilva.vercel.app",url:"https://i.ibb.co/FKDw07t/asdesing.jpg", title:"asdesing"},]


    const pag=paginas.map(w=>
        <ul key={w.title} className="">
            <li >
                <a className="max-w-full wmodif" href={w.href}>
                    <img className=" md:h-[20em] wmodif" src={w.url} alt={w.title} />
                </a>
            </li>
        </ul>
        
    )
    return<>
        <div className="text-center max-w-full mx-[7.5%]">
            <h2 className="tittleGray mb-5 mt-4 text-5xl mb-15 mt-20">Proyectos Previos</h2>
            <div  className="grid md:grid-cols-3 gap-2 items-center mt-12 mb-[6em] sm:justify-center items-center">
                {pag}
            </div>
        </div>

 
    </>
}

export default Paginas