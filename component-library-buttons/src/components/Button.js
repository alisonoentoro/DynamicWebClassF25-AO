import React from 'react'
import cx from 'classnames'
// props ={
//     children: "this is going to be a string"
// }

const Button = (props) => {
    // destructoring out props object 
    const {children, primary, secondary, success, warning, danger} = props

  // in line above, you can do props.children with less typing. 
  // const children = props.children

    const  classes = cx('flex items-center px-8 py-3 border', {
        'bg-blue-700 border-blue-500 text-white': primary,
        'bg-gray-900 border-gray-500 text-white': secondary,
        'bg-green-500 border-green-500 text-white': success,
        'bg-yellow-400 border-yellow-500 text-white': warning,
        'bg-red-600 border-red-500 text-white': danger
    })
    return <button className={classes}>{children}</button>
}
export default Button;
