import { TipoPerfil } from './TipoPerfil';
import { Address } from './Address';

export interface Usuario {
    name: string,
    email: string,
    senha: string,
    foto: string,
    unidade: string,
    tipoPerfil: TipoPerfil,
    lstAddresses: Address[]
}