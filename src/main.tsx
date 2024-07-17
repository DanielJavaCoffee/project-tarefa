import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './views/Header/Header'
import Body from './views/Body/Body'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>,
)
