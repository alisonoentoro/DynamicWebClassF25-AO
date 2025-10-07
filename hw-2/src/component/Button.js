import React from 'react'
import cx from 'classnames'


const Button = (props) => {
    const {primary, secondary, tertiary, children, onClick, ...rest} = props

    const classes = cx(
        'flex items-center px-8 py-3 border rounded-lg',
        {
            'bg-indigo-950 text-white': primary,
            'bg-indigo-600 text-white' : secondary,
            'bg-indigo-200 text-black': tertiary
        }
    )
    return (
    <button {...rest} className={classes} onClick={onClick}>
        {children}
    </button>
    )
}

export default Button