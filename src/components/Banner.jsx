import Foto from "../assets/foto.png"
const banner=()=>{


    return<>

    <div className="dualcol-test  grid md:grid-cols-2 text-center md:text-6xl  place-items-center max-w-full">

        <div className="">

                <h1 className="titulo md:ml-5 md:text-[2em] ml-2 text-6xl text-[#404040]  ">Hola Soy <br /><span className="sobreAzul">Abraham</span></h1>
        {/* <p >Hola soy <br />Abraham</p>*/}
        </div>
        <div className="justify-items-end">
        <img className="foto"src={Foto} alt="" />
        </div>

       

    </div>

</>
}


    export default banner