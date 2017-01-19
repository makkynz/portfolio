import { connect } from 'react-redux'
import { fetchSkills, selectSkill } from '../actions/skills.actions';
import { openModal } from '../actions/app.actions';
import skillsList from '../components/partial/skillsList';


const mapStateToProps = (state) => {
  
   return { 
    skills: state.skills
  };
}

const mapDispatchToProps = (dispatch) => {  
  return {
    
    fetchSkills: (deepLinkSkill) => {
      
      dispatch(fetchSkills(deepLinkSkill));
    },
    
     selectSkill: (skill)=>{
     
      dispatch(selectSkill(skill));
    },

    openModal: () =>{
      dispatch(openModal());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(skillsList);