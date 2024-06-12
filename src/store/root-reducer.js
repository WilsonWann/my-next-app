import { combineReducers } from "redux"

// import { userReducer } from "./user/user.reducer"
// import { categoriesReducer } from "./categories/categories.reducer"
// import { cartReducer } from "./cart/cart.reducer"
import { menuReducer } from "./menu/menu.reducer"

export const rootReducer = combineReducers({
  // user: userReducer,
  // categories: categoriesReducer,
  // cart: cartReducer,
  menu: menuReducer
})