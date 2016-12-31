
let initialState = {
    isModalOpen: false 
}

export default function (state = initialState, action) {
   
    switch (action.type) {
        
        case 'OPEN_MODAL':            
            state.isModalOpen = true;   
            return Object.assign({}, state) ;

        case 'CLOSE_MODAL':
            state.isModalOpen = false;   
            return Object.assign({}, state) ;           
    }
    return state;
}