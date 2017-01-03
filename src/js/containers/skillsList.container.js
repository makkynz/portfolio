import { connect } from 'react-redux'
import { fetchSkills } from '../actions/skills.actions';
import { openModal } from '../actions/app.actions';
import skillsList from '../components/partial/skillsList';


const mapStateToProps = (state) => {
  
   return { 
    skills: state.skills
  };
}

const mapDispatchToProps = (dispatch) => {  
  return {
    
    fetchSkills: () => {
      
      dispatch(fetchSkills());
    },
    

    openModal: () =>{
      dispatch(openModal());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(skillsList);