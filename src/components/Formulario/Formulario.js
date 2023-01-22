import { useState } from 'react'
import './Formulario.css'
import Campo from '../Campo/Campo.js'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa.js'
import Botao from '../Botao/Botao.js'

const Formulario = ({adicionarColaboradorCadastrado, times, cadastrarTime}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        adicionarColaboradorCadastrado ({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (

        <section className='formulario-container'>
            <form className='formulario' onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    valor={nome}
                    setValor={valor => setNome(valor)}
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                />
                <Campo
                    valor={cargo}
                    setValor={valor => setCargo(valor)}
                    obrigatorio={true}
                    label='Cargo'
                    placeholder='Digite seu cargo'
                />
                <Campo
                    valor={imagem}
                    setValor={valor => setImagem(valor)}
                    label='Imagem'
                    placeholder='Informe o endereço da imagem'
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    times={times}
                    label='Time'
                    valor={time}
                    setValor={valor => setTime(valor)} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form className='formulario' onSubmit={event => {
                event.preventDefault()
                cadastrarTime({nome: nomeTime, corPrimaria: corTime})}
            }>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    valor={nomeTime}
                    setValor={valor => setNomeTime(valor)}
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite o nome do time'
                />
                <Campo
                    type='color'
                    valor={corTime}
                    setValor={valor => setCorTime(valor)}
                    obrigatorio={true}
                    label='Cor'
                    placeholder='Digite a cor do time'
                />
                <Botao>
                    Criar um novo time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario