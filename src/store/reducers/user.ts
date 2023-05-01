import { createSlice } from "@reduxjs/toolkit";

import { IDNameList, LetterList } from "../../types";

const initialState = {
  idNameList: [] as IDNameList,
  letterList: {} as LetterList,

  selectedLetters: {
    searchBar: "",
    selectedDigits: [] as string[],
    selectedLowerCases: [] as string[],
    selectedUpperCases: [] as string[],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeSelectedLetters: (state, action) => {
      state.selectedLetters = action.payload;
    },
  },
});

export const { changeSelectedLetters } = userSlice.actions;

export default userSlice.reducer;
