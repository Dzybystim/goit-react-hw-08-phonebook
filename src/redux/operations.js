import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
//import { fetchingInProgress, fetchingSuccess, fetchingError } from "./contactsSlice"

//axios.defaults.baseURL = "https://6395ed0c90ac47c68077e61f.mockapi.io/goit-react-hw-07-phonebook";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";



//export const fetchContacts = () => async dispatch => {
//    try {
//        dispatch(fetchingInProgress())
//        const response = await axios.get("/contacts");
//        dispatch(fetchingSuccess(response.data))
//    } catch (error) {
//        dispatch(fetchingError(error.message))
//    }
//}

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
    const {data} = await axios.post('/users/signup', credentials);
    return data;
    } catch(error) {
    console.log(credentials)
    console.error('Ошибка в operations auth/register')
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
        const response = await axios.post("/contacts", {name: text.name, phone: text.phone});
        return response.data;
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(contactId, thunkAPI) => {
    try{
        const response = await axios.delete(`/contacts/${contactId}`)
        return response.data;
    } catch(error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})


