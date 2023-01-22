import './Time.css'
import Colaborador from '../Colaborador/Colaborador.js'
import hexToRgba from 'hex-to-rgba'

const Time = ({time, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {
    
    return (

        colaboradores.length > 0 && 
            <section
                className='time'
                style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}
            >
                <input 
                    value={time.cor}
                    onChange={event => mudarCor(event.target.value, time.id)}
                    type="color"
                    className='input-color' />
                <h3 style={{borderBottomColor: time.cor}}>{time.nome}</h3>
                <div className="colaboradores-container">
                    {colaboradores.map((colaborador, indice) => (
                        <Colaborador
                            colaborador={colaborador}
                            key={indice}
                            corDeFundo={time.cor}
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    ))}
                </div>
            </section>
    )
}

export default Time