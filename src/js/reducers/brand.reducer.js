

export default function (state = null, action) {
   
    switch (action.type) {
        case 'GET_BRANDS':           
            return action.payload;
            break;

        case 'SELECT_BRAND':            
            state.map(s=>{
                s.isSelected = (s.key === action.payload.key);
             });      
             
            return Object.assign([], state) ;

        case 'DESELECT_BRAND':
            state.map(s=>{
                s.isSelected = false;
             });      
             
            return Object.assign([], state) ;
           

        case 'RECEIVE_BRANDS':
            return action.payload;
            break;

        case 'RECEIVE_BRAND_HTML':
        
            state.map(s=>{
                if (s.key === action.payload.brand.key){
                    s.html = action.payload.html
                }
             });      
             
            return Object.assign([], state) ;
    }
    return state;
}