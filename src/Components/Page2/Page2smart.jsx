import {connect} from "react-redux";
import { setTitleCreator } from '../../redux/appReducer';

import Page2 from './Page2';

const mapStateToProps = state => {
  return {
    title: state.appReducer.title,
  }
}

export default connect(mapStateToProps, { setTitleCreator })(Page2);