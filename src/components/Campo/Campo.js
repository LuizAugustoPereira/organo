 import './Campo.css'

const Campo = ({ type, label, placeholder, obrigatorio = false, valor, setValor }) => {

    const handleCampo = e => setValor(e.target.value)

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type}
                onChange={handleCampo}
                value={valor}
                required={obrigatorio}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Campo