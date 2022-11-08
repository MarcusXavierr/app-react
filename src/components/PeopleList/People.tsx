import { Card } from '../UI/Card/Card'
import { Person } from './Person'
import { User } from './User'

type PeopleProps = { users: User[]; onClick: (userId: number) => void }

export const People = (props: PeopleProps) => {
  const jsx = renderPeople(props.users, props.onClick)
  return jsx
}

function renderPeople(users: User[], onclick: (userId: number) => void): JSX.Element {
  if (users.length === 0) {
    return <div></div>
  }
  return (
    <div style={{ marginTop: '1rem' }}>
      <Card>
        {users.map(user => (
          <Person user={user} onClick={onclick}/>
        ))}
      </Card>
    </div>
  )
}
