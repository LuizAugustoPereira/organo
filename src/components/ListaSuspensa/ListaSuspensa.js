import './ListaSuspensa.css'

const ListaSuspensa = ({label, times, obrigatorio, valor, setValor}) => {
    
    return (

        <div className='lista-suspensa'>
            <label>{label}</label>
            <select required={obrigatorio} value={valor} onChange={event => setValor(event.target.value)}>
                <option value=''></option>
                {times.map(time => <option key={time}>{time}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa