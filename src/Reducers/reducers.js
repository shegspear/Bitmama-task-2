import {
    SIGN_IN,
    LOG_USERS,
    EDIT_USERNAME,
    LOG_OUT,
    GET_SESSIONS
} from '../Constants/constants';

export const userReducer = (state = {userData: {}}, action) => {
    switch(action.type) {
        case SIGN_IN:
        case EDIT_USERNAME:
            return {
                ...state,
                userData: action.payload
            };

        case LOG_OUT:
            return {};
        
        default:
            return state;    
    }
};

export const usersReducer = (state = {users: []}, action) => {
    switch(action.type) {
        case LOG_USERS:
        case EDIT_USERNAME:
        case LOG_OUT:
            const user = action.payload;
            const userExist = state.users.find(x => x.username.toLowerCase() === user.username.toLowerCase());

            if(userExist) {
                return {
                    ...state,
                    users: state.users.map(x => x.username.toLowerCase() === userExist.username.toLowerCase() ? user : x)
                };
            } else {
                return {
                    ...state,
                    users: [...state.users, user]
                };
            }
        
        default:
            return state;    
    }
};
