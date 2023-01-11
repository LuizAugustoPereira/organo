import './ListaSuspensa.css'

const ListaSuspensa = ({label, times, obrigatorio, valor, setValor}) => {
    
    return (

        <div className='lista-suspensa'>
            <label>{label}</label>
            <select required={obrigatorio} value={valor} onChange={evento => setValor(evento.target.value)}>
                {times.map(time => <option key={time}>{time}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa