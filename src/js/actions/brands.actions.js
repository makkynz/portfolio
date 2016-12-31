import React from 'react';
import 'whatwg-fetch';

export const FETCH_BRANDS = 'FETCH_BRANDS';
export const RECEIVE_BRANDS = 'RECEIVE_BRANDS';

export const fetchBrands = () => {

    return dispatch => {
        dispatch({
            type: 'FETCH_BRANDS'
            
        })

        fetch('/data/brands.json')
            .then(response => response.json())
            .then(json=>   
                dispatch(receiveBrands(json))
            )
  }  
};

 const receiveBrands = (brands) => {
    
    brands.forEach((item, i)=> {
        brands[i].key = i;           
    })             
         
    return {
        type: 'RECEIVE_BRANDS',
        payload: brands        
    }
};

 export const selectBrand = (brand) => {        
         
    return {
        type: 'SELECT_BRAND',
        payload: brand        
    }
};

export const deselectBrand = (brand) => {        
         
    return {
        type: 'DESELECT_BRAND',
        payload: brand        
    }
};
