import './Colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const Colaborador = ({nome, cargo, imagem, corPrimaria, aoDeletar}) => {

    return (
        <div className='colaborador'>
            <AiFillCloseCircle className="deletar" onClick={event => aoDeletar(event)} />
            <div className='cabecalho' style={{backgroundColor: corPrimaria}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador