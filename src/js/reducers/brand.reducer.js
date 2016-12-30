

export default function (state = null, action) {
    console.log('ACTION: ',action.type);
    switch (action.type) {
        case 'GET_BRANDS':           
            return action.payload;
            break;

        case 'SELECT_BRAND':           
            return action.payload;
            break;

        case 'RECEIVE_BRANDS':
            return action.payload;
            break;
    }
    return state;
}