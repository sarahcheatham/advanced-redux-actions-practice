import { connect } from 'react-redux';
import {setSpecialText} from "../actions";
import SpecialTextBox from "../components/SpecialTextBox";


function mapDispatchToProps(dispatch){
  return {
   set:function(txt){
     let action = setSpecialText(txt);
     dispatch(action);
   }
  }
}

const specialTextBoxContainer = connect(null, mapDispatchToProps)(SpecialTextBox)
export default specialTextBoxContainer;
