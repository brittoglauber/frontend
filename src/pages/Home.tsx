import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import computador from "../assets/computador.png"


const Home = () => {

  
  return (

    <div className='grid grid-cols-2 '>
        <div className=" h-screen">
          <nav className="flex ml-20 mt-20">
            <Link to={"/"} className="flex">
              <img src={logo} alt="logo" className="mr-3" />
              <h2 className="text-xl mr-9  font-bold ">FINANCE</h2>
            </Link>
            <Link to={"/"}>
              <h2 className="text-xl mr-4">Features</h2>
            </Link>
            <Link to={"/"}>
              <h2 className="text-xl mr-4">Tools</h2>
            </Link>
            <Link to={"/"}>
              <h2 className="text-xl ">Pricing</h2>
            </Link>
          </nav>

          <div className="ml-20 h-96 text-8xl mt-10 ">
            Seu <br/>
            Dinheiro <br/>
            em boas <br/>
            mãos
          </div>

          <div className="ml-20 text-lg text-gray-500">
            Aceite nosso convite para uma nova era de segurança financeira - abra sua conta agora!
          </div>
          
          
          <Link to={"/registro"} className="flex items-center justify-center ml-20 mt-9 w-36 p-3 bg-violet-500 rounded-lg text-white text-2xl">
            Começar
          </Link>
          
        </div>




        <div className="bg-rose-300">
          <div className="flex justify-end">
            <Link to={"/entrar"} className="flex justify-center rounded-lg mt-20 mr-36  p-3 bg-violet-500 text-white text-xl w-44" >
              Sua conta
            </Link>
          </div>
          <div className="flex justify-center h-108 mt-5  ">
            <img src={computador} alt="" />
          </div>
        </div>
        
        
    </div>
    
  )
}

export default Home