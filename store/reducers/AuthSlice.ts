import { IUser } from "@/models/IUser";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface UserState {
  user: IUser;
  isUserLoggedIn: boolean;
}

const initialState: UserState = {
  user: {} as IUser,
  isUserLoggedIn: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    }
  },
})