import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IMenu } from "../../types/menu";
import { apiClient } from "../../api/apiClient";

interface MenuState {
  menus: IMenu[];
  loading: boolean;
  submitting: boolean;
  error: string;
  selectedMenu: string;
}

const initialState: MenuState = {
  menus: [],
  loading: false,
  submitting: false,
  error: "",
  selectedMenu: "",
};

const createMenu = createAsyncThunk(
  "menu/createMenu",
  async ({ menu }: { menu: { name: string; description?: string } }) => {
    const response = await apiClient.post("/menu", menu);
    return response.data;
  }
);

const fetchMenus = createAsyncThunk("menu/fetchMenus", async () => {
  const response = await apiClient.get("/menu");
  return response.data;
});

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    manualMenu: (state, action: PayloadAction<IMenu>) => {
      state.menus.push(action.payload);
    },
    selectMenu: (state, action: PayloadAction<{ menuId: string }>) => {
      state.selectedMenu = action.payload.menuId;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMenu.pending, (state) => {
        state.submitting = true;
      })
      .addCase(createMenu.fulfilled, (state, action: PayloadAction<IMenu>) => {
        state.menus.push(action.payload);
        state.submitting = false;
      })
      .addCase(createMenu.rejected, (state) => {
        state.error = "An error occurred while creating menu";
        state.submitting = false;
      })
      .addCase(fetchMenus.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenus.fulfilled, (state, action: PayloadAction<IMenu[]>) => {
        state.menus = action.payload;
        state.loading = false;
      })
      .addCase(fetchMenus.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const menuActions = {
  ...menuSlice.actions,
  createMenu,
  fetchMenus,
};

export default menuSlice;
