import { ChangeEvent, useState } from 'react'
import { User } from '../PeopleList/User'
import { Button } from '../UI/Button/Button'
import { Card } from '../UI/Card/Card'
import { ErrorModal } from '../UI/Modal/Modal'
import { Input } from './Input'

type UserInputProps = {
  onSubmit: (user: User) => void
}

class InputError {
  hasError: boolean
  message?: string

  constructor(hasError: boolean, message?: string) {
    this.hasError = hasError
    this.message = message
  }
}

export const UserInput = (props: UserInputProps) => {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [error, setError] = useState(new InputError(false))

  const saveUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const saveAge = (event: ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value)
  }

  const onSubmitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const user = { name: username, age: age, id: Date.now() }
    const validate = validateUser(user)
    if (validate.isValid) {
      props.onSubmit(user)
      setUsername('')
      setAge('')
      return
    }

    if (validate.message !== undefined) {
      setError(new InputError(true, validate.message))
    }
  }

  const showErrorMessage = () => {
    if (!error.hasError || error.message === undefined) {
      return
    }
    return (
      <ErrorModal
        message={error.message}
        closeModal={isOpen => setError(new InputError(isOpen))}
      />
    )
  }

  return (
    <div>
      {showErrorMessage()}
      <form onSubmit={onSubmitHandler}>
        <Card>
          <Input label="Nome" type="text" value={username} onInput={saveUsername} />
          <Input label="Idade" type="text" value={age} onInput={saveAge} />
          <Button type="submit">Salvar pessoa</Button>
        </Card>
      </form>
    </div>
  )
}

function validateUser(user: User): { isValid: boolean; message?: string } {
  if (! user.name && ! user.age) {
    return {
      isValid: false,
      message: 'Por favor coloque nome e idade validos (valores não-nulos)',
    }
  }
  const parsedAge = parseInt(user.age)
  if (isNaN(parsedAge) || parsedAge < 0) {
    return {
      isValid: false,
      message: 'Por favor coloque uma idade válida (idade maior que 0)',
    }
  }

  return { isValid: true }
}
