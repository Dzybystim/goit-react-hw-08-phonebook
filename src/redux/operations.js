import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from 'notiflix'


axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
},
unset() {
    axios.defaults.headers.common.Authorization = "";
}
}


export const register = createAsyncThunk('auth/register', async credentials => {
    try {
    const {data} = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
    } catch(error) {
    Notiflix.Notify.warning('Account already registered');
    console.log(error)
    }
})

export const logIn = createAsyncThunk('auth/login', async credentials => {
    try{
    const {data} = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data
    } catch(error) {
    Notiflix.Notify.warning('Wrong login or password');
    console.log(error)
    }
})

export const logOut = createAsyncThunk('auth/logout', async() => {
    try{
    await axios.post('/users/logout')
    token.unset()
    }catch(error){
    Notiflix.Notify.warning('Impossible logout');
    console.error('Ошибка в operations auth/logout')
    console.log(error)
    }
})

export const fetchCurrentUser = createAsyncThunk('auth/refresh', async(_, thunkAPI) => {
const state = thunkAPI.getState();
const persistToken = state.auth.token;

if(persistToken===null){
    return thunkAPI.rejectWithValue();
}

token.set(persistToken)
try{
    const {data} = await axios.get('/users/current')
    return data
}catch(error){
    console.error('Ошибка в operations auth/refresh')
    console.log(error)
}


})



export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try{
        const response = await axios.get("/contacts");
        return response.data
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message);
    }
    
})

export const addContact = createAsyncThunk('contacts/addContact', async (text, thunkAPI) => {
    try{
        const response = await axios.post("/contacts", {name: text.name, number: text.phone});
        return response.data;
    } catch(error) {
        Notiflix.Notify.warning('Impossible addContact');
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(contactId, thunkAPI) => {
    try{
        const response = await axios.delete(`/contacts/${contactId}`)
        return response.data;
    } catch(error) {
        Notiflix.Notify.warning('Impossible deleteContact');
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const changeContact = createAsyncThunk('contacts/changeContact', async(text, thunkAPI) => {
    try{
       const response = await axios.patch(`/contacts/${text.id}`, {name: text.name, number: text.phone});
       return response.data;
    } catch(error) {
        Notiflix.Notify.warning('Impossible changeContact');
        return thunkAPI.rejectWithValue(error.message);
    }
})
