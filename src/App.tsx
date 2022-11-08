import {useState} from 'react'
import './App.css'
import {People} from './components/PeopleList/People'
import {User} from './components/PeopleList/User'
import {UserInput} from './components/UserInput/UserInput'
function App() {
  const cachedUsers = getUsers() ?? []
  const [users, setUsers] = useState<User[]>(cachedUsers)

  const saveUserHandler = (user: User) => {
    setUsers(prevUsers  => {
      const users = [user, ...prevUsers]
      localStorage.setItem('users', JSON.stringify(users))
      return users
    })
  }

  const deleteUserHandler = (userId: number) => {
    setUsers(prevUsers => {
      const users = getUsers()
      if (!!users) {
        localStorage.setItem('users', JSON.stringify(users.filter(user => user.id !== userId)))
      }
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


function getUsers(): User[] | undefined {
  const users = localStorage.getItem('users')
  if (!!users) {
    return JSON.parse(users)
  }
}
