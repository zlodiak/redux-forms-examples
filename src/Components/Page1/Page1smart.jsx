import {connect} from "react-redux";
import { setTitleCreator } from '../../redux/appReducer';

import Page1 from './Page1';

const mapStateToProps = state => {
  return {
    title: state.appReducer.title,
  }
}

export default connect(mapStateToProps, { setTitleCreator })(Page1);