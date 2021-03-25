import { IUser } from './types'

export function addNewUser(user: IUser) {
  return {
    type: 'ADD_USER',
    payload: { user },
  }
}

export function setAllUsers(users: IUser[]) {
  return {
    type: 'SET_ALL_USERS',
    payload: { users },
  }
}
