export function Alert({alert}) {
    if (!alert) {
        return null
    }

    return  (
        <div class={`alert alert-${alert.type || 'warning'} alert-dismissible`} role="alert">
            <strong>Внимание!</strong> 
            {alert.text}
            <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}