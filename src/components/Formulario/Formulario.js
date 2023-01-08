import { useState } from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto.js'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa.js'
import Botao from '../Botao/Botao.js'

const Formulario = () => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const handleSubmit = e => {
        e.preventDefault()
        console.log('Form foi submetido =>>> nome:' + nome, 'cargo:' + cargo, 'imagem:' + imagem, 'select:' + time)

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
                    itens={times}
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