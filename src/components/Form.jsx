import { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export function Form () {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)

    function submitHandler(e) {
        e.preventDefault()
        
        if (value.trim()) {
            alert.show('Заметка была создана', 'success')
            setValue('')
        } else {
            alert.show('Введдите текст')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control"
                    value={value} 
                    placeholder='Введите название заметки'
                    onChange={e => {setValue(e.target.value)}}
                />
            </div>
        </form>
    )
}