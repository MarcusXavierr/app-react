import style from './Person.module.css'
import { User } from './User'

export const Person = (props: { user: User; onClick: (userId: number) => void }) => {
  const onClickHandler = () => {
    props.onClick(props.user.id)
  }
  return (
    <div className={style.box} onClick={onClickHandler}>
      <p>{`${props.user.name} (${props.user.age} anos)`}</p>
    </div>
  )
}
