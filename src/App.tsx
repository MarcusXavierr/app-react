import {useState} from 'react'
import './App.css'
import {People} from './components/PeopleList/People'
import {User} from './components/PeopleList/User'
import {UserInput} from './components/UserInput/UserInput'
function App() {
  const [users, setUsers] = useState<User[]>([])

  const saveUserHandler = (user: User) => {
    setUsers(prevUsers  => {
      return [user, ...prevUsers]
    })
  }

  const deleteUserHandler = (userId: number) => {
    setUsers(prevUsers => {
      return prevUsers.filter(user => user.id !== userId)
    })
  }

  return (
    <div>
      <h2 style={{color: 'white'}}>Adicione um usuário aí</h2>
      <UserInput onSubmit={saveUserHandler}/>
      <People users={users} onClick={deleteUserHandler}/>
    </div>
  )
}

export default App
