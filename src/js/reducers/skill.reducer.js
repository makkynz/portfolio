

export default function (state = null, action) {
   
    switch (action.type) {
        case 'RECEIVE_SKILLS':           
            return action.payload;
            break;

      

        case 'RECEIVE_SKILLS':
            console.log('test');
            return action.payload;
            break;

        
    }
    return state;
}