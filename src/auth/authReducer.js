import { types } from "../types/types";

// const state = {
//     name: 'Francisco',
//     logged: true,
// }

// const loginAction = {
//     type: 'LOGIN',
//     payload: {
//         name: 'fernando',
//         email: "sdasds@asdas.com"
//     }
// }

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true,
            }
        case types.logout:
            return {
                logged: false,
            }

        default:
            return state;
    }

}

