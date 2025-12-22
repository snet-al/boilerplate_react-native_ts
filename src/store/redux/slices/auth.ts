import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {User} from '@/types/user'

export type AuthState = {
  user: User | null
  accessToken: string | null
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
}

export type CredentialsPayload = {
  user: User
  accessToken: string
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<CredentialsPayload>) => {
      state.user = action.payload.user
      state.accessToken = action.payload.accessToken
    },
    deleteUser: state => {
      state.user = null
      state.accessToken = null
    },
  },
})

export const {setCredentials, deleteUser} = authSlice.actions
export const authReducer = authSlice.reducer
