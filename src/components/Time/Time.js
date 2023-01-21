import './Time.css'
import Colaborador from '../Colaborador/Colaborador.js'
import hexToRgba from 'hex-to-rgba'

const Time = ({nome, corPrimaria, colaboradores, aoDeletar, mudarCor, id}) => {
    
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
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            key={indice}
                            id={colaborador.id}
                            corPrimaria={corPrimaria}
                            aoDeletar={aoDeletar}
                        />
                    ))}
                </div>
            </section>
    )
}

export default Time