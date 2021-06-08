import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navView: false,
  mainNavShow: false,
  chosenItem: null,
  mainNavLinksActive: false,
  searchActive: false
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    closeNav: (state, action) => {
      state.navView = action.payload.close
    },
    showMainNav: (state, actions)=>{
      state.mainNavShow = true
    },
    hideMainNav: (state, action)=>{
      state.mainNavShow = false
    },
    setChosenItem: (state, action)=>{
      state.chosenItem = action.payload.chosenItem
    },
    unSetChosenItem: (state)=>{
      state.chosenItem = null;
    },
    deActivate:(state, action)=>{
      state.mainNavLinksActive = false;
    },
    activate:(state, action)=>{
      state.mainNavLinksActive = true;
    },
    setSearch: (state, action)=>{
      state.searchActive = action.payload.active
    }
  },
});

export const {closeNav, showMainNav, hideMainNav, setChosenItem,unSetChosenItem, deActivate, activate, setSearch } = appSlice.actions;
export const selectNav = (state) => state.app.navView;
export const selectMainNav = (state) => state.app.mainNavShow;
export const selectChosenItem = (state) => state.app.chosenItem;
export const selectMainNavActive = (state) => state.app.mainNavLinksActive;
export const selectSearch = (state) => state.app.searchActive


export default appSlice.reducer;