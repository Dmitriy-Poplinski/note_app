import { AlertContext } from './../context/alert/alertContext';
import { useContext } from 'react';
import {CSSTransition} from 'react-transition-group'

export function Alert() {
    const {alert, hide} = useContext(AlertContext)

    return  (
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 500,
                exit: 350,
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`} role="alert">
                <div className='alert-info-wrapper'>
                    <strong>Внимание!</strong> 
                    <p>&nbsp;&nbsp;{alert.text}</p>
                </div>
                <button type="button" onClick={hide} className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    )
}