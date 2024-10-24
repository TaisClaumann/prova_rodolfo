import { useState } from "react";
import { Usuario } from "../../Interfaces/Usuario";
import { CriarUsuario } from "../../Servicos/TataApi";

const CadastroUsuarioComponent = () => {
    const [usuario, setUsuario] = useState<Usuario>({
        name: '',
        email: '',
        senha: '',
        foto: '',
        unidade: '',
        tipoPerfil: { tipo: '', nivelAcesso: '' },
        lstAddresses: [{ street: '', number: '', complement: '', district: '', neighborhood: '', city: '', state: '', country: '', zipCode: '' }] // Endereço inicializado
    });

    const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUsuario({
            ...usuario,
            [name]: value
        });
    };

    const handleTipoPerfilChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUsuario({
            ...usuario,
            tipoPerfil: {
                ...usuario.tipoPerfil,
                [name]: value
            }
        });
    };

    const handleAddressChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const updatedAddresses = usuario.lstAddresses.map((address, i) =>
            i === index ? { ...address, [name]: value } : address
        );
        setUsuario({
            ...usuario,
            lstAddresses: updatedAddresses
        });
    };

    const handleSubmit = async (event: React.MouseEventHandler<HTMLButtonElement> | any) => {
        event.preventDefault();
        try {
            const response = await CriarUsuario(usuario);
            console.log(response);
            if (response.data && response.status === 200) {
                alert('Cadastro realizado com sucesso');
            } else {
                alert('Falha no cadastro');
            }
        } catch (e) {
            console.error('Falha no cadastro: ' + e.message);
        }
    };

    return (
        <div className="login-container">
            <div className="LoginForm">
                <form className="login-form-inline">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        value={usuario.name}
                        onChange={handleLogin}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="E-mail"
                        value={usuario.email}
                        onChange={handleLogin}
                    />
                    <input
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        value={usuario.senha}
                        onChange={handleLogin}
                    />
                    <input
                        type="text"
                        name="unidade"
                        placeholder="Unidade"
                        value={usuario.unidade}
                        onChange={handleLogin}
                    />

                    {/* Campos do TipoPerfil */}
                    <input
                        type="text"
                        name="tipo"
                        placeholder="Tipo de Perfil"
                        value={usuario.tipoPerfil.tipo}
                        onChange={handleTipoPerfilChange}
                    />
                    <input
                        type="text"
                        name="nivelAcesso"
                        placeholder="Nível de Acesso"
                        value={usuario.tipoPerfil.nivelAcesso}
                        onChange={handleTipoPerfilChange}
                    />

                    {/* Campos da lista de endereços */}
                    {usuario.lstAddresses.map((address, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                name="street"
                                placeholder="Rua"
                                value={address.street}
                                onChange={(e) => handleAddressChange(index, e)}
                            />
                            <input
                                type="text"
                                name="number"
                                placeholder="Número"
                                value={address.number}
                                onChange={(e) => handleAddressChange(index, e)}
                            />
                            <input
                                type="text"
                                name="complement"
                                placeholder="Complemento"
                                value={address.complement}
                                onChange={(e) => handleAddressChange(index, e)}
                            />
                            <input
                                type="text"
                                name="district"
                                placeholder="Distrito"
                                value={address.district}
                                onChange={(e) => handleAddressChange(index, e)}
                            />
                            <input
                                type="text"
                                name="neighborhood"
                                placeholder="Bairro"
                                value={address.neighborhood}
                                onChange={(e) => handleAddressChange(index, e)}
                            />
                            <input
                                type="text"
                                name="city"
                                placeholder="Cidade"
                                value={address.city}
                                onChange={(e) => handleAddressChange(index, e)}
                            />
                            <input
                                type="text"
                                name="state"
                                placeholder="Estado"
                                value={address.state}
                                onChange={(e) => handleAddressChange(index, e)}
                            />
                            <input
                                type="text"
                                name="country"
                                placeholder="País"
                                value={address.country}
                                onChange={(e) => handleAddressChange(index, e)}
                            />
                            <input
                                type="text"
                                name="zipCode"
                                placeholder="CEP"
                                value={address.zipCode}
                                onChange={(e) => handleAddressChange(index, e)}
                            />
                        </div>
                    ))}

                    <button className="submit-button" onClick={handleSubmit}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default CadastroUsuarioComponent;
