import React from 'react';
import {batchActions, enableBatching} from 'redux-batched-actions';
import { openModal } from './app.actions';

export const fetchSkills = () => {

    return dispatch => {
        dispatch({
            type: 'FETCH_SKILLS'
            
        })

        fetch('/data/skills.json')
            .then(response => response.json())
            .then(json=>   
                dispatch(receiveSkills(json))
            )
  }  
};

 const receiveSkills = (skills) => {
    
    skills.forEach((item, i)=> {
        skills[i].key = i;           
    })             
         
    return {
        type: 'RECEIVE_SKILLS',
        payload: skills        
    }
};
