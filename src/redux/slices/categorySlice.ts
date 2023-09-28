import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../../types/menu";
import { apiClient } from "../../api/apiClient";
import { base64ToFile } from "../../utils/files";
import { ICloudinaryFile } from "../../types/auth";

interface CategoryState {
  categories: ICategory[];
  submitting: boolean;
  loading: boolean;
}

const initialState: CategoryState = {
  categories: [],
  submitting: false,
  loading: false,
};

const createCategory = createAsyncThunk(
  "/category/createCategory",
  async ({ name, image, menuId }: { name: string; image: string; menuId: string }) => {
    const fileData = new FormData();
    const categoryFile = base64ToFile(image);

    let fileResponse: ICloudinaryFile | null = null;
    if (categoryFile) {
      fileData.append("file", categoryFile);
      fileResponse = (await apiClient.post<ICloudinaryFile>("/file", fileData)).data;
    }

    const response = await apiClient.post("/category", {
      name,
      menu: menuId,
      image: fileResponse,
    });
    return response.data;
  }
);

const fetchCategories = createAsyncThunk("category/fetchCategories", async (menuId: string) => {
  const response = await apiClient.get(`/category?menu=${menuId}`);
  return response.data;
});

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createCategory.pending, (state) => {
        state.submitting = true;
      })
      .addCase(createCategory.fulfilled, (state, action: PayloadAction<ICategory>) => {
        state.submitting = false;
        state.categories.push(action.payload);
      })
      .addCase(createCategory.rejected, (state) => {
        state.submitting = false;
      })
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<ICategory[]>) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const categoryActions = {
  ...categorySlice.actions,
  createCategory,
  fetchCategories,
};

export default categorySlice;
