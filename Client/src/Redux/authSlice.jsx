import { createSlice, creatAsyncThunk } from "@redux.js/toolkit";

// get user from our local storaf=ge
const user = JSON.parse(localStorage.getItem("user"));
