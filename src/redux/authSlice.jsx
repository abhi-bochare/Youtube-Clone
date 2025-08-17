import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, status: "idle" },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export const listenAuth = () => (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        })
      );
    } else {
      dispatch(clearUser());
    }
  });
};

export const logout = () => async (dispatch) => {
  await signOut(auth);
  dispatch(clearUser());
};

export default authSlice.reducer;
