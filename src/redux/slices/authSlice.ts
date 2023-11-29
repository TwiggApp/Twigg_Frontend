import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiClient } from "../../api/apiClient";
import {
  IBusiness,
  ICloudinaryFile,
  IUser,
  LoginData,
  ProfileData,
  RegisterData,
} from "../../types/auth";
import { base64ToFile } from "../../utils/files";
import { Country, ICountry } from "country-state-city";

interface AuthState {
  loading: boolean;
  updating: boolean;
  error: string;
  user: IUser | null;
  token: string;
  profileData: ProfileData;
  isAuthenticated: boolean;
  profileComplete: boolean;
}

const initialState: AuthState = {
  loading: false,
  updating: false,
  error: "",
  user: null,
  token: "",
  profileComplete: false,
  profileData: {
    country: {} as ICountry,
    state: "",
    businessPhoneNumber: "",
    logo: null,
    backgroundImage: null,
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
    logout: (state) => {
      localStorage.clear();
      state.isAuthenticated = false;
      state.user = null;
      state.token = "";
      state.loading = false;
      state.profileComplete = false;
      state.profileData = { ...initialState.profileData };
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
          _state,
          action: PayloadAction<{
            accessToken: string;
            data: IUser;
            profileComplete: boolean;
          }>
        ) => {
          localStorage.clear();

          const newState: AuthState = {
            loading: false,
            updating: false,
            user: action.payload.data,
            token: action.payload.accessToken,
            profileComplete: action.payload.data.profileComplete!,
            isAuthenticated: action.payload.data.profileComplete!,
            error: "",
            profileData: {} as ProfileData,
          };

          localStorage.setItem("authToken", action.payload.accessToken);

          return newState;
        }
      )
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfile.fulfilled, (state, action: PayloadAction<ProfileData>) => {
        console.log("\nBUSINESS PROFILE:", action.payload);
        const country: ICountry | undefined = Country.getAllCountries().find(
          (country) => country.name === action.payload.country
        );
        if (country) action.payload.country = country;
        state.profileData = action.payload;
      })
      .addCase(getProfile.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateProfile.pending, (state) => {
        state.updating = true;
      })
      .addCase(updateProfile.fulfilled, (state) => {
        state.updating = false;
      })
      .addCase(updateProfile.rejected, (state) => {
        state.updating = false;
      });
  },
});

export const createProfile = createAsyncThunk(
  "auth/createProfile",
  async ({ formData }: { formData: object }) => {
    const fileData = new FormData();
    const logoFile = base64ToFile((formData as { logo: string }).logo);
    const backgroundImage = base64ToFile((formData as { backgroundImage: string }).backgroundImage);

    const newForm: ProfileData = { ...(formData as ProfileData) };

    if (logoFile) {
      fileData.append("file", logoFile);
      const fileResponse = await apiClient.post<ICloudinaryFile>("/file", fileData);
      newForm.logo = fileResponse.data;
    }

    if (backgroundImage) {
      fileData.append("file", backgroundImage);
      const fileResponse = await apiClient.post<ICloudinaryFile>("/file", fileData);
      newForm.backgroundImage = fileResponse.data;
    }

    newForm.contactRole = newForm.contactRole.toLowerCase();
    newForm.businessPhoneNumber =
      (newForm.country as ICountry).phonecode + newForm.businessPhoneNumber;
    newForm.country = (newForm.country as ICountry).name;

    const response = await apiClient.put("/auth/profile", newForm);
    return response.data;
  }
);

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async ({ formData, businessId }: { formData: object; businessId: string }) => {
    //
    console.log(formData);
    const response = await apiClient.put(`/profile/${businessId}`, formData);
    console.log("PROFILE UPDATED:", response.data);
    return response.data;
  }
);

export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async ({ businessId }: { businessId: string }) => {
    const response = await apiClient.get(`/profile/${businessId}`);
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

export const authActions = {
  ...authSlice.actions,
  registerUser,
  loginUser,
  verifyToken,
  createProfile,
  getProfile,
  updateProfile,
};

export default authSlice;
