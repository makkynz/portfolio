import React from 'react';
import {batchActions, enableBatching} from 'redux-batched-actions';
import { openModal } from './app.actions';

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
/***********************/
 export const selectBrand = (brand) => {  
    return dispatch => {
        dispatch(fetchBrandHTML(brand)).then(()=>{;    
            dispatch({type: 'SELECT_BRAND',payload: brand })
            dispatch(openModal());
        })
    }    

};

export const deselectBrand = (brand) => {       
    return {
        type: 'DESELECT_BRAND',
        payload: brand        
    }
};

export const fetchBrandHTML = (brand) => {

    return dispatch => {
        dispatch({
            type: 'FETCH_BRAND_HTML'            
        })
       return  fetch('/data/brand-html/'+brand.ref+'.html')
            .then(response => {               
                return response.text()
            })
            .then(html=> {             
               return dispatch(receiveBrandHTML(brand, html))
            }
        )
  }  
};

 const receiveBrandHTML = (brand, html) => {
        
    return {
        type: 'RECEIVE_BRAND_HTML',
        payload: {brand: brand,  html: html}        
    }
};
