import './Time.css'
import Colaborador from '../Colaborador/Colaborador.js'
import hexToRgba from 'hex-to-rgba'

const Time = ({nome, corPrimaria, colaboradores, aoDeletar, mudarCor, id, aoFavoritar}) => {
    
    return (

        colaboradores.length > 0 && 
            <section
                className='time'
                style={{backgroundColor: hexToRgba(corPrimaria, '0.6'), backgroundImage: 'url(/imagens/fundo.png)'}}
            >
                <input 
                    value={corPrimaria}
                    onChange={event => mudarCor(event.target.value, id)}
                    type="color"
                    className='input-color' />
                <h3 style={{borderBottomColor: corPrimaria}}>{nome}</h3>
                <div className="colaboradores-container">
                    {colaboradores.map((colaborador, indice) => (
                        <Colaborador
                            colaborador={colaborador}
                            key={indice}
                            corPrimaria={corPrimaria}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    ))}
                </div>
            </section>
    )
}

export default Time