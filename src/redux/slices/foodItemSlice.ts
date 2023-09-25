import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IFood } from "../../types/menu";
import { apiClient } from "../../api/apiClient";
import { base64ToFile } from "../../utils/files";
import { ICloudinaryFile } from "../../types/auth";

interface FoodState {
  foods: IFood[];
  submitting: boolean;
  loading: boolean;
}

const initialState: FoodState = {
  foods: [],
  submitting: false,
  loading: false,
};

const createFood = createAsyncThunk(
  "foods/createFood",
  async ({ name, image, price }: { name: string; image: string; price: number }) => {
    const fileData = new FormData();
    const foodFile = base64ToFile(image);

    let fileResponse: ICloudinaryFile | null = null;
    if (foodFile) {
      fileData.append("file", foodFile);
      fileResponse = (await apiClient.post<ICloudinaryFile>("/file", fileData)).data;
    }

    const response = await apiClient.post("/category", {
      name,
      image: fileResponse,
      price,
    });
    return response.data;
  }
);

const fetchFoods = createAsyncThunk("foods/fetchFoods", async ({ itemId }: { itemId: string }) => {
  const response = await apiClient.get(`/item/${itemId}`);
  console.log(response.data);
  return response.data;
});

const foodItemSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createFood.pending, (state) => {
        state.submitting = true;
      })
      .addCase(createFood.fulfilled, (state, action: PayloadAction<IFood>) => {
        state.submitting = false;
        state.foods.push(action.payload);
      })
      .addCase(createFood.rejected, (state) => {
        state.submitting = false;
      })
      .addCase(fetchFoods.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFoods.fulfilled, (state, action: PayloadAction<IFood[]>) => {
        state.loading = false;
        state.foods = action.payload;
      })
      .addCase(fetchFoods.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const foodActions = {
  ...foodItemSlice.actions,
  createFood,
  fetchFoods,
};

export default foodItemSlice;
