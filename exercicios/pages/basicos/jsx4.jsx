export default function jsx4(){
    const subtitulo = "Estou no JavaScript!"

    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h2>{3 * 3}</h2>
            <h2>{Math.max(13,39)}</h2>
            <h2>{entre(3,1,10)}</h2>
        </div>
    )
}

function entre(valor, min, max){
    if(valor >= min && valor <= max) {
        return "Sim"
    } else {
        return "Não"
    }
}