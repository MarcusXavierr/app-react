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
  const colors = ['#258a40', '#231a6e', '#921196', 'pink', '#383380', '#138f67'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  const root = document.querySelector(':root')
  //@ts-ignore
  root.style.setProperty('--background', randomColor)
}
