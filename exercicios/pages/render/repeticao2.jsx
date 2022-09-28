import listaProdutos from "../../data/listaProdutos"
import styles from "../css/repeticao2.module.css"

export default function repeticao2(){

    function renderizarLinhas(){
        return listaProdutos.map(produto => {
            return (
                <tr key={produto.id}>
                    <td className={styles.data}>{produto.id}</td>
                    <td className={styles.data}>{produto.nome}</td>
                    <td className={styles.data}>{produto.valor}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <table id={styles.repeticao2}>
                <thead>
                    <tr>
                        <th className={styles.data}>Código</th>
                        <th className={styles.data}>Nome</th>
                        <th className={styles.data}>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </div>
    )
}