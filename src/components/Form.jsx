import { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from './../context/firebase/firebaseContext';

export function Form () {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    function submitHandler(e) {
        e.preventDefault()
        
        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show('Заметка была создана', 'success')
            }).catch(() => {
                alert.show('Что то пошло не так', 'danger')
            })
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