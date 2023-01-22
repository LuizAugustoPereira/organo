import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Colaborador.css'

const Colaborador = ({colaborador, corDeFundo, aoDeletar, aoFavoritar}) => {

    const favoritar = () => aoFavoritar(colaborador.id)

    return (
        <div className='colaborador'>
            <AiFillCloseCircle className="deletar" onClick={() => aoDeletar(colaborador.id)} />
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className="favoritar">
                    {colaborador.favorito               
                        ? <AiFillHeart size={25} onClick={favoritar} style={{color: '#ff0000'}} />
                        : <AiOutlineHeart size={25} onClick={favoritar} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador