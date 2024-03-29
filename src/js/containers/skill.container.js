import { connect } from 'react-redux'
import Skill from '../components/partial/skill';
import {  deselectSkill } from '../actions/skills.actions';
import { closeModal } from '../actions/app.actions';

const mapStateToProps = (state) => { 
 let selectedSkill= state.skills.find(s => s.isSelected);
  return { 
    skill: selectedSkill
   
  };
}

const mapDispatchToProps = (dispatch) => {
  
  return {   
    deselectSkill: (skill)=>{
     
      dispatch(deselectSkill(skill));
    },
    closeModal: ()=>{
      dispatch(closeModal());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Skill);