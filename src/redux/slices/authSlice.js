import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
    error: null,
    loading: false,
    accessToken: localStorage.getItem("accessToken") || null, 
    refreshToken: localStorage.getItem("refreshToken") || null,
    userInfo: null
};

// Функция для сохранения токенов
const saveTokens = (accessToken, refreshToken) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
};

// Функция для очистки токенов
const clearTokens = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
};

export const authSignUp = createAsyncThunk(
    "auth/signup",
    async ({ email, password, firstName, lastName, phone, country }, thunkAPI) => {
        try {
            const res = await fetch(`${API_URL}/api/auth/sign-up`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, firstName, lastName, phone, country }),
            });

            const data = await res.json();

            if (!res.ok) {
                return thunkAPI.rejectWithValue(data.message || "Ошибка регистрации");
            }

            return data; // Возвращаем { id, isFreelancer }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const authSignIn = createAsyncThunk(
    "auth/signin",
    async ({ email, password }, thunkAPI) => {
        try {
            const res = await fetch(`${API_URL}/api/auth/sign-in`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json(); 

            if (!res.ok) {
                return thunkAPI.rejectWithValue(data.message || "Неверный логин или пароль");
            }

            if (!data.accessToken || !data.refreshToken) {
                return thunkAPI.rejectWithValue("Сервер не вернул токены");
            }

            saveTokens(data.accessToken, data.refreshToken);
            return { 
                accessToken: data.accessToken, 
                refreshToken: data.refreshToken 
            };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const checkAuth = createAsyncThunk(
    "auth/check",
    async (_, thunkAPI) => {
        try {
            const accessToken = localStorage.getItem("accessToken");

            if (!accessToken) {
                return thunkAPI.rejectWithValue("Токен отсутствует");
            }

            const res = await fetch(`${API_URL}/api/auth/check-me`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            });

            const userInfo = await res.json();

            if (!res.ok) {
                clearTokens();
                return thunkAPI.rejectWithValue(userInfo.message || "Ошибка проверки авторизации");
            }

            return userInfo;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const refreshTokens = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        try {
            const refreshToken = localStorage.getItem("refreshToken");

            if (!refreshToken) {
                clearTokens();
                return thunkAPI.rejectWithValue("Refresh token отсутствует");
            }

            const res = await fetch(`${API_URL}/api/auth/refresh-access-token`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ refreshToken }),
            });

            const { accessToken, refreshToken: newRefreshToken } = await res.json();

            if (!res.ok) {
                clearTokens();
                return thunkAPI.rejectWithValue("Не удалось обновить токен");
            }

            saveTokens(accessToken, newRefreshToken);
            return { accessToken, refreshToken: newRefreshToken };
        } catch (error) {
            clearTokens();
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        clearTokens();
        return null;
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            // Регистрация
            .addCase(authSignUp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(authSignUp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(authSignUp.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
            })

            // Вход
            .addCase(authSignIn.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(authSignIn.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(authSignIn.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
            })

            // Проверка авторизации
            .addCase(checkAuth.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(checkAuth.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.accessToken = null;
                state.refreshToken = null;
                state.userInfo = null;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.userInfo = action.payload;
            })

            // Обновление токенов
            .addCase(refreshTokens.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(refreshTokens.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.accessToken = null;
                state.refreshToken = null;
                state.userInfo = null;
            })
            .addCase(refreshTokens.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.accessToken = action.payload.accessToken;
                state.refreshToken = action.payload.refreshToken;
            })

            // Выход
            .addCase(logout.fulfilled, (state) => {
                state.accessToken = null;
                state.refreshToken = null;
                state.userInfo = null;
                state.error = null;
                state.loading = false;
            });
    },
});

export default authSlice.reducer;