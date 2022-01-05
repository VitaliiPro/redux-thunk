import { SET_USERS } from "./actions";

const initialState = {
    users: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload.data
            };
        default:
            return state;
    }
};
