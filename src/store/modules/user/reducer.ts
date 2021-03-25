import { Reducer } from 'redux'
import { IUser, IGlobalState } from './types'

const INITIAL_STATE: IGlobalState = {
  users: [],
}

const AllUsers: Reducer<IGlobalState | any> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case 'ADD_USER':
      const { user } = action.payload
      return { ...state, users: [...state.users, user] }

    case 'SET_ALL_USERS':
      const { users } = action.payload
      return { ...state, users: [...state.users, users] }

    default:
      return { ...state }
  }
}

export default AllUsers
