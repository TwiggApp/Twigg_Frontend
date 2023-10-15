import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiClient } from "../../api/apiClient";
import { IBusiness, ICloudinaryFile, IUser, LoginData, RegisterData } from "../../types/auth";
import { base64ToFile } from "../../utils/files";
import toast from "react-hot-toast";

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
  profileComplete: boolean;
}

const initialState: AuthState = {
  loading: false,
  error: "",
  user: null,
  token: "",
  profileComplete: false,
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
    authenticateUser: (state) => {
      state.isAuthenticated = true;
    },
    logout: () => {
      localStorage.clear();
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.error = "";
        toast.success("Check your email to verify your account", {
          position: "top-right",
          duration: 4000,
        });
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
        state.error = "failed";
      })
      .addCase(createProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProfile.fulfilled, (state, action: PayloadAction<{ business: IBusiness }>) => {
        state.loading = false;
        state.profileComplete = true;
        state.isAuthenticated = true;

        state.user!._id = action.payload.business._id;
        state.user!.logo = action.payload.business.logo as ICloudinaryFile;
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
            profileComplete: boolean;
          }>
        ) => {
          state.loading = false;
          state.user = action.payload.data;
          state.token = action.payload.accessToken;
          state.profileComplete = action.payload.data.profileComplete!;
          state.isAuthenticated = action.payload.data.profileComplete!;
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
