import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'

setBackgroundVar()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function setBackgroundVar() {
  const colors = [
    '#254441',
    '#231a6e',
    '#43AA8B',
    '#E56B70',
    '#383380',
    '#138f67',
    '#c46bae',
    '#310A31',
    '#4CB944',
    '#B80C09',
    '#885A89',
    '#8B80F9',
    '#B6244F',
  ]
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  const root = document.querySelector(':root')
  //@ts-ignore
  root.style.setProperty('--background', randomColor)
}
