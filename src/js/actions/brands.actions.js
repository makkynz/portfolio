import React from 'react';
import {batchActions, enableBatching} from 'redux-batched-actions';
import { openModal } from './app.actions';

export const fetchBrands = (selectedBrand) => {
  
    return dispatch => new Promise((resolve, reject) => {
        dispatch({
            type: 'FETCH_BRANDS'
            
        })

        fetch('/data/brands.json?r='+ Math.floor(Math.random()*100))
            .then(response => response.json())
            .then(json=> {  
                    dispatch(receiveBrands(json));
                    if(selectedBrand){
                        dispatch(selectBrand(json.filter(b=>b.ref === selectedBrand)[0]));
                    }
                    console.log('a');
                    resolve();
                }
            )
  })  
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
       return  fetch('/data/brand-html/'+brand.ref+'.html?r='+ Math.floor(Math.random()*100))
           
            .then(response => {   
               
                return response.text();
            })
            .then(html=> {    
               
               html = html.indexOf('<html') ===-1 && html.indexOf('Cannot GET') === -1 ? html : null;      
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
