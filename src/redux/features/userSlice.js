import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const initialState = {
    name: '',
    email: '',
    profileImage: '',
    isLoading: true,
    isSuccess: false,
    isError: false,
    error: ''
}

export const createUser = createAsyncThunk(
    'userSlice/createUser',
    async ({ email, password }) => {
        const data = await createUserWithEmailAndPassword(auth, email, password)
        return { name: data.user.displayName, email: data.user.email, profileImage: data.user.photoURL };
    })

export const loginUser = createAsyncThunk(
    'userSlice/loginUser',
    async ({ email, password }) => {
        const data = await signInWithEmailAndPassword(auth, email, password)
        return { name: data.user.displayName, email: data.user.email, profileImage: data.user.photoURL }
    }
)
export const googleLogin = createAsyncThunk(
    'userSlice/googleLogin',
    async () => {
        const googleProvider = new GoogleAuthProvider()
        const data = await signInWithPopup(auth, googleProvider)
        return { name: data.user.displayName, email: data.user.email, profileImage: data.user.photoURL }
    }

)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.name = payload.name;
            state.email = payload.email;
            state.profileImage = payload.profileImage
        },

        toggleLoading: (state, { payload }) => {
            state.isLoading = payload
        },

        logout: (state) => {
            state.name = '';
            state.email = '';
            state.profileImage = ''
        }
    },

    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.profileImage = '';
            state.name = '';
            state.email = '';
            state.error = ''
        }).addCase(createUser.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.name = payload.name;
            state.email = payload.email;
            state.profileImage = payload.profileImage;
            state.error = ''
        }).addCase(createUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.name = '';
            state.email = '';
            state.profileImage = '';
            state.error = action.error.message
        }).addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
            state.name = '';
            state.email = '';
            state.profileImage = '';
            state.error = ''
        })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.name = payload.name;
                state.email = payload.email;
                state.profileImage = payload.profileImage;
                state.error = ''
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.name = '';
                state.email = '';
                state.profileImage = '';
                state.error = action.error.message
            }).addCase(googleLogin.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.isSuccess = false;
                state.name = '';
                state.email = '';
                state.profileImage = '';
                state.error = ''
            }).addCase(googleLogin.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.name = payload.name;
                state.email = payload.email;
                state.profileImage = payload.profileImage;
                state.error = ''
            }).addCase(googleLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.name = '';
                state.email = '';
                state.profileImage = '';
                state.error = action.error.message
            })
    }
})
export const { setUser, toggleLoading, logout } = usersSlice.actions

export const usersReducer = usersSlice.reducer;