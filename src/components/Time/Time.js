import './Time.css'
import Colaborador from '../Colaborador/Colaborador.js'

const Time = ({nome, corPrimaria, corSecundaria, colaboradores, aoDeletar, mudarCor}) => {
    
    return (
        colaboradores.length > 0 && 
            <section
                className='time'
                style={{backgroundColor: corSecundaria}}
            >
                <input 
                    value={corPrimaria}
                    onChange={event => mudarCor(event.target.value, nome)}
                    type="color"
                    className='input-color' />
                <h3 style={{borderBottomColor: corPrimaria}}>{nome}</h3>
                <div className="colaboradores-container">
                    {colaboradores.map(colaborador => (
                        <Colaborador
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            key={colaborador.nome}
                            corPrimaria={corPrimaria}
                            aoDeletar={aoDeletar}
                        />
                    ))}
                </div>
            </section>
    )
}

export default Time