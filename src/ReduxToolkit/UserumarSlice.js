import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "createUser",
  async (data, rejectWithValue) => {
    const response = await fetch(
      "https://66363983415f4e1a5e26b127.mockapi.io/crud/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const readUsers = createAsyncThunk(
  "readUsers",
  async (data, rejectWithValue) => {
    const response = await fetch(
      "https://66363983415f4e1a5e26b127.mockapi.io/crud/crud"
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://66363983415f4e1a5e26b127.mockapi.io/crud/crud/${userId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      return userId;
      // Return the ID of the deleted user
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    console.log("updated data: ", data);
    const response = await fetch(
      `https://66363983415f4e1a5e26b127.mockapi.io/crud/crud/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchQuery: '',
  },

  reducers: {
    searchUser: (state, action) => {
      state.searchQuery = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error when starting a new request
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = [...state.users, action.payload]; // Immutably update users array
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Unknown error occurred";
      })
      .addCase(readUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(readUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(readUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Unknown error occurred";
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const userId = action.payload;
        if (userId) {
          state.users = state.users.filter((ele) => ele.id !== userId);
        }
        console.log("Delete Action", action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset error when starting a new request
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = [action.payload]; // Immutably update users array
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Unknown error occurred";
      });
  },
});


export const {searchUser} = userDetail.actions;
export default userDetail.reducer;
