import style from './Input.module.css'
import { ChangeEvent } from 'react'

interface InputProps {
  label: string
  type: string
  value: string | number
  onInput: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
  return (
    <div className={style.formControl}>
      <label htmlFor="">{props.label}</label>
      <input type={props.type} value={props.value} onChange={props.onInput} />
    </div>
  )
}
