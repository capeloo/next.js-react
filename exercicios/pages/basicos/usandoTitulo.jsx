import Título from "../../components/Título"

export default function usandoTitulo(){
    return (
        <div>
            <Título 
            principal="Página de Cadastro"
            secundario="Incluir, alterar e excluir dados!"
             />
            <Título 
            principal="Página de Login"
            secundario="Informe seu email e senha"
            pequeno //ou pequeno={true}
            />
        </div>
    )
}