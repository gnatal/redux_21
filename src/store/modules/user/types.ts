export interface IUser {
  id?: string
  name: string
  email: string
  age: string
}

export interface IGlobalState {
  users: IUser[]
}
