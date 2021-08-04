import { AlertContext } from './../context/alert/alertContext';
import { useContext } from 'react';

export function Alert() {
    const {alert, hide} = useContext(AlertContext)

    if (!alert.visible) {
        return null
    }

    return  (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`} role="alert">
            <strong>Внимание!</strong> 
            {alert.text}
            <button onClick={hide} type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}