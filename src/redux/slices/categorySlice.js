import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const API_URL = import.meta.env.VITE_API_URL;


const initialState = {
    category: [],
    subCategory: []
}

export const fetchCategory = createAsyncThunk('category/fetch', 
    async (_, thunkAPI) => {
        try {
            const res = await fetch(`${API_URL}/api/category/all`)
            const category = await res.json()
            
            if(category.error){
                return thunkAPI.rejectWithValue(category.error)
            }
            return category
        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)

export const fetchSubCategoryId = createAsyncThunk('subCategoryId/fetch', 
    async (_, thunkAPI) => {
        try {
            const res = await fetch(`${API_URL}/api/subcategory/all`)
            const subCategory = await res.json()
            if(subCategory.error){
                return thunkAPI.rejectWithValue(subCategory.error)
            }
            return subCategory

        } catch (error) {
            thunkAPI.rejectWithValue(error)
        }
    }
)

const categorySlice = createSlice({
    name: "Category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategory.fulfilled, (state, action) => {
            state.category = action.payload
        })
        .addCase(fetchSubCategoryId.fulfilled, (state, action) => {
            state.subCategory = action.payload
        })
    }
})

export default categorySlice.reducer