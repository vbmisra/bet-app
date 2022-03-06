// import defined actions from actions.js
import {
  BET_MONEY,
  ADD_TO_BALANCE,
  REMOVE_FROM_BALANCE,
  ADD_FRIEND,
  MAKE_PICK,
  WITHDRAW_BALANCE
} from './actions'

// **** initial state if needed ****
// const initialState = {
//   friends: [],
//   choices: [],
//   currentCategory: '',
//   accountBalance: 0,
//   money: [],
//   nominees: [],
// }

export const reducers = (state, action) => {
  switch (action.type) {
    case BET_MONEY:
      return {
        ...state,
        accountBalance: action.accountBalance
        // accountBalance: state.accountBalance.map(amount => {
        //   if (action._id === user._id) {
            
        //   }
        // })
        // cart: state.cart.map(product => {
        //   if (action._id === product._id) {
        //     product.purchaseQuantity = action.purchaseQuantity
        //   }
        //   return product
        // })
      }

    case ADD_TO_BALANCE:
      return {
        ...state,
        accountBalance: action.accountBalance
      }

    case REMOVE_FROM_BALANCE:
      return {
        ...state,
        accountBalance: action.accountBalance
      }

    case ADD_FRIEND:
      return {
        ...state,
        friends: action.friends
      }

    case MAKE_PICK:
      return {
        ...state,
        choices: action.choices
      }

    case WITHDRAW_BALANCE:
      return {
        ...state,
        accountBalance: action.accountBalance
      }


    default:
      return state
  }
}

// define functionality of each action

// import {
//   UPDATE_PRODUCTS,
//   ADD_TO_CART,
//   UPDATE_CART_QUANTITY,
//   REMOVE_FROM_CART,
//   ADD_MULTIPLE_TO_CART,
//   UPDATE_CATEGORIES,
//   UPDATE_CURRENT_CATEGORY,
//   CLEAR_CART,
//   TOGGLE_CART
// } from "./actions";

// do we need an initial state?
// const initialState = {
//   products: [],
//   categories: [],
//   currentCategory: '',
//   cart: [],
//   cartOpen: false
// };

// export const reducers = (state = initialState, action) => {
//   switch (action.type) {
//     case UPDATE_PRODUCTS:
//       return {
//         ...state,
//         products: [...action.products],
//       };

//     case ADD_TO_CART:
//       return {
//         ...state,
//         cartOpen: true,
//         cart: [...state.cart, action.product],
//       };

//     case ADD_MULTIPLE_TO_CART:
//       return {
//         ...state,
//         cart: [...state.cart, ...action.products],
//       };

//     case UPDATE_CART_QUANTITY:
//       return {
//         ...state,
//         cartOpen: true,
//         cart: state.cart.map(product => {
//           if (action._id === product._id) {
//             product.purchaseQuantity = action.purchaseQuantity
//           }
//           return product
//         })
//       };

//     case REMOVE_FROM_CART:
//       let newState = state.cart.filter(product => {
//         return product._id !== action._id;
//       });

//       return {
//         ...state,
//         cartOpen: newState.length > 0,
//         cart: newState
//       };

//     case CLEAR_CART:
//       return {
//         ...state,
//         cartOpen: false,
//         cart: []
//       };

//     case TOGGLE_CART:
//       return {
//         ...state,
//         cartOpen: !state.cartOpen
//       };

//     case UPDATE_CATEGORIES:
//       return {
//         ...state,
//         categories: [...action.categories],
//       };

//     case UPDATE_CURRENT_CATEGORY:
//       return {
//         ...state,
//         currentCategory: action.currentCategory
//       }

//     default:
//       return state;
//   }
// };

export default reducers;