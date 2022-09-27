export default function Repeticao1(){
    const listaAprovados = [
        'João',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura'
    ]

    function renderizarLista(){ //key não afeta o código, é só algo interno do react.
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
        // or function(nome, i){
        //    return <li key={i}>{nome}</li>
        //}
    }

    return(
        <ul>
            {renderizarLista()}
        </ul>
    )
}
//key não afeta o código, é só algo interno do react.
//
//    function renderizarLista(){ 
//        const itens = []
//
//        for (let i = 0; i < listaAprovados.length; i++) {
//        itens.push(<li key={i}>{listaAprovados[i]}</li>)
//        }
//
//        return itens
//}