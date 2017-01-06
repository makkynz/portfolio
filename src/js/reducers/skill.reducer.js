

export default function (state = null, action) {
   
    switch (action.type) {
        case 'RECEIVE_SKILLS':           
            return action.payload;
            break;      

        case 'RECEIVE_SKILLS':           
            return action.payload;
            break;

        case 'SELECT_SKILL':            
            state.map(s=>{
                s.isSelected = (s.name === action.payload.name);
             });      
             
            return Object.assign([], state) ;

        case 'DESELECT_SKILL':
            state.map(s=>{
                s.isSelected = false;
             });      
             
            return Object.assign([], state) ;
    }
    return state;
}