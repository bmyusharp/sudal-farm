import { createSlice } from "@reduxjs/toolkit";

export const nftList = createSlice({
  name: "nftList",
  initialState: [],
  reducers: {
    setNftList(state, action) {
      return action.payload;
    },
  },
});

export const nftDetailOne = createSlice({
  name: "nftDetailOne",
  initialState: [],
  reducers: {
    setNftDetailOne(state, action) {
      return action.payload;
    },
  },
})

export const nftUnsoldOne = createSlice({
  name: "nftUnsoldOne",
  initialState: [],
  reducers: {
    setNftUnsoldOne(state, action) {
      return action.payload;
    },
  },
})

export const { setNftList } = nftList.actions;
export const { setNftDetailOne } = nftDetailOne.actions;
export const { setNftUnsoldOne } = nftUnsoldOne.actions;
