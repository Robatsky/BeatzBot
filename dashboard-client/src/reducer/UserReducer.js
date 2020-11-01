export const UserReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                authenticated: true
            }
        case 'LOGOUT':
            return {
                ...state,
                authenticated: false
            }
        case 'INITIAL':
            const { data, authenticated } = action.payload;
            console.log("dispatch initial witth ",  data, authenticated);
            return {
                data,
                authenticated
            }
        default:
            return state;
    }
};
