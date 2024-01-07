const Header=()=>(
<> 
    <nav className=" sticky top-0 z-50 bg-[#EBEBEB]">
        <div className="md:mx-8 max-w-full md:flex md:flex-wrap md:items-center md:justify-between sm:grid sm:grid-col-1 text-center vmodif">
            <a href="#" className="name">Abraham Silva</a>
            
            <ul className="flex flex-cols gap-2 sm:grid, grid-cols-1, justify-center">
                <li><a className="site" href="#home">home</a></li>
                <li><a className="site" href="#sobremi">sobre mi</a></li>
                <li><a className="site" href="mailto:silvamillanabraham@gmail.com">contacto</a></li>
            </ul>
        </div>
    </nav>

</>
)
export default Header