// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// export const fetchCategories = createAsyncThunk(
//     "productsSlice/fetchCategories",
//     async (__,thunkAPI) => {
//         const { rejectWithValue } = thunkAPI;
//          try {
//              const res = await fetch(`http://localhost:306/categorys`);
//              const data = await res.json();
//              return data
//          } catch (error) {
//             return rejectWithValue(error.message)
//          }
//     }
// )
// const productsSlice = createSlice({
//     name: "productsSlice",
//     initialState: { products: [], categories: [],status: "status" ,error: "error"},
//     reducers: {

//     },

// })

// export default productsSlice.reducer;