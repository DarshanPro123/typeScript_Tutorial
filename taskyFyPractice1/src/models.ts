export interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
}

// import { useReducer } from "react";
// type Actions =
//   | { type: "ADD_TODO"; payload: Todo }
//   | { type: "DELETE_TODO"; payload: number }
//   | { type: "TOGGLE_TODO"; payload: number };

// const TodoReducer = (state: Todo[], action: Actions) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return [...state, action.payload];
//     case "DELETE_TODO":
//       return state.filter((todo) => todo.id !== action.payload);
//     case "TOGGLE_TODO":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, isCompleted: !todo.isCompleted }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export const ReducerExample = () => {
//   const [state, dispatch] = useReducer(TodoReducer, []);
// };
