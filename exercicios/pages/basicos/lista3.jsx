function gerarLista(){
    const lista = []
    for(let i = 1; i <= 10; i++){
        lista.push(<li>{i}</li>)
    }
    
    return lista
}

export default function lista(){
    return (
    <div>
        <ul>
            {gerarLista()}
        </ul>
    </div>
    )
}