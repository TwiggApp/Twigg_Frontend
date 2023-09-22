import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiClient } from "../../api/apiClient";
import { IUser, LoginData, RegisterData } from "../../types/auth";

interface AuthState {
  loading: boolean;
  error: string;
  user: IUser | null;
  token: string;
  profileData: {
    country: string;
    state: string;
    businessPhoneNumber: string;
    logo: string | Blob | null;
    contactEmail: string;
    contactName: string;
    contactNumber: string;
    contactRole: "owner" | "employee" | "manager" | "";
    instagram: string;
    tiktok: string;
    whatsapp: string;
    facebook: string;
    details: string;
  };
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  loading: false,
  error: "",
  user: null,
  token: "",
  profileData: {
    country: "",
    state: "",
    businessPhoneNumber: "",
    logo: null,
    contactEmail: "",
    contactName: "",
    contactRole: "",
    instagram: "",
    tiktok: "",
    whatsapp: "",
    facebook: "",
    contactNumber: "",
    details: "This is a good restaurant",
  },
  isAuthenticated: false,
};

export const createProfile = createAsyncThunk(
  "auth/createProfile",
  async ({ formData }: { formData: object }) => {
    const response = await apiClient.put("/auth/profile", formData);
    return response.data;
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ formData }: { formData: RegisterData }) => {
    const response = await apiClient.post("/auth/signup", formData);
    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ formData }: { formData: LoginData }) => {
    const response = await apiClient.post("/auth/login", formData);
    return response.data;
  }
);

export const verifyToken = createAsyncThunk(
  "auth/verifyToken",
  async ({ token }: { token: string }) => {
    const response = await apiClient.post("/auth/verify", { token });
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateProfileData: (state, action: PayloadAction<object>) => {
      state.profileData = {
        ...state.profileData,
        ...action.payload,
      };
    },
    updateLogoData: (state, action: PayloadAction<string | Blob | null>) => {
      state.profileData!.logo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<{ magicToken: string }>) => {
        state.loading = false;
        state.error = "";
        state.token = action.payload.magicToken;
        localStorage.setItem("magicToken", state.token);
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
        state.error = "failed";
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        loginUser.fulfilled,
        (
          state,
          action: PayloadAction<{
            accessToken: string;
            data: IUser;
          }>
        ) => {
          state.loading = false;
          state.user = action.payload.data;
          state.token = action.payload.accessToken;
          state.isAuthenticated = true;
          localStorage.setItem("authToken", action.payload.accessToken);
        }
      )
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const authActions = {
  ...authSlice.actions,
  registerUser,
  loginUser,
  verifyToken,
  createProfile,
};

export default authSlice;
