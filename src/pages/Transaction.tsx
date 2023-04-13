import { useState } from 'react'
import jwt_decode from 'jwt-decode';
import axios from '../api/axios';

const Transaction = () => {

    const [username, setUsername] = useState("")

    const [valor, setValor] = useState(0);

    const token: any = localStorage.getItem('token');
    const decodedToken: any = jwt_decode(token);
    const id = decodedToken.userId ;


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        
        await axios.post(`http://18.231.164.126:5000/deal/${id}`,
            { username, valor },
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        ).then(response => {
            console.log('Transação feita com sucesso!');
            
        })
        .catch(error => {
            console.log(error);
        });
        


        
    }

  return (
    <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-500">
                            Transação
                        </h3>
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-xl font-medium text-gray-700 undefined"
                            >
                                Usuario
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    id="username"
                                    autoComplete="off"
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    required
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-xl font-medium text-gray-700 undefined"
                            >
                                Valor
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="number"
                                    id="valor"
                                    onChange={(e) => setValor(e.target.valueAsNumber)}
                                    value={valor}
                                    required
                                    name="valor"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Transaction