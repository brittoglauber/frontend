
import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"
import computador from "../assets/computador.png"
import axios from "../api/axios";
import jwt_decode from 'jwt-decode';
import { useState } from 'react'



const Profile = () => {

  const userName = localStorage.getItem("username");
  
  const [mostrarSaldo, setMostrarSaldo] = useState(false);
  const [saldo, setSaldo] = useState(0);


  const token: any = localStorage.getItem('token');
  const decodedToken: any = jwt_decode(token);
  const id = decodedToken.userId ;

  const buscarSaldo = async () => {
    await axios
      .get(`http://${{secrets.HOST_DNS}}:5000/saldo/${id}`)
      .then((response) => {
        setSaldo(response.data); // atualiza o estado do saldo com a resposta da API
        setMostrarSaldo(true); // atualiza o estado de mostrarSaldo para exibir o saldo
      })
      .catch((error) => {
        console.log(error);
      });

  };

  const handleVerSaldoClick = () => {
    if (mostrarSaldo) {
      setMostrarSaldo(false); // esconde o saldo da tela
    } else {
      buscarSaldo(); // busca o saldo da API
    }
  }


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
          <Link to={"/deal"}>
            <h2 className="text-xl ">Transactions</h2>
          </Link>
        </nav>

        <div className="ml-20 h-96 text-8xl mt-10 ">
          Seja Bem vindo<br />
          {userName}

        </div>

        <button className="ml-20 h-96 text-2xl mt-10" onClick={handleVerSaldoClick}>
          {mostrarSaldo ? `R$ ${saldo}` : 'Ver saldo'}
        </button>

      </div>




      <div className="bg-rose-300">
        <div className="flex justify-end">
          <Link to="/" className="flex justify-center rounded-lg mt-20 mr-36  p-3 bg-violet-500 text-white text-xl w-44" >
            Sair
          </Link>
        </div>
        <div className="flex justify-center h-108 mt-5  ">
          <img src={computador} alt="" />
        </div>
      </div>


    </div>



  )
}

export default Profile
