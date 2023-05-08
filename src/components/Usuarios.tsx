import axios from 'axios'
import React, { useEffect, useState } from 'react'
import IUser from '../types/IUser'

interface usuariosProps {
  usuario: IUser
}

const Usuarios = ({ usuario }: usuariosProps) => { 
  
  const [usuarios, setUsuarios] = useState<IUser[]>([])
  useEffect(() => {
      axios.get(`http://${{secrets.HOST_DNS}}:5000/users/${usuario.id}/`)
      .then(resposta => {
        setUsuarios(resposta.data)
      })
  }, [usuario.id])
  
      

  return (
    <div>
      <h2>{usuario.name}</h2>
    </div>
  )
}

export default Usuarios
