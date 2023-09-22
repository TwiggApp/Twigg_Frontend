import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiClient } from "../../api/apiClient";
import { ICloudinaryFile, IUser, LoginData, RegisterData } from "../../types/auth";
import { base64ToFile } from "../../utils/files";

type Role = "owner" | "employee" | "manager" | string;

interface ProfileData {
  country: string;
  state: string;
  businessPhoneNumber: string;
  logo: string | Blob | ICloudinaryFile | null;
  contactEmail: string;
  contactName: string;
  contactNumber: string;
  contactRole: Role;
  instagram: string;
  tiktok: string;
  whatsapp: string;
  facebook: string;
  details: string;
}

interface AuthState {
  loading: boolean;
  error: string;
  user: IUser | null;
  token: string;
  profileData: ProfileData;
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
    const fileData = new FormData();
    const logoFile = base64ToFile((formData as { logo: string }).logo);
    const newForm: ProfileData = { ...(formData as ProfileData) };

    if (logoFile) {
      fileData.append("file", logoFile);
      const fileResponse = await apiClient.post<ICloudinaryFile>("/file", fileData);
      newForm.logo = fileResponse.data;
    }

    newForm.contactRole = newForm.contactRole.toLowerCase();

    const response = await apiClient.put("/auth/profile", newForm);
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
      .addCase(createProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProfile.fulfilled, (state) => {
        state.loading = false;
        const magicToken = localStorage.getItem("magicToken");

        // Remove the magic token key and replace with authToken
        if (magicToken) {
          localStorage.removeItem("magicToken");
          localStorage.setItem("authToken", magicToken);
        }
      })
      .addCase(createProfile.rejected, (state) => {
        state.loading = false;
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
