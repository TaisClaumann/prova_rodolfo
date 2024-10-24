import axios from 'axios';
import { Usuario } from '../Interfaces/Usuario';

const apiClient = axios.create({
    baseURL: 'https://scholarspace-254954748843.southamerica-east1.run.app/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const BuscarTodosUsuarios =()=>{
    return apiClient.get('')
}

export const CriarUsuario = (dadosUsuario: Usuario) =>{
    return apiClient.post('/User', dadosUsuario)
}