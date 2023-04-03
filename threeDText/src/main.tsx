import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Leva } from 'leva'
import { Logo } from '@pmndrs/branding'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        pmnd.rs
        <br />
        dev collective
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>😄 —</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>27/10/2022</div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Overlay />
    <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} />
    <Leva collapsed />
  </React.StrictMode>,
)
