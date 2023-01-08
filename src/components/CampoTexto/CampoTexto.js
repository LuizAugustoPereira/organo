 import './CampoTexto.css'

const CampoTexto = ({label, placeholder, obrigatorio, valor, setValor}) => {

    const handleCampo = e => {
        setValor(e.target.value)
    }

    return (
        <div className='campo-texto'>
            <label>{label}</label>
            <input onChange={handleCampo} value={valor} required={obrigatorio} type="text" placeholder={placeholder} />
        </div>
    )
}

export default CampoTexto