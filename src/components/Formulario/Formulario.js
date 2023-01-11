import { useState } from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto.js'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa.js'
import Botao from '../Botao/Botao.js'

const Formulario = ({adicionarColaboradorCadastrado, times}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

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
        setTime('Programação')
    }

    return (

        <section className='formulario'>
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    valor={nome}
                    setValor={valor => setNome(valor)}
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                />
                <CampoTexto
                    valor={cargo}
                    setValor={valor => setCargo(valor)}
                    obrigatorio={true}
                    label='Cargo'
                    placeholder='Digite seu cargo'
                />
                <CampoTexto
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
        </section>
    )
}

export default Formulario