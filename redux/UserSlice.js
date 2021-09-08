import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        accountId: null,
        roleId: null,
        user: null
    },
    reducers: {
        addToken: (state, action) => {
            state.token = action.payload;
            return state;
        },
        addAccountId: (state, action) => {
            state.accountId = action.payload;
            return state;
        },
        addUser: (state, action) => {
            state.user = action.payload;
            return state;
        },
        addRole: (state, action) => {
            state.roleId = action.payload;
            return state;
        },
        addRoomNumber: (state, action) => {
            state.roomNumber = action.payload;
            return state;
        },
        clearState: () => {
            return {}
        }
    }
})

export const { addToken, addAccountId, clearState, addUser, addRole, addRoomNumber } = userSlice.actions
export default userSlice.reducer