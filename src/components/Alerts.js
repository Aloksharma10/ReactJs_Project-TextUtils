import React from 'react'


function Alerts(props) {
    const captilize = (word) => {
        let newWord = word.charAt(0).toUpperCase() + word.slice(1);
        return newWord;
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong> {captilize(props.alert.type)} </strong>{props.alert.msg}
        </div>
    )
}

export default Alerts