import style from './Card.module.css'

type CardProps = {
  children: any
}

export const Card = (props: CardProps) => {
  return (
    <div className={style.card}>
      {props.children}
    </div>
  )
}
