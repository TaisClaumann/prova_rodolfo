import CadastroUsuarioComponent from "../Componentes/CadastroUsuario/CadastroUsuarioComponent";

const PaginaCadastro: React.FC = () => {

    return (
        <>
        <nav className="navbar bg-body-tertiary fixed-navbar">
            <div className="container-fluid">
                <CadastroUsuarioComponent />
            </div>
        </nav>
    </>
    );
}

export default PaginaCadastro;

