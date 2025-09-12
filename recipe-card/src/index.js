//Core React Library 
import React from 'react'

// React DOM is for browser based project 
import ReactDOM from 'react-dom/client'

//import our App Component so we can render it 
import App from './App'

import './global.css'
// grab a element by ID to assign as the root entry for our react project
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
<React.StrictMode>
    <App /> 
</React.StrictMode>
)