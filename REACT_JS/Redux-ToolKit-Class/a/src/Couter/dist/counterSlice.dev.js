"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.incrementByAmount = exports.decrement = exports.increment = exports.counterSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var counterSlice = (0, _toolkit.createSlice)({
  name: 'counter',
  initialState: {
    couter: 0
  },
  reducers: {
    increment: function increment(state) {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.couter += 1;
    },
    decrement: function decrement(state) {
      state.couter -= 1;
    },
    incrementByAmount: function incrementByAmount(state, action) {
      state.couter += action.payload;
    }
  }
}); // Action creators are generated for each case reducer function

exports.counterSlice = counterSlice;
var _counterSlice$actions = counterSlice.actions,
    increment = _counterSlice$actions.increment,
    decrement = _counterSlice$actions.decrement,
    incrementByAmount = _counterSlice$actions.incrementByAmount;
exports.incrementByAmount = incrementByAmount;
exports.decrement = decrement;
exports.increment = increment;
var _default = counterSlice.reducer;
exports["default"] = _default;