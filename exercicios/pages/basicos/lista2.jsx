function gerarLista(){
    const lista = [
        <li>1</li>,<li>2</li>,<li>3</li>,<li>4</li>,<li>5</li>
    ]
    
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

