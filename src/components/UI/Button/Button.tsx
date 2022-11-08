import style from './Button.module.css'

type ButtonProps = {
  children: any,
  type: "button" | "submit" | "reset" | undefined
}

export const Button = (props: ButtonProps) => {
  return (
  <button type={props.type} className={`${style.customBtn} ${style.btn}`}>
      {props.children}
    </button>
  )
}
