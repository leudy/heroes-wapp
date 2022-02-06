import { types } from "../types/types";

const state = {
  IsAuthenticated: false,
};

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      // make login
      return {
        name: action.payload.name,
        Athenticated: true,
      };
      break;
    case types.logut:
      return {
        Athenticated: false,
      };

    default:
      return { state };
  }
};
